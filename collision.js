var initobj = new init();
function collision()
{
    this.gameover = false;
    var that = this;
    this.bordercollision = function ()
    {
       // for (var i = 0; i < initobj.snake.length; i++) {
        var snakex = initobj.snake[0].x;
        var snakey = initobj.snake[0].y;
        // console.log("x", snakex);
        // console.log("y", snakey);
        //console.log(snakex, snakey, initobj.screenx);
            //detect colision between boder and object
        if (snakex+10 < initobj.screenx) // check if box going left
            {
            console.log("left collision",snakex,initobj.screenx);
            that.gameover = true;
            }
        if (snakex > initobj.screenwidth) // check if box going right
            {
            console.log("right collision",snakex,initobj.screenwidth);
            that.gameover = true;
            }
        if (snakey < initobj.screeny) //check if box going up
            {
            console.log("up collision",snakey,initobj.screeny);
            that.gameover = true;
            }
        if (snakey > initobj.screenhight) //check if box going down
            {
            console.log("down collision",snakey,initobj.screenhight);
            that.gameover = true;
            }
    }
    
    this.bodycollision = function ()
    {
        var snakex = initobj.snake[0].x;
        var snakey = initobj.snake[0].y;
        for (var i = 1; i < initobj.snake.length; i++)
        {
            if ((snakex + 10) > initobj.snake[i].x && snakex < (initobj.snake[i].x + 10) && (snakey + 10) > initobj.snake[i].y && snakey < (initobj.snake[i].y + 10))
            {
                that.gameover = true; 
            }
        }
        
    }
}