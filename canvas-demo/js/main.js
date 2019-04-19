var canvas = document.getElementById('canvas');
var content = canvas.getContext('2d');
var eraserEnabled = true;

autuSetCanvasSize(canvas)

listenToUser(canvas)

eraser.onclick = function(){
    eraserEnabled = true
    eraser.classList.add('active')
    pen.classList.remove('active')
}
pen.onclick = function(){
    eraserEnabled = false
    pen.classList.add('active')
    eraser.classList.remove('active')
}

/****************/
function listenToUser(canvas){

    var using = false;

    var mouse = false;
    var lastPoint = {'x':undefined, 'y':undefined}

    if(document.body.ontouchstart === null){
        canvas.ontouchstart = function(aaa){  
            var x = aaa.touches[0].clientX;
            var y = aaa.touches[0].clientY;
            if(eraserEnabled){
                using = true
                content.clearRect(x-7,y-7,14,14)
            }else{
                mouse = true;
                lastPoint = {'x':x, 'y':y}
            }
            canvas.ontouchmove = function(aaa){
                var x = aaa.touches[0].clientX;
                var y = aaa.touches[0].clientY;
                if(using){
                    content.clearRect(x-7,y-7,14,14)
                }else if(mouse){
                    var newPoint = {'x':undefined, 'y':undefined}
                    newPoint = {'x':x, 'y':y}
                    drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
                    lastPoint = newPoint;
                }
            }
            canvas.ontouchend = function(){
                mouse = false
                using = false
                }
    }
    }else{
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
            using = false
            }
    }
}

function drawLine(x1,y1,x2,y2){
    content.beginPath();
    content.strokeStyle = 'black'
    content.moveTo(x1,y1)
    content.lineWidth = '6'
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



