Tree.prototype.addValue = function(val)
{
    node = new Node(val)
    if(this.root==null)
    {
    node.x=canvasWidth/2;
    node.y=30; 
    node.start=true;  
    this.root=node;
    nodes.push(node); 
    this.root.drawCircle();
   // console.log("finish");
    
    }
    else
    {
        height=0;
       this.root.addNode(node);
    }
}
Tree.prototype.traverse=function()
{
traverse(this.root);   
}
Tree.prototype.deleteNode=function(value)
{
    //addDelete(value);
    this.root.deleteNode(value,this.root);
}
function Tree()
{
    root=null;
}
function maxValue(node)
{
    while(node.rc!=null)
    node=node.rc;
    return(node.value);
}

