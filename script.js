const colorEl = document.getElementById("color");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const sizeEl = document.getElementById("size");
const clearEl = document.getElementById("clear");
const canvas = document.getElementById("myCanvas");

let ctx = canvas.getContext("2d");

let size = 20;
let isPressed = false;
let color = 'black';
let x = undefined;
let y = undefined;

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle=color
  ctx.lineWidth=size
  ctx.stroke();
}

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size / 2, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", () => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
 if (isPressed) {
   const x2= e.offsetX
   const y2= e.offsetY

   drawLine(x,y,x2,y2)
   drawCircle(x2, y2)

   x=x2
   y=y2
 }
});

function line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2);
    ctx.strokeStyle=color
    ctx.lineWidth=size
    ctx.stroke();
}

increaseBtn.addEventListener("click", () => {
    size +=5;

    if(size >50){
        size=50
    }

    updateSizeOnScreen()
});

decreaseBtn.addEventListener("click", () => {
    size -=5;

    if(size<5){
        size=5
    }

    updateSizeOnScreen();
});

colorEl.addEventListener("change", (e) => {
    color = e.target.value;
});

clearEl.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

function updateSizeOnScreen() {
    sizeEl.innerText = size;
}