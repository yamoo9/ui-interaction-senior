import {
  on,
  each,
  getNode as $,
  documentTitle,
  getRandomMinMax,
} from './lib/index.js';

// 애플리케이션 설정
const APP_CONFIG = {
  min: 40,
  max: 80,
};

// 애플리케이션 랜딩 초기화
function init() {
  const { min, max } = APP_CONFIG;

  // 카운트 목표 값이 설정
  const TARGET_COUNT = getRandomMinMax(min, max);

  // 문서 제목이 카운트 목표 값 설정
  documentTitle((initialDocTitle) => {
    return `(${TARGET_COUNT}) ${initialDocTitle}`;
  });
}

init();

// 문서 요소 참조
const startButton = $('.Button');
on(startButton, 'click', init);
