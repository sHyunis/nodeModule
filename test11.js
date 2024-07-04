// 전역변수
console.log(__dirname);
console.log(__filename);

// os 내장 모듈
const os = require('os');
console.log(os.freemem());  //남은 메모리(여분의 메모리 확인 가능)
console.log(os.cpus());     //cpu 정보
console.log(os.homedir());  //사용자 폴더 위치
console.log(os.hostname()); //사용자 이름
