const fs = require('fs');
const path = require('path');

// fs.readFile('./math/math.js', 'utf-8', (err, data)=>{// 이때는 .js를 생략하면 안된다.
//     console.log(data);
// }) 
fs.readFile('./math/math.js', (err, data)=>{
    // console.log(data.toString());
    process.emit('data');// 우리가 이벤트를 만들 수 있다. data를 발생시켰다.
}) 

fs.readFile('./data/lorem.txt', 'utf-8', (err, data)=>{ //다양한 파일들을 읽어와서 조립 가능하다.
    // console.log(data.toString());
}) 

fs.readFile('./data/user.json', 'utf-8', (err, data)=>{ //다양한 파일들을 읽어와서 조립 가능하다.
    // console.log(data.toString());
}) 

// 프로세스
process.on('data', ()=>{
    console.log('data event 발생');
})