// 전역객체
// 프로그램을 실행 중인 상태 : 프로세스
// 이렇게 돌아가고 있는 프로세스에 대한 정보 => 전역객체(언제나 쓸 수 있는 것)

// console.log(process);
console.log("프로그램 실행");

// 프로그램이 끝나면 이벤트가 발생한다.
// 이벤트
// 브라우저 단의 이벤트 : click, mousemove, mouseover, mouseenter, ...

// 프로세스에서 이벤트가 발생
process.on('exit', ()=>{ //종료할때 
    console.log('프로그램 종료');
})

let count = 0;
const timer = setInterval(()=>{
    ++count;
    if(count >= 10) clearInterval(timer);
    process.emit('data'); // 시스템간에 발생한 이벤트가 아닌, 내가 발생시킨 이벤트
}, 3000)

process.on('data', ()=>{ 
    console.log('data event : '+ count);
})

// nodejs
// 윈도우 시스템, 데이터베이스 시스템 처리, node
// 내부적으로 서로 정보를 주고 받는다.
// 이벤트 : 눈에 보이지 않는 시스템간의 상호작용