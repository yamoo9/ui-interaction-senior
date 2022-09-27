import {
  on,
  getNode as $,
  documentTitle,
  getRandomMinMax,
  text,
  html,
} from './lib/index.js';

// 애플리케이션 설정
const APP_CONFIG = {
  min: 40,
  max: 80,
  step: 1,
  current: 12,
};

// 애플리케이션 랜딩 초기화
function randomCountUp() {
  // 설정 추출
  const { min, max, current } = APP_CONFIG;

  // 카운트 목표 값 설정
  const TARGET_COUNT = getRandomMinMax(min, max);

  // 문서 제목 카운트 목표 값 설정
  documentTitle((initialDocTitle) => `(${TARGET_COUNT}) ${initialDocTitle}`);

  // UI의 카운트 값 최초 업데이트
  text(count, current);
}

// 문서 요소 참조
const startButton = $('.Button');
const count = $('.Count');

// 애플리케이션 최초 구동
randomCountUp();

// 이벤트 핸들링
on(startButton, 'click', randomCountUp);
