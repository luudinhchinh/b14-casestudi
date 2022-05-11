let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let startGame;
let arr = [];
let scores = DEFAULT_SCORE;
let red, blue, green;

let ball = new Ball();
ball.drawBall();

let paddle = new Paddle();
paddle.drawPaddle();

let bricks = new Brick();
bricks.xyCoordinate();
bricks.drawBricks(bricks);

let text = new Text();

window.addEventListener("keydown", onkeydown);
window.addEventListener("keyup", onkeyup);

function getRandomColor() {
    red = Math.floor(Math.random()*255);
    blue = Math.floor(Math.random()*255);
    green = Math.floor(Math.random()*255);
    return "rgb("+red+", "+blue+", "+green+")";
}

function onkeyup(evt) {
    switch (evt.keyCode)
    {
        case 37:
            paddle.isLeft = false;
            break;
        case 39:
            paddle.isRight = false;
            break;
    }
}

function onkeydown(e) {
    console.log(e.keyCode);
    switch (e.keyCode)
    {
        case 37:
            paddle.isLeft = true;
            break;
        case 39:
            paddle.isRight = true;
            break;
    }
}

function gameOver() {
    if (ball.y > canvas.height - ball.radius)
    {
        document.getElementById('thua').currentTime = 0;
        document.getElementById('thua').play();
        clearInterval(startGame);
        text.showGameOver(ctx);
    }
}

function gameWin()
{
    document.getElementById("result").innerHTML= scores;
    if (scores >= 30)
    {
        document.getElementById('thang').currentTime = 0;
        document.getElementById('thang').play();
        clearInterval(startGame);
        text.showWin(ctx);
    }
}
function gameStart() {
    startGame = setInterval(function ()
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ball.drawBall();
        paddle.drawPaddle();
        ball.moveBall(paddle);
        paddle.movePaddle();
        bricks.drawBricks(bricks);
        bricks.ballImpactBricks(ball, bricks);
        gameOver();
        gameWin();
    }, 1);
}

function start() {
 gameStart()
}

function reset() {
    window.location.reload();
}