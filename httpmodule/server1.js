const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/json'}); // 요청 성공 200, 응답에 대한 정보(콘텐츠 형식) -> 이러한 정보가 기록되는 부분을 헤더라고 한다.
    
    res.write('<h1>Hello node</h1>');
    
    res.end('<p>Hello server</p>');//응답 종료 메서드. 문자열을 클라이언트에게 보낸후 종료

}).listen(8080, () => { //클라이언트에 공개할 포트번호와 포트 연결 완료후 실행될 콜백함수
    console.log('8080 포트에서 서버 대기중입니다');
});