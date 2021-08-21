const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.addListener('event1', ()=>{ // addListener 가 on 이랑 똑같이 이벤트 등록하는 거임. 
    console.log('이벤트1');
});

myEvent.on('event2', ()=>{
    console.log('이벤트 2');
});

myEvent.on('event2', ()=>{
    console.log('이벤트 2 추가 ');
}); 

myEvent.once('event3', ()=>{
    console.log('이벤트 3');
}); // 한번만 실행됨

myEvent.emit('event1'); // emit 이벤트 호출 메서드 
myEvent.emit('event2');

myEvent.emit('event3');
myEvent.emit('event3');

myEvent.on('event4', ()=>{
    console.log('이벤트 4');
}); 

myEvent.removeAllListeners('event4'); // 이벤트에 연결된 모든 이벤트 리스너 삭제함 
myEvent.emit('event4'); // 실행 안 됨

const listener = () =>{
    console.log('이벤트 5');
}

myEvent.on('event5', listener);


console.log(myEvent.listenerCount('event2'));




