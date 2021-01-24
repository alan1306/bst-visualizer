Node.prototype.circleAnimation = function(n,childNode)
{
    let parent=this;
    let child=childNode;
    let node=n;
     node.x=parent.x;
    let m=(parent.y-child.y)/(parent.x-child.x);
    let slope=Math.abs(m);
     node.y=m*(node.x-parent.x)+parent.y;
    let dx=10;
    moveCircle();
    function moveCircle()
    {
        //console.log("in move circle");
        
        drawAll();
        fill(195,235,214);
        ellipse(node.x,node.y,35);
        test(node);
        if(parent.value>node.value)
        {
            node.x-=dx;
            node.y=m*(node.x-parent.x)+parent.y;
            if(node.x>=child.x)
            {
            requestAnimationFrame(moveCircle);
            }
            else
            {
                drawAll();
                child.addNode(node);
            }
        }
        else
        {
            node.x+=dx;
            node.y=m*(node.x-parent.x)+parent.y;
            if(node.x<=child.x)
            requestAnimationFrame(moveCircle);
            else
            {
                drawAll();
                child.addNode(node);
            }
        }
    }
}
Node.prototype.deleteAnimation = function(node)
{
    console.log(lines);
    let child=this;
    let parent=node;
    let x1=parent.x;
    let y1=parent.y;
    let x2=child.x;
    let y2=child.y;
    let m=(y2-nodeToDelete.y)/(x2-nodeToDelete.x);
    let slope=Math.abs(m);
    let x=x2;
    let y=y2;
    let dx=1;
    if(nodeToDelete.x<child.x)
    {
     console.log("in if");
        
    dx=-dx;
    }
    let dy;
    if(nodeToDelete.lc==null||nodeToDelete.rc==null)
    moveCircle();
    else
    {
    // console.log("in else move");
     moveText();
    
    }
    function moveCircle()
    {                                                                           
        drawAll();
        //clear();
       //console.log(child,lines);
       
       // console.log("move circle");
        
        child.update(x,y);
           if(nodeToDelete.lc==child)
           {
            x+=dx;
            dy=m*(x-x2)+y2-y;
            y=m*(x-x2)+y2;
            traverse(child);
            if(x<=nodeToDelete.x)
            requestAnimationFrame(moveCircle);
           }
           else
           {
            x+=dx;
            dy=m*(x-x2)+y2-y;
            y=m*(x-x2)+y2;
           // console.log(x,y);
            
            traverse(child);
            if(x>=nodeToDelete.x)
            requestAnimationFrame(moveCircle);
           }
           for(let i=0;i<lines.length;i++)
           {
               if(lines[i].parentNode.value==child.value||lines[i].childNode.value==child.value)
               lines[i].update(child);
           }
        
    }
    function traverse(node)
    {
        //console.log("in travrse");
        for(let i=0;i<lines.length;i++)
           {
               if(lines[i].parentNode.value==node.value||lines[i].childNode.value==node.value)
               lines[i].update(node);
           }
        if(node.lc!=null)
        {  
            node.lc.x+=dx;
            node.lc.y+=dy;   
            node.lc.update(node.lc.x,node.lc.y);
            traverse(node.lc);
        }
        //console.log(this.value);
        
        if(node.rc!=null)
        {
            node.rc.x+=dx;
            node.rc.y+=dy;
            node.rc.update(node.rc.x,node.rc.y)
            traverse(node.rc);
        }
    }
    function moveText()
    {
        
        drawAll();
        x+=(dx/5);
        y=m*(x-x2)+y2;
        console.log(child.value);
        
        fill(0);    
        stroke(0);
        strokeWeight(0.5);
        textSize(13);
        textAlign(CENTER, CENTER);
        text(child.value,x,y);
        if(y>node.y)
        {
        console.log("in movetext");
            
        requestAnimationFrame(moveText);
        }
        else
        {
            parent.value=child.value;
           console.log(parent,child);
              for(let i=0;i<lines.length;i++)
              {
                  if(lines[i].parentNode==parent||lines[i].childNode==parent)
                  lines[i].update(parent);
              }
              parent.lc=parent.lc.deleteNode(child.value,parent);
        }

    }
}
Node.prototype.traversalAnimation = function(childNode,rev)
{
    drawAll();
   // console.log(traversalArr);
    
   // console.log("in traversal animation");
    let reverse=rev;
    let parent=this;
    let child=childNode;
    let x1,x2,y1,y2,x,y;
      //console.log(parent,child);
                
    for(let i=0;i<lines.length;i++)
    {
        if(lines[i].parentNode==parent&&lines[i].childNode==child)
        {
             x1=lines[i].x1;
             x2=lines[i].x2;
             y1=lines[i].y1;
             y2=lines[i].y2;
        }
        else if(lines[i].parentNode==child&&lines[i].childNode==parent)
        {
            x2=lines[i].x1;
            x1=lines[i].x2;
            y2=lines[i].y1;
            y1=lines[i].y2;
        }
    }
    x=x1;
    y=y1;
    let dx=1;
    if(child!=null)
    {
        //console.log("in if null");
        
    if(parent.x>child.x)
    dx=-dx;
    
   // let interval=setInterval(traversal,60);
   traversal();
    }
    else
    traverse(child);
    function traversal()
    {
       
 

          //  console.log(x1,y1,x2,y2,x,y);
            stroke(102,34,34);
            strokeWeight(5);
            m=(y2-y1)/(x2-x1);
            line(x1,y1,x,y);
            x+=dx;
            y=m*(x-x1)+y1;
            if((dx<0&&x>x2)||(dx>0&&x<x2))
            requestAnimationFrame(traversal);
            else
            if(reverse==true)
            {
                if(child!=traversalArr[traversalArr.length-1])
                {
                    console.log(traversalArr[traversalArr.length-1],child);
                    
                    child.traversalAnimation(child.parent,true);
                }
            else    
            traverse(null)
            }
            else
            traverse(child);
        
    }
   // console.log("finish");
    
}