let tree;
let nodes=[];
let lines=[];
 let dx=120;
 let dy=130;
let height;
let nodeToDelete;
//let navheight=document.getElementById("navbar").clientHeight;
//let canvas=document.querySelector("canvas");
// let canvasWidth=window.innerWidth-16;
// let canvasHeight=window.innerHeight-navheight-5;
//let c=canvas.getContext('2d');
/*let y=30;
c.lineWidth=1;
for(let i=0;i<22;i++)
{
    c.beginPath();
    c.moveTo(15,y);
    c.lineTo(canvas.width-6,y);
    
    c.strokeStyle="rgb(175, 216, 248)";
    c.stroke();
    y=y+30;
}
 y=15;
for(let i=0;i<51;i++)
{
    c.beginPath();
    c.moveTo(y,30);
    c.lineTo(y,660);
    
    c.stroke();
    y=y+30;
}*/
document.getElementById("bst").onclick=()=>
{
    document.getElementById("startbutton").innerHTML="Visualize BST!";
    document.getElementById("DS_nav").innerHTML="Binary Search Tree";
}
document.querySelector("#submit").onclick = () =>
{
    //console.log(tree);
    
    let val=document.querySelector("#num").value;
    document.querySelector("#num").value='';
    val=parseInt(val);
     tree.addValue(val);
       
}
document.querySelector("#submitToDelete").onclick=() =>
{
   // console.log(tree);
    let value=document.querySelector("#numToDelete").value;
    document.querySelector("#numToDelete").value='';
    value=parseInt(value);
    
    //console.log(deleteLines);

    tree.deleteNode(value);
}
document.querySelector("#submitToRotate").onclick=() =>
{
   // console.log(tree);
    let value=document.querySelector("#rotate").value;
    document.querySelector("#numToDelete").value='';
    value=parseInt(value);
    
    //console.log(deleteLines);

    tree.rotateNode(value);
}
document.querySelector("#traverse").onclick = () =>
{
    //console.log(tree);
    //console.log(nodes);
    //console.log(lines);
   // console.log(deleteLines);
    
    
    tree.traverse();
       
}
function setup()
{
    canvasWidth=document.documentElement.clientWidth-14;
    canvasHeight=document.documentElement.clientHeight-60;
    
   // createCanvas(width,height);
    createCanvas(canvasWidth,canvasHeight);
tree=new Tree();
}
function mousePressed()
{
   // console.log("mouse pressed");
    
    for(let i=0;i<nodes.length;i++)
    {
        if(dist(nodes[i].x,nodes[i].y,mouseX,mouseY)<35)
        {
            nodes[i].mousePressed=true;
            //console.log(nodes[i]);
            
            
        }
        
    }
}
function mouseReleased()
{
    //console.log("released");
    
    for(let i=0;i<nodes.length;i++)
    {
        if(nodes[i].mousePressed==true)
        nodes[i].mousePressed=false;
        
    }
}
function mouseDragged()
{
    //console.log("dragged");
    
    for(let i=0;i<nodes.length;i++)
    {
        if(nodes[i].mousePressed==true)
        {
            clear();
            nodes[i].update(mouseX,mouseY,nodes[i].value);
            for(let j=0;j<lines.length;j++)
            {
                if(lines[j].parentNode.value==nodes[i].value)
                {
                //     console.log(lines[j].parentNode);
                    
                //     lines[j].parentNode.x=mouseX;
                //     lines[j].parentNode.y=mouseY;
                        lines[j].update(nodes[i]);
                    
                }
                if(lines[j].childNode.value==nodes[i].value)
                {
                    // lines[j].childNode.x=mouseX;
                    // lines[j].childNode.y=mouseY;
                    lines[j].update(nodes[i]);
                }
                //lines[j].update();
            }
            
            drawAll();
        }
    }
}
function drawAll()
{
    clear();
    for(let i=0;i<nodes.length;i++)
    {
        nodes[i].drawCircle();
    }
    for(let i=0;i<lines.length;i++)
    {
        lines[i].drawLine();
    }
}
function deleteArrayElement(arr,index)
{
    //let temp=arr[index];
    arr[index]=arr[arr.length-1];
    arr.pop();
}
function deleteNode(node)
{
    for(let i=0;i<nodes.length;i++)
    {
        if(nodes[i]==node)
        {
            console.log(nodes[i]);
            
            deleteArrayElement(nodes,i);
        }
    }
}
function deleteLine(child,parent)
{
    for(let i=0;i<lines.length;i++)
    {
        if(lines[i].parentNode.value==parent.value&&lines[i].childNode.value==child.value)
        {
           // console.log("in delete line");
            //console.log(lines);
            
            
            deleteArrayElement(lines,i);
            break;
        }
    }
}
