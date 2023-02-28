let hourhand = document.getElementById('hourhand');
let minhand = document.getElementById('minhand');
let secondhand = document.getElementById('secondhand');

//Loop
setInterval(()=>{
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    // variale for rotation
    let hr = hour*30 + min/2;
    let mr = min*6;
    let sr = sec*6;

    // Hand Rotation 
    hourhand.style.transform = `rotate(${hr}deg)`;
    minhand.style.transform = `rotate(${mr}deg)`;
    secondhand.style.transform = `rotate(${sr}deg)`;
} ,1000)