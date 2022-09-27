import {
  on,
  attr,
  text,
  memo,
  delay,
  addClass,
  removeClass,
  getNode as $,
  documentTitle,
  getRandomMinMax,
} from './lib/index.js';

// 애플리케이션 설정
const APP_CONFIG = {
  min: 40,
  max: 80,
  step: 1,
  current: 0,
  fps: 60,
  stopRandomCountUp: null,
};

// 카운트 목표 값 설정
function getTargetCount() {
  const { min, max } = APP_CONFIG;
  return getRandomMinMax(min, max);
}

// 문서 제목 카운트 목표 값 설정
function updateDocumentTitle(targetCount) {
  documentTitle((initialDocTitle) => `(${targetCount}) ${initialDocTitle}`);
}

// UI의 카운트 값 업데이트
function renderCount(currentCount, isStop) {
  const count = memo('Count');
  text(count, currentCount);
  isStop && addClass(count, 'animate-none');
}

// 애니메이션
function animate(initialCount, targetCount) {
  let stopAnimateId;
  let count = initialCount;
  const FPS = APP_CONFIG.fps;

  return function animateCount(render) {
    count += 1;
    let isStopAnimate = count >= targetCount;

    // 증가하는 카운트 값 목표 값 비교
    render(count, isStopAnimate);

    // 카운트 업이 정지되는 조건
    if (isStopAnimate) {
      return clearTimeout(stopAnimateId);
    }

    stopAnimateId = delay(animateCount.bind(this, render), 1000 / FPS);
    // 클린업(정리) 함수 외부에 내보내기
    return () => clearTimeout(stopAnimateId);
  };
}

// 애플리케이션 랜딩 초기화
function randomCountUp() {
  reset();
  const TARGET_COUNT = getTargetCount();
  updateDocumentTitle(TARGET_COUNT);

  const animateCount = animate(APP_CONFIG.current, TARGET_COUNT);
  APP_CONFIG.stopRandomCountUp = animateCount(renderCount);
}

function reset() {
  // if (typeof stopRandomCountup === 'function') {
  //   stopRandomCountUp();
  // }

  APP_CONFIG.stopRandomCountUp?.();

  const count = memo('Count', () => $('.Count'));
  removeClass(count, 'animate-none');
}

// 문서 요소 참조
const startButton = $('.Button');

// 애플리케이션 최초 구동
randomCountUp();

// 이벤트 핸들링
on(startButton, 'click', randomCountUp);
