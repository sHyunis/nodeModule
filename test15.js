const fs = require('node:fs');
const path = require('node:path');

const myPath = path.join(__dirname, 'data', 'lorem.txt');
fs.readFile(myPath, 'utf-8', (err, data)=>{
    if(err) throw err; // err 처리하는 코드에게 넘기기(에러가 났을 때 에러를 던진다.)
    if(data){console.log(data);}
})

// javascript는 싱글 쓰레드 (동시다발적으로 여러 일을 처리할 수 없다) => 멀티 쓰레드 인 것처럼 동작
// call stack과 queue , setTimeout, ...

for(let a = 0; a < 5; a++){
    fs.appendFile(myPath, "\n과일의 왕 : " + a, (err)=>{ // lorem.txt에 문자열이 추가된다.
        // if(err){console.log(err);}
        if(err) throw err;
    })
}


process.on('uncaughtException', (err)=>{ //err가 발생하면
    console.log('내가 처리한 에러 : ',err); //err를 찍어라
})
process.on('exit', ()=>{
    console.log('읽기 종료'); 
})
