class Ball {
    constructor() {
        this.x = X_BALL;
        this.y = Y_BALL;
        this.radius = RADIUS;
        this.color = COLOR_BALL;
        this.dx = DX;
        this.dy = DY;
    }

    drawBall() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    };

    moveX() {
        this.x = this.x + this.dx;
    };

    moveY() {
        this.y = this.y + this.dy;
    };

    moveBall(paddle) {
        this.moveX();
        this.moveY();

        if (this.x > canvas.width - this.radius || this.x < this.radius) {
            this.dx = -this.dx;
        }
        if (this.y < this.radius) {
            this.dy = -this.dy;
        }
        if (this.x < paddle.x + paddle.width
            && this.y < paddle.y + paddle.height
            && this.x > paddle.x - paddle.width
            && this.y > paddle.y - paddle.height) {
            this.dy = this.dy * (-this.dy * 1.000000001);
            console.log(this.dy);
            // document.getElementById('chamgo').currentTime = 0;
            document.getElementById('chamgo').play();
        }
    };
}