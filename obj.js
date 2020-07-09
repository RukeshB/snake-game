
function Box(width, height, x, y, border, backgroundcolor)
{
    var gamescreen = document.getElementById('gameScreen');
    this.height= height + "px";
    this.width = width + "px";
    // this.borderradius= "50%";
    this.x = x;
    this.y =y;
    this.position ="absolute";
    this.border = border;
    this.backroundcolor = backgroundcolor;
    var pdiv= document.createElement('div');
    this.draw = function()
    {
        pdiv.style.width= this.width;
        pdiv.style.height= this.height;
        // pdiv.style.borderRadius = this.borderradius;
        pdiv.style.border= this.border;
        pdiv.style.left= this.x + "px";
        pdiv.style.top= this.y + "px";
        pdiv.style.position= this.position;
        pdiv.style.backgroundColor= this.backroundcolor;
        //document.body.appendChild(pdiv);
        gamescreen.appendChild(pdiv);
        // pdiv.setAttribute('id',this.id);
    }
    
    this.remove = function ()
    {
        //document.body.removeChild(pdiv);
        gamescreen.removeChild(pdiv);
        }

}
