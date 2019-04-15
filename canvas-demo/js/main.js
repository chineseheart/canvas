var div = document.getElementById('canvas');
div.onmousedown = function(down){
    var x = down.clientX;
    var y = down.clientY;
    var divA = document.createElement('div');
    divA.style = 'width=6px;height=6px;background:red;border-radius:3px;position:absolute;left:'+(x-3) +'px;right:'+(y-3) +'px;';
    
    div.appendChild(divA)
}