arr = [];

class Brick {
    constructor() {
        this.offSetX = OFF_SET_X; // Thiet lap toa do X
        this.offSetY = OFF_SET_Y; // Thiet lap toa do Y
        this.marginBetween = MARGIN_BETWEEN;
        this.width = WIDTH_BRICKS;
        this.height = HEIGHT_BRICKS;
        this.totalRows = TOTAL_ROWS;
        this.totalCols = TOTAL_COLS;
    }

    xyCoordinate() {
        for (let i = 0; i < this.totalRows; i++) {
            for (let j = 0; j < this.totalCols; j++) {
                arr.push(
                    {
                        oX: this.offSetX + j * (this.width + this.marginBetween),
                        oY: this.offSetY + i * (this.height + this.marginBetween),
                        statusBricks: true
                    });
            }
        }
    };

    drawBricks(bricks) {
        arr.forEach(function (element) {
            if (element.statusBricks) {
                ctx.beginPath();
                ctx.rect(element.oX, element.oY, bricks.width, bricks.height);
                ctx.fill();
                ctx.closePath();
            }
        })
    };

    ballImpactBricks(ball, bricks) {
        arr.forEach(function (element) {
            if (element.statusBricks) {
                if (ball.x >= element.oX &&    //Ball va cham goc tren ben phai
                    ball.x <= element.oX + bricks.width &&     //Ball va cham goc tren ben trai
                    ball.y + ball.radius >= element.oY &&      //Ball va cham goc duoi ben phai
                    ball.y - ball.radius <= element.oY + bricks.height)    //ball va cham goc duoi ben trai
                {
                    ball.dy = -ball.dy;      //Ball cham vao paddle di len la -dy => khi cham bricks ball se thanh -(-dy)
                    element.statusBricks = false;
                    scores++;
                    document.getElementById('chamgach').currentTime = 0;
                    document.getElementById('chamgach').play();
                }
            }
        });
    };
}