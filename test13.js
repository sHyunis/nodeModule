const EventEmitter = require('events'); //이벤트를 처리하는 내장객체
const customEvent = new EventEmitter(); //이벤트를 사용할 객체 생성

customEvent.on('event1', ()=>{
    console.log('event1 발생');
})
customEvent.on('hello', ()=>{
    console.log('hello 발생');
})
customEvent.once('melon', ()=>{ // once : 한번만 실행
    console.log('melon 한번만 발생');
    // 중복처리시 문제가 발생할 수 있을때
    // once를 사용하여 한번만 처리되도록 이벤트 등록
})

setTimeout(()=>{
    customEvent.emit('hello')
},3000)
customEvent.emit('event1')

customEvent.emit('melon') //두개를 작성해도 한번만 처리된다.
customEvent.emit('melon')
