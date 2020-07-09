var movementobj = new movement();
var initobj = new init();
var collisionobj = new collision();
var eatobj = new eat();
function main()
{
    var that = this;
    
    this.gameloop = setInterval(function () {
        document.onkeydown = movementobj.direction;
        movementobj.move();
        
        collisionobj.bordercollision();
        collisionobj.bodycollision();
        eatobj.eatfood();
        if (collisionobj.gameover == true)
        {
            console.log('Game Over');
            clearInterval(that.gameloop);
            }
    }, 100)
}

var mainobj = new main();
initobj.initsnake();
initobj.initfood();
initobj.draw();
//document.onkeydown = movementobj.direction;
mainobj.gameloop;