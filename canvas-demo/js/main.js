var canvas = document.getElementById('canvas');
var content = canvas.getContext('2d');
var eraserEnabled = true;

autuSetCanvasSize(canvas)



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

red.onclick = function(){
    content.fillStyle = '#ffb3a7'
    content.strokeStyle = '#ffb3a7'
    red.classList.add('active')
    green.classList.remove('active')
    yellow.classList.remove('active')
    purple.classList.remove('active')
    blue.classList.remove('active')
    black.classList.move('active')

}
green.onclick = function(){
    content.fillStyle = '#40de5a'
    content.strokeStyle = '#40de5a'
    green.classList.add('active')
    red.classList.remove('active')
    yellow.classList.remove('active')
    purple.classList.remove('active')
    blue.classList.remove('active')
    black.classList.move('active')

}
yellow.onclick = function(){
    content.fillStyle = '#faff72'
    content.strokeStyle = '#faff72'
    yellow.classList.add('active')
    green.classList.remove('active')
    red.classList.remove('active')
    purple.classList.remove('active')
    blue.classList.remove('active')
    black.classList.move('active')

}
purple.onclick = function(){
    content.fillStyle = '#cca4e3'
    content.strokeStyle = '#cca4e3'
    purple.classList.add('active')
    green.classList.remove('active')
    yellow.classList.remove('active')
    red.classList.remove('active')
    blue.classList.remove('active')
    black.classList.move('active')

}
blue.onclick = function(){
    content.fillStyle = '#3eede7'
    content.strokeStyle = '#3eede7'
    blue.classList.add('active')
    green.classList.remove('active')
    yellow.classList.remove('active')
    purple.classList.remove('active')
    red.classList.remove('active')
    black.classList.move('active')

}
black.onclick = function(){
    content.fillStyle = '#161823'
    content.strokeStyle = '#161823'
    black.classList.add('active')
    green.classList.remove('active')
    yellow.classList.remove('active')
    purple.classList.remove('active')
    red.classList.remove('active')
    blue.classList.remove('active')
}
listenToUser(canvas)
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
                    content.clearRect(x-8,y-8,16,16)
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
                content.clearRect(x-8,y-8,16,16)
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
    content.moveTo(x1,y1)
    content.lineWidth = '6'
    content.lineTo(x2,y2)
    content.stroke()
    content.closePath()
}
function drawCircle(x,y,radius){
    content.beginPath();
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



