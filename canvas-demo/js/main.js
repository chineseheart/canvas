var canvas = document.getElementById('canvas');
var content = canvas.getContext('2d');
var eraserEnabled = false;

autuSetCanvasSize(canvas)

listenToUser(canvas)

eraser.onclick = function(){
    eraserEnabled = !eraserEnabled
    actions.className = 'actionsx'
}
brush.onclick = function(){
    eraserEnabled = !eraserEnabled
    actions.className = 'actions'
}

/****************/
function listenToUser(canvas){

    var using = false;

    var mouse = false;
    var lastPoint = {'x':undefined, 'y':undefined}

    canvas.onmousedown = function(aaa){
        
        var x = aaa.clientX;
        var y = aaa.clientY;
        if(eraserEnabled){
            using = true
            content.clearRect(x-5,y-5,10,10)
        }else{
            mouse = true;
            lastPoint = {'x':x, 'y':y}
        }

    }
    canvas.onmousemove = function(aaa){
        var x = aaa.clientX;
        var y = aaa.clientY;
        if(using){
            content.clearRect(x-5,y-5,10,10)
        }else if(mouse){
            var newPoint = {'x':undefined, 'y':undefined}
            newPoint = {'x':x, 'y':y}
            drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
            lastPoint = newPoint;
        }
    }
    canvas.onmouseup = function(){
        mouse = false
        using = false}
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

/*****************/
function autuSetCanvasSize(canvas){
    setCanvasSize()
    window.onresize = function(){
        setCanvasSize()
}
function setCanvasSize(){
    var pageWidth = document.documentElement.clientWidth;
    var pageHeight = document.documentElement.clientHeight;

    canvas.width = pageWidth
    canvas.height = pageHeight
}
}



