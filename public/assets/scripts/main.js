import {
  addClass,
  hasClass,
  removeClass,
  append,
  create,
  each,
  getNode as $,
  loop,
  on,
  text,
  getRandom,
} from './lib/index.js';

/* -------------------------------------------------------------------------- */
/* 게임 상수                                                                    */
/* -------------------------------------------------------------------------- */

const SPEED_RATIO = 0.9;
const SQUARE_ROWS = 10;
const SQUARE_COLS = 10;
const SQUARE_TOTAL = SQUARE_ROWS * SQUARE_COLS;
const GAME_ELEMENTS = {
  grid: 'Grid',
  square: 'Square',
  snake: 'Snake',
  apple: 'Apple',
};
const SCORE_VALUE = 10;
const BUTTONS = {
  start: 'Button--start',
  stop: 'Button--stop',
};

const gridElement = $(`.${GAME_ELEMENTS.grid}`);
const startButtonElement = $(`.${BUTTONS.start}`);
const stopButtonElement = $(`.${BUTTONS.stop}`);
const scoreDisplayElement = $(`.Score__Display`);

/* -------------------------------------------------------------------------- */
/* 게임 변수                                                                    */
/* -------------------------------------------------------------------------- */

let squares = [];
let snake = [2, 1, 0];
let speed = 1000;
let score = 0;
let isStaring = false;
let direction = 1;
let gameStopId;
let appleIndex;

/* -------------------------------------------------------------------------- */
/* 게임 함수                                                                    */
/* -------------------------------------------------------------------------- */

function createSquare() {
  const square = create('div', { class: GAME_ELEMENTS.square });
  return square;
}

function drawSquares({ showGridNumbers = false } = {}) {
  loop((i) => {
    const square = createSquare();
    if (showGridNumbers) text(square, i);
    append(gridElement, square);
    squares.push(square);
  }, SQUARE_TOTAL);
}

function drawApple() {
  // 스네이크와 겹치지 않게 그리드 위에 생성되어야 합니다.

  // 스네이크와 겹치지 않는 그리드 위치 찾기
  // do ~ while
  do {
    appleIndex = getRandom(SQUARE_TOTAL - 1);
  } while (
    /* 조건: squares 배열의 애플 인덱스(랜덤) 위치의 DOM 요소가 스네이크 클래스 이름을 포함한다면? */
    hasClass(squares[appleIndex], GAME_ELEMENTS.snake)
  );

  // 찾은 위치(인덱스)에 해당하는 squares DOM 요소에 애플 클래스 이름을 추가
  addClass(squares[appleIndex], GAME_ELEMENTS.apple);
}

function drawSnake() {
  each(snake, (index) => addClass(squares[index], GAME_ELEMENTS.snake));
}

function movingSnake() {
  // 꼬리 떼기
  let tailIndex = snake.pop();
  removeClass(squares[tailIndex], GAME_ELEMENTS.snake);
  // 머리 추가
  snake.unshift(snake[0] + direction);
  let headIndex = snake[0];
  addClass(squares[headIndex], GAME_ELEMENTS.snake);

  return { headIndex, tailIndex };
}

function move() {
  if (isGameOver()) {
    return gameOver();
  }

  let { headIndex, tailIndex } = movingSnake();

  // 스네이크 헤드가 애플을 먹으면 처리
  if (hasClass(squares[headIndex], GAME_ELEMENTS.apple)) {
    // 애플은 그리드에서 사라져야 함
    removeClass(squares[appleIndex], GAME_ELEMENTS.apple);
    // 스네이크의 테일(꼬리)이 길어져야 함
    addClass(squares[tailIndex], GAME_ELEMENTS.snake);
    snake.push(tailIndex);
    // 애플은 그리드의 임의 위치(스네이크와 겹치지 않게) 드로잉
    drawApple();
    // 스코어 업
    scoreUp();

    // 게임 난이도 업 (게임 속도 향상)
    speed *= SPEED_RATIO;
    // console.log({ speed });
  }

  gameStopId = setTimeout(move, speed);
}

function scoreUp() {
  // 점수 획득
  // score, SCORE_VALUE
  score += SCORE_VALUE;
  text(scoreDisplayElement, score);
}

function isGameOver() {
  let headIndex = snake[0];
  let nextHeadIndex = headIndex + direction;

  switch (direction) {
    // 벽의 위에 뱀 머리가 충돌
    case -SQUARE_COLS:
      if (nextHeadIndex < 0) return true;
      break;
    // 벽의 아래에 뱀 머리가 충돌
    case SQUARE_COLS:
      if (nextHeadIndex >= SQUARE_TOTAL) return true;
      break;
    // 벽의 왼쪽에 뱀 머리가 충돌
    case -1:
      if (headIndex % SQUARE_COLS === 0) return true;
      break;
    // 벽의 오른쪽에 뱀 머리가 충돌
    case 1:
      if (headIndex % SQUARE_COLS === SQUARE_COLS - 1) return true;
  }
  // 뱀의 몸통에 뱀 머리가 충돌
  // 조건: 뱀의 머리가 이동한 인덱스에 해당하는 DOM 요소에 Snake 클래스 이름이 포함되었다면?
  if (hasClass(squares[nextHeadIndex], GAME_ELEMENTS.snake)) {
    return true;
  }

  return false;
}

function gameOver() {
  alert('GAME OVER');
  gameStop();
}

function gameStart() {
  gameRestart();
}

function gameRestart() {
  move();
}

function gameStop() {
  clearTimeout(gameStopId);
}

function init() {
  drawSquares();
  drawSnake();
  drawApple();
}

init();

/* -------------------------------------------------------------------------- */
/* 이벤트 핸들링                                                                 */
/* -------------------------------------------------------------------------- */

function handleGameStart() {
  if (!isStaring) {
    console.log('game start');
    isStaring = true;
    gameStart();
    text(startButtonElement, 'restart');
  } else {
    console.log('game restart');
    gameRestart();
  }
  startButtonElement.disabled = true;
  stopButtonElement.disabled = false;
}

function handleGameStop() {
  console.log('game stop');
  gameStop();
  startButtonElement.disabled = false;
  stopButtonElement.disabled = true;
}

function handleKeyControl({ key }) {
  key = key.replace(/arrow/i, '').toLowerCase();
  switch (key) {
    case 'left':
      if (direction === 1) return;
      direction = -1;
      break;
    case 'right':
      if (direction === -1) return;
      direction = 1;
      break;
    case 'up':
      if (direction === SQUARE_COLS) return;
      direction = -SQUARE_COLS;
      break;
    case 'down':
      if (direction === -SQUARE_COLS) return;
      direction = SQUARE_COLS;
  }
}

on(startButtonElement, 'click', handleGameStart);
on(stopButtonElement, 'click', handleGameStop);
on(document, 'keyup', handleKeyControl);
