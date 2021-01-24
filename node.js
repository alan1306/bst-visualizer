let traversalArr=[];
function Node(val)
{
    this.parent=null;
    this.value=val;
    this.lc=null;
    this.rc=null;
    this.x=null;
    this.y=null;
    this.radius=35;
    this.start=false;
    this.height=0;
    this.mousePressed =false;
    this.begin=false;
}
traverse=function(node)
{
 //console.log(traversalArr);
    
//     if(this.lc!=null)
//     { 
//         console.log("in lc");
        
//         // this.traversalAnimation(this.lc);       
//         this.lc.traverse();
//         this.traversalAnimation(this.lc); 
//     }
//     console.log(this.value);
    
//  if(this.rc!=null)
// {
//     console.log("in rc");
    
// // this.traversalAnimation(this.rc);    
// this.rc.traverse();
// this.traversalAnimation(this.rc);
// }
    if(node!=null||traversalArr.length>0)
    {
      console.log(traversalArr);
        
        if(node!=null)
        {
            traversalArr.push(node);
            node.traversalAnimation(node.lc);
           // traverse(node.lc);
        }
        else
        {
            let currNode=traversalArr.pop();
            //console.log(currNode.value);
            if(currNode.rc==null&&currNode.value!=maxValue(tree.root))
            {
               // console.log(maxValue(tree.root));
                
                console.log("in if rc is null");
                
            currNode.traversalAnimation(currNode.parent,true);
            }
            else
            currNode.traversalAnimation(currNode.rc);
           // traverse(currNode.rc);
            
        }
    }
}
Node.prototype.setPos = function(n)
{
    
    if(this.value<n.value)
    {
        if(n.start==true)
        {
            this.x=n.x-150;
            this.y=n.y+100;
        }
        else
        {
            this.x=n.x-(dx-this.height*18);
            this.y=n.y+(dy-this.height*10);
        }
    }
    if(this.value>n.value)
    {
        if(n.start==true)
        {
            this.x=n.x+150;
            this.y=n.y+100;
        }
        else
        {
            this.x=n.x+(dx-this.height*18);
            this.y=n.y+(dy-this.height*10);
        }
    }

}
Node.prototype.addNode = function(node)
{
    if(this.value>node.value)
    {
        if(this.lc==null)
        {
            node.parent=this;
            height++;  
            node.height=height;
            
            node.setPos(this);
            this.lc=node;
            nodes.push(node);

           // this.lc.drawCircle();
           lineObject=new Line(this,this.lc);
           lines.push(lineObject);
           lineObject.setCoordinates();
           lineObject.drawLine();
        }
        else
        {
            height++;
            this.circleAnimation(node,this.lc);
        }    
    }
    else
    {
        if(this.value<node.value)
        {
        if(this.rc==null)
        {
            node.parent=this;
            height++;
            node.height=height;
            node.setPos(this);
            this.rc=node;
            nodes.push(node);
           //this.rc.drawCircle();
           lineObject=new Line(this,this.rc);
           lines.push(lineObject);
            lineObject.setCoordinates();
          // console.log(lines);
            
            lineObject.drawLine();
        }
        else
        {
            height++;
            this.circleAnimation(node,this.rc);
        }    
    }
    }
}
Node.prototype.update = function(x,y)
{
    // nodes[index]=this;
    // console.log(nodes[index]);
    this.x=x;           
    this.y=y;
    // for(let i=0;i<nodes.length;i++)
    // {
    //     nodes[i].drawCircle();
    //     // if(i>0)
    //     // {
    //     //     lines[i-1].drawLine();
    //     // }
    // }
}
Node.prototype.maxValue = function()
{
    node=this;
    if(node==null)
			return node;
		if(node.rc==null)
			return node;
		node=node.rc.maxValue();
		return node;
}
Node.prototype.deleteNode = function(k,prevNode)
{
    
    let node=this;
    if(node.value>k)
    {
            node.lc=node.lc.deleteNode(k,this);
    }        
        else if(node.value<k)
        {
            console.log(node.rc);
            
           node.rc= node.rc.deleteNode(k,this);

        }
		else
		{
            nodeToDelete=node;
			if(this.lc==null&&this.rc==null)
			{
                deleteNode(this);
                deleteLine(this,prevNode);
                //console.log(lines,lines.length);
                console.log(this);
                
                drawAll();
                return(null);
			}
			else if(node.lc==null)
			{
                //nodeToDelete=node;
                deleteNode(this);
                deleteLine(this,prevNode);
                deleteLine(this.rc,this);
                lineObject=new Line(prevNode,node.rc);
                lines.push(lineObject);
               lineObject.setCoordinates();
              // clear();
                lineObject.drawLine();
				return node.rc;
			}
            else if(node.rc==null)
            {
                
                
                deleteLine(this,prevNode);
                deleteLine(this.lc,this);
                deleteNode(this);
                //drawAll();
                lineObject=new Line(prevNode,node.lc);
                lines.push(lineObject);
               lineObject.setCoordinates();
                lineObject.drawLine();
                return node.lc;
            }    
			else
			{
                let temp=node.lc.maxValue();
                temp.deleteAnimation(node);
            //     node.value=temp.value;
            //   //  console.log(temp,node);
            //     for(let i=0;i<lines.length;i++)
            //     {
            //         if(lines[i].parentNode==node||lines[i].childNode==node)
            //         lines[i].update(node);
            //     }
            //     node.lc=node.lc.deleteNode(temp.value,this);
            //     drawAll();
			}
        }
        //drawAll();
        return node;
}