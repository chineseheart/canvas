var canvas = document.getElementById('canvas');
var content = canvas.getContext('2d');

function drawCircle(x,y,radius){
    content.beginPath();
    content.arc(x,y,radius,0,Math.PI*2);
    content.stroke();
}

function drawLine(x1,x2,y1,y2){
    content.beginPath();
    content.strokeStyle = 'bule'
    content.moveTo(x1,x2)
    content.lineTo(y1,y2)
    content.stroke()
    content.closePath()
}
var mouse = false;
var lastPoint = {'x':undefined, 'y':undefined}

canvas.onmousedown = function(aaa){
    mouse = true;
    var x = aaa.clientX;
    var y = aaa.clientY;
    drawCircle(x,y,5);
    lastPoint = {'x':x, 'y':y}

}
canvas.onmousemove = function(aaa){
    if (mouse){
        var x = aaa.clientX;
        var y = aaa.clientY;
        drawCircle(x,y,5);
        var lastPoint = {'x':undefined, 'y':undefined}
        newPoint = {'x':x, 'y':y}
        lastPoint = newPoint;
        drawLine(lastPoint.x,lastPoint.y,lastPoint.x,lastPoint.y)


    }

}
canvas.onmouseup = function(aaa){
    mouse = false
}