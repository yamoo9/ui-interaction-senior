import {
  on,
  getNode as $,
  documentTitle,
  getRandomMinMax,
  text,
  memo,
} from './lib/index.js';

// 애플리케이션 설정
const APP_CONFIG = {
  min: 40,
  max: 80,
  step: 1,
  current: 12,
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
function renderCount(currentCount) {
  const count = memo(() => $('.Count'), 'Count');
  text(count, currentCount);
}

// 애플리케이션 랜딩 초기화
function randomCountUp() {
  const targetCount = getTargetCount();
  updateDocumentTitle(targetCount);

  let { current: count } = APP_CONFIG;
  renderCount(count);
}

// 문서 요소 참조
const startButton = $('.Button');

// 애플리케이션 최초 구동
randomCountUp();

// 이벤트 핸들링
on(startButton, 'click', randomCountUp);
