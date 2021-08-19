const timeout = setTimeout(()=>{
    console.log("1.5초 후 실행");
}, 1500);

const interval = setInterval(() => {
    console.log("1초마다 실행");
}, 1000);

const timeout2 = setTimeout(() => {
    console.log('실행되지 않습니다.');
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

const immediate = setImmediate(()=>{
    console.log("즉시 실행");
});
const immediate2 = setImmediate(()=>{
    console.log("실행되지 않습니다.");
});

clearImmediate(immediate2);

// 여기서 setImmediate(콜백)이랑 setTimeout(콜백, 0)이랑 차이점은 setImmediate가 먼저 실행된다. 특수한 경우에. 그냥 쓰지 않는게 더 좋다. 
