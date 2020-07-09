var initobj = new init();
function movement()
{
    var that = this;
    var dir ="left";

    this.move =function(){
        var snakex = initobj.snake[0].x;
        var snakey = initobj.snake[0].y;
        if (dir == "left")
        {
            snakex += 10;
        }
        if (dir == "up") {
            snakey -= 10;
        }
        if (dir == "right") {
            snakex -= 10;
        }
        if (dir == "down") {
            snakey += 10;
        }

        this.obj = new Box(10, 10, snakex, snakey, "", "black");
        initobj.snake[initobj.snake.length -1 ].remove();
        initobj.snake.pop(); //remove last item from array
        initobj.snake.unshift(this.obj); // add new item in array
        initobj.draw();
        //console.log(snakey);
    }

    this.direction = function (event) {
        
            if (event.keyCode == 39 && dir != "right") {
                dir = "left";
            }

            if (event.keyCode == 38 && dir != "down") {
                dir = "up";
            }

            if (event.keyCode == 37 && dir != "left") {
                dir = "right";
            }

            if (event.keyCode == 40 && dir != "up") {
                dir = "down";
            }

    }
}


