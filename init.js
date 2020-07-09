function init()
{
    this.snake = new Array();
    this.gameScreen = document.getElementById('gameScreen');
    this.screenhight = gameScreen.offsetHeight;
    this.screenwidth = gameScreen.offsetWidth;
    this.screenx = gameScreen.offsetLeft;
    this.screeny = gameScreen.offsetTop;
    this.food;
    var that = this;
    this.initsnake = function () {
        // var xpos = Math.random() * 1000;
        // var ypos = Math.random() * 550;
        var xpos = 10;
        var ypos = 20;
        // if (ypos < that.screeny)
        // {
        //     ypos = that.screeny;
        // }
        // if (xpos < that.screenx)
        // {
        //     xpos = that.screenx;
        // }
        
        for (var i = 0; i < 10; i++) {
            this.obj = new Box(10, 10, xpos, ypos, "", "black");
            this.snake.unshift(this.obj);
            xpos += 10;
        }
        console.log("Height : ", that.screenhight, " Width : ", that.screenwidth, " x : ", that.screenX, " y : ", that.screenY);
        
    }

    this.initfood = function () {
        var xpos = Math.floor(Math.random() * 110)*10;
        var ypos = Math.floor(Math.random() * 55) * 10;
        this.food = new Box(10, 10, xpos, ypos, "", "red");
        this.food.draw();
        console.log(xpos, ypos);
    }

    this.draw = function () {
        for (var i = 0; i < this.snake.length; i++)
            this.snake[i].draw();
        
    }
}