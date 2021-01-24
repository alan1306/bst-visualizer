Line.prototype.drawLine = function()
{
  //  console.log("hiiii");
    child=this.childNode;
    parent=this.parentNode;
    let x1=this.x1;
    let x2=this.x2;
    let y1=this.y1;
    let y2=this.y2;
    //console.log("in line");
    stroke(22,94,31);
    strokeWeight(2);
    if(this.anime==false)
    {
   //    console.log("in anime");
        //console.log(this);
        
        
        let m=(y1-y2)/(x1-x2);
    let x=x1;
    let y=m*(x-x1)+y1;
    let dx=2;
    drawLine();
        function drawLine()
        {
          //  console.log("inside drawLine");
            
            if(child.value<parent.value)
            {
            if(x>x2 && y<y2)
            {
                requestAnimationFrame(drawLine);
            }
            else
            {
               // console.log("in else");
                if(child.begin==false)
                {
             //   console.log("in if");
                
                circle();
                }
                else
                {
                    child.deleteAnimation(parent);
                }
            
            }
            line(x1, y1, x, y);
            x-=dx;
            y=m*(x-x1)+y1;  
            } 
         
            else
            {
              // console.log(x1,y1,x2,y2,x,y);
                
                if(x<x2 && y<y2)
                {
                   // console.log("in animation frame");
                    // line(x1, y1, x, y);
                    // x+=2;
                    // y=m*(x-x1)+y1;
                    requestAnimationFrame(drawLine);
                
                }
                else
                {
                    console.log("in else");
                    
                    if(child.begin==false)
                    {
                    console.log("in if");
                    
                    circle();
                    }
                    else
                    {
                        //clear();
                        //drawAll();
                        child.deleteAnimation(parent);
                    }
                }
                line(x1, y1, x, y);
                x+=dx;
                y=m*(x-x1)+y1;
             }
        
    }
    this.anime=true;
    }
    else
    {
      // console.log(x1,y1,x2,y2);
       stroke(22,94,31);
       strokeWeight(2);
        line(x1, y1, x2, y2);
    }
    function circle()
{
    child.drawCircle();
}
}
Line.prototype.update=function(node)
{
   // console.log("inine update");
    if(this.parentNode.value==node.value)
    {
        console.log("in parent");
        
        this.parentNode=node;
    }
    else
    {
       /// console.log("in child");
        
        this.childNode=node;
    }
   this.setCoordinates();
   //console.log(lines);
   
//    for(let i=0;i<lines.length;i++)
//    {
//        console.log(lines[i]);
       
//         lines[i].drawLine();
//    }
}
Line.prototype.setCoordinates = function()
{
    let x1,x2,y1,y2;
    let child=this.childNode;
    let parent=this.parentNode;
    let childx=child.x;
    let childy=child.y;
    let parentx=parent.x;
    let parenty=parent.y;
    let slope=Math.abs((childy-parenty)/(childx-parentx));
    let m=(childy-parenty)/(childx-parentx);
    let angle=Math.atan(slope);
    if(child.value<parent.value)
    {
         x1=parentx-Math.cos(angle)*20;
         y1=parenty+Math.sin(angle)*20;
         x2=childx+Math.cos(angle)*20;
         y2=childy-Math.sin(angle)*20;
    }
    else
    {
       // console.log("inside line");
        
         x1=parentx+Math.cos(angle)*20;
         y1=parenty+Math.sin(angle)*20;
         x2=childx-Math.cos(angle)*20;
         y2=childy-Math.sin(angle)*20;
       
        
    }  
    //console.log(x1,y1,x2,y2);
    this.x1=x1;
    this.x2=x2;
    this.y1=y1;
    this.y2=y2;      
}
// Line.prototype.draw= function()
// {
//     console.log("in draw");
    
//     child=this.childNode;
//     parent=this.parentNode;
//     let x1=parent.x;
//     let y1=parent.y;
//     let x2=child.x;
//     let y2=child.y;
//     line(x1, y1, x2, y2);
// }
function Line(parent,child)
{
    this.x1=null;
    this.y1=null;
    this.x2=null;
    this.y2=null;
    this.parentNode=parent;
    this.childNode=child;
    this.anime=false;
}
