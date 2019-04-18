var canvas = document.getElementById('canvas');
var content = canvas.getContext('2d');


resize()
window.onresize = function(){
    resize()
}

var using = false;

var mouse = false;
var lastPoint = {'x':undefined, 'y':undefined}

canvas.onmousedown = function(aaa){
    
    var x = aaa.clientX;
    var y = aaa.clientY;
    if(eraserEnabled){
        using = true
        content.clearRect(x-5,x-5,10,10)
    }else{
        mouse = true;
        lastPoint = {'x':x, 'y':y}
    }

}
canvas.onmousemove = function(aaa){
    var x = aaa.clientX;
    var y = aaa.clientY;
    if(eraserEnabled){
        content.clearRect(x-5,x-5,10,10)
    }else if(mouse){
        drawCircle(x,y,0.2);
        var newPoint = {'x':undefined, 'y':undefined}
        newPoint = {'x':x, 'y':y}
        drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
        lastPoint = newPoint;
    }
}
canvas.onmouseup = function(aaa){
    mouse = false
}
function drawLine(x1,y1,x2,y2){
    content.beginPath();
    content.strokeStyle = 'black'
    content.moveTo(x1,y1)
    content.lineWidth = '5'
    content.lineTo(x2,y2)
    content.stroke()
    content.closePath()
}
function drawCircle(x,y,radius){
    content.beginPath();
    content.fillStyle = 'black'
    content.arc(x,y,radius,0,Math.PI*2);
    //content.stroke();
    content.fill()
}
function resize(){
    var pageWidth = document.documentElement.clientWidth;
    var pageHeight = document.documentElement.clientHeight;

    canvas.width = pageWidth
    canvas.height = pageHeight
}

var eraserEnabled = false;

eraserEnabled.onclick = function(){
    eraserEnabled = !eraserEnabled
    console.log(eraserEnabled)

}
console.log(eraserEnabled)
