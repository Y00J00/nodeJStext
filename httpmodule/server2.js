const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try {
        const data = await fs.readFile('./html/server2.html');
        res.writeHead(200, {'Content-Type':'text/html'}); // 요청 성공 200, 응답에 대한 정보(콘텐츠 형식) -> 이러한 정보가 기록되는 부분을 헤더라고 한다.
        res.end(data);
    } catch (err) {
        console.error(err);
        res.writeHead(500, {'Content-Type':'text/html'}); // 요청 성공 200, 응답에 대한 정보(콘텐츠 형식) -> 이러한 정보가 기록되는 부분을 헤더라고 한다.
        res.end(err.message);

    }
}).listen(8080, () => { // 서버연결
    console.log('8080 서버 대기중');
})