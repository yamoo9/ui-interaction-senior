const callButton = document.querySelector('.button');
const printArea = document.querySelector('.print code');

const printAlbums = (albumsString) => {
  printArea.textContent = albumsString;
};

const handleRequestAlbums = () => {
  // 클라이언트 → 요청 → 서버
  // 요청하는 데이터 (앨범 데이터)
  // e.g) 더보기 버튼을 클릭한 경우 데이터 요청
  // XMLHttpRequest, Fetch API, Library...

  // XMLHttpRequest 객체 생성
  const xhr = new XMLHttpRequest();

  // 생성된 XHR 객체를 통해 오픈(메서드, 라우트)
  xhr.open('GET', '/api/albums.json');

  // 생성된 XHR 객체에 이벤트 연결
  xhr.addEventListener('readystatechange', () => {
    // 이 과정에서 무엇을 해야할까?
    // 준비상태(readyState) 확인
    // 상태코드(status) 확인
    const { status, readyState, response } = xhr;

    if (status >= 200 || status < 400) {
      if (readyState === 4) {
        // console.table(JSON.parse(response));
        printAlbums(JSON.stringify(JSON.parse(response), null, 8));
      }
    } else {
      throw new Error('네트워크 통신에 장애가 있습니다.');
    }
  });

  // 생성된 XHR 객체를 통해 요청
  xhr.send(null);
};

callButton.addEventListener('click', handleRequestAlbums);
