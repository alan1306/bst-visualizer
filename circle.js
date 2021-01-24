
Node.prototype.drawCircle = function()
{
    let node=this
    let rad=1.51*Math.PI;
    let temp=1.51*Math.PI+2*Math.PI;
    let x=this.x;
    let y=this.y;
    let radius=35;
    let value=this.value
    //console.log(nodes);
    stroke(22,94,31);
    strokeWeight(2);
    fill(204,240,204);
    if(this.begin==false)
    {
    drawCircle();
function drawCircle()
{
    
    if(rad<temp)
    { 

      
    requestAnimationFrame(drawCircle);
    }
    else
    {
 
    test(node);
    
    }
    arc(x,y,radius,radius,1.5*Math.PI,rad,open);
    rad+=0.1;
}
this.begin=true;
    }
    else
    {
        arc(this.x,this.y,this.radius,this.radius,0,PI*2);
        test(node);
    }

}
function test(node)
{
fill(0);    
stroke(0);
strokeWeight(0.5);
textSize(13);
 textAlign(CENTER, CENTER);
 text(node.value,node.x,node.y);
}