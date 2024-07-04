// node는 순차처리 안된다.

const fs = require('node:fs');
const path = require('node:path');
// event Loop
// node가 처리하는 방식

// 동기식
// 비동기 처리 : 완료를 보증 => 프로미스(도구), async, await
// 멀티쓰레드인 것처럼 보임 = 병렬 처리 처럼 보임
// => 빠른 처리 가능

const myPath = path.join(__dirname, 'data', 'lorem.txt');
console.log('1. 맨처음 ')
// callstack 메모리 (제일 먼저 실행되는 메모리)

fs.readFile(myPath, 'utf-8', (err, data)=>{
    console.log('2. 두번째');
    if(err) throw err; // err 처리하는 코드에게 넘기기(에러가 났을 때 에러를 던진다.)
    // if(data){console.log(data);}
    
})

console.log('3. 세번째');
    fs.appendFile(myPath, "\n과일의 왕 : ", (err)=>{ // lorem.txt에 문자열이 추가된다.
        console.log('4. 네번째');
        if(err) throw err;
    })

console.log('5. 다섯번째');
process.on('uncaughtException', (err)=>{ //err가 발생하면
    console.log('내가 처리한 에러 : ',err); //err를 찍어라
})
process.on('exit', ()=>{
    console.log('읽기 종료'); 
})
