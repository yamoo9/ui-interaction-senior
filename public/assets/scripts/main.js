import { append, create, getNode as $, loop, text } from './lib/index.js';

/* -------------------------------------------------------------------------- */
/* 게임 상수                                                                    */
/* -------------------------------------------------------------------------- */

const SQUARE_ROWS = 10;
const SQUARE_COLS = 10;
const SQUARE_TOTAL = SQUARE_ROWS * SQUARE_COLS;
const GAME_ELEMENTS = {
  grid: 'Grid',
  square: 'Square',
  snake: 'Snake',
  apple: 'Apple',
};

const gridElement = $(`.${GAME_ELEMENTS.grid}`);

/* -------------------------------------------------------------------------- */
/* 게임 변수                                                                    */
/* -------------------------------------------------------------------------- */

let squares = [];

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
  console.log(squares);
}

drawSquares({ showGridNumbers: true });
