var initobj = new init();
function eat()
{
    var scoreboard = document.getElementById("score");
    var score = 0;
    var that = this;
    this.eatfood = function () {
        var snakex = initobj.snake[0].x;
        var snakey = initobj.snake[0].y;
        var foodx = initobj.food.x;
        var foody = initobj.food.y;
        if ((snakex + 10) > foodx && snakex < (foodx + 10) && (snakey + 10) > foody && snakey < (foody + 10)) {
            score +=1;
            scoreboard.innerHTML = "Score = " + score;
            this.obj = new Box(10, 10, snakex, snakey, "", "black");
            initobj.snake.unshift(this.obj); // add new item in array
            initobj.draw();
            initobj.food.remove(); // remove eaten food
            initobj.initfood(); // place another food
        }

    }
}