const fs = require('fs');
const path = require('path');

// 경로를 만들어 줄때 사용하는 내장모듈
// window   : /(영문), ￦(한글)
// unix계열  : \
 

// 현재 폴더 정보
// 전역변수로 가지고 있다.
// => : __filename(파일에 대한 정보), __dirname(폴더에 대한 정보)

// path.join(__dirname, 'math', 'math.js')
// =>
// ./math/math.js로 만들어 준다.
fs.readFile(path.join(__dirname, 'math', 'math.js'), (err, data)=>{
    console.log(data.toString());
}) 

// './data/lorem.txt'
const {join} = require('path');
console.log('절대경로', __dirname);

fs.readFile(join(__dirname, 'data', 'lorem.txt'), 'utf-8', (err, data)=>{ //다양한 파일들을 읽어와서 조립 가능하다.
    console.log(data.toString());
}) 


fs.readFile(join(__dirname, '/data/user.json'), 'utf-8', (err, data)=>{ //다양한 파일들을 읽어와서 조립 가능하다.
    console.log(data.toString());
}) 