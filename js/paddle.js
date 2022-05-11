class Paddle
{
       constructor(){
        this.width = WIDTH_PADDLE;
        this.height = HEIGHT_PADDLE;
        this.x = X_PADDLE;
        this.y = Y_PADDLE;
        this.speed = SPEED;
        this.color = getRandomColor();
        this.isRight = false;
        this.isLeft = false;
       }

    drawPaddle()
    {
        let x = this.x;
        let y = this.y;
        let width = this.width;
        let height = this.height
        ctx.beginPath();
        ctx.rect(x, y, width, height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    };

    moveLeft()
    {
        if (this.isLeft)
        {
            this.x = this.x  - this.speed;
        }
    };

    moveRight() {
        if (this.isRight)
        {
            this.x = this.x + this.speed;
        }
    };

    movePaddle() {
        this.moveLeft();
        this.moveRight();
        if (this.x < 0)
        {
            // Neu toa do x < 0 thi set x = 0 (Truong hop canh ben trai)
            this.x = 0;
        }
        else
        {
            if (this.x > canvas.width - this.width)
            {
                //Neu toa do x > gioi han ben phai thi set x = canvas.width - this.width = 500 - width paddle nhap vao (Truong hop canh ben phai)
                this.x = canvas.width - this.width;
            }
        }
    };
}