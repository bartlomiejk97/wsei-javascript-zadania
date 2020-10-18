// exercise 1
let time = 0;
const interval = setInterval(() => {
    time += 1;
    console.log(`Cześć po raz ${time}`);
    if(time >= 4) {
        clearInterval(interval);
    }
}, 1000);
