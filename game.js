document.addEventListener('mousemove', moveshoe)

function moveshoe(event) {
    // when the mouse moves, set xPosition and yPosition to the x and y of the cursor,
    // then assign those x and y to the bee in the css file (position absolute, use top and left)
    const shoe = document.getElementById('shoe');
    let xPosition;
    let yPosition;
    xPosition = event.clientX;
    yPosition = event.clientY;
    shoe.style.top = yPosition - 40 + 'px';
    // added 1 pixel to get the bee off of the cursor itself so you're clicking on what you want to click on not the bee image
    shoe.style.left = xPosition - 45 + 'px';
};

// var ball = document.getElementById("ball")

// var id = null;
// var

// function start() {
//     var ypos = ball.style.top;
//     clearInterval(id);
//     id = setInterval(frame, 5);

//     function frame() {
//         if (ball.style.top == ypos - 100) {
//             clearInterval(id);
//         } else {
//             ypos--;
//             ball.style.top = ypos + "px";
//         }
//     }
// }