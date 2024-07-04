const EventEmitter = require('events'); //이벤트를 처리하는 내장객체
const customEvent = new EventEmitter(); //이벤트를 사용할 객체 생성


// removeListener 사용시 콜백을 별도 함수로 지정해야 한다.
const event1Handle =()=>{
    console.log('event1 발생');
}

customEvent.addListener('event1', event1Handle)
customEvent.removeListener('event1', event1Handle) // 콜백함수를 밖으로 꺼내놓지 않으면 removeListener가 동작하지 않는다.


// removeListener 사용시 콜백을 별도 함수로 지정해야 한다.
const hello =()=>{
    console.log('hello 발생');
}

customEvent.addListener('hello', hello)
customEvent.removeListener('hello', hello)


customEvent.once('melon', ()=>{ 
    console.log('melon 한번만 발생');
})

setTimeout(()=>{
    customEvent.emit('hello')
},3000)
customEvent.emit('event1')

customEvent.emit('melon') 
customEvent.emit('melon')
