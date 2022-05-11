//Ball
const X_BALL = 400;
const Y_BALL = 550;
const RADIUS = 7;
const DX = 1;
const DY = 1;
const COLOR_BALL = "white";

//Bricks
const OFF_SET_X = 25;
const OFF_SET_Y = 25;
const MARGIN_BETWEEN = 70
const WIDTH_BRICKS = 70;
const HEIGHT_BRICKS = 15;
const TOTAL_ROWS = 5;
const TOTAL_COLS = 8;


//Main
const DEFAULT_SCORE = 0;

//Paddle
const X_PADDLE = 360;
const Y_PADDLE = 560;
const WIDTH_PADDLE = 85;
const HEIGHT_PADDLE = 10;
const SPEED = 3;

// text
function Text() {
    this.showGameOver = function (ctx)
    {
        ctx.fillStyle = getRandomColor();
        ctx.font = ("30px Arial");
        ctx.fillText("GAME OVER!", canvas.width/2.5, canvas.height/2.5);
        ctx.fillText('High score: ' + scores, canvas.width/2.5, canvas.height/2);
        ctx.fillText("Press f5 or RESET to restart!", canvas.width/3.4, canvas.height/2 + 50);
    };

    this.showWin = function (ctx)
    {
        ctx.fillStyle = getRandomColor();
        ctx.font = ("50px Arial");
        ctx.textAlign = "center";
        ctx.fillText("WIN!!", canvas.width/2, canvas.height/2);
        ctx.fillText("High score: " + scores, canvas.width/2, canvas.height/3);

    };
}