Node.prototype.circleAnimation = function(node,child)
{
    let parent=this;
    let child=child;
    let x=parent.x;
    let m=(parent.y-child.y)/(parent.x-child.x);
    let slope=Math.abs(m);
    let y=m*(x-parent.x)+parent.y;
    let dx=10;
    moveCircle();
    function moveCircle()
    {
        clear();
        for(let i=0;i<circles.length;i++)
        {
            nodes[i].drawCircle();
        }
        for(let i=0;i<lines.length;i++)
        {
            lines[i].drawLine();
        }
        if(parent.value>node.value)
        {
            ellipse(x, y, 35);
            x-=dx;
            y=m*(x-parent.x)+parent.y;
            requestAnimationFrame(moveCircle);
        }
        else
        {
            ellipse(x, y, 35);
            x-=dx;
            y=m*(x-parent.x)+parent.y;
            requestAnimationFrame(moveCircle);
        }
    }
}