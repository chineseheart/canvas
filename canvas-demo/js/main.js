var canvas = document.getElementById('canvas');
var content = canvas.getContext('2d');

function drawCircle(x,y,radius){
    content.beginPath();
    content.fillStyle = 'black'
    content.arc(x,y,radius,0,Math.PI*2);
    content.stroke();
    content.fill()
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
var mouse = false;
var lastPoint = {'x':undefined, 'y':undefined}

canvas.onmousedown = function(aaa){
    mouse = true;
    var x = aaa.clientX;
    var y = aaa.clientY;
    drawCircle(x,y,0.2);
    lastPoint = {'x':x, 'y':y}

}
canvas.onmousemove = function(aaa){
    if (mouse){
        var x = aaa.clientX;
        var y = aaa.clientY;
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