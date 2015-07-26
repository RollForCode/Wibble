

var imageCount = document.getElementById("list").childElementCount;


var mouseAlignEl = 0;

// Set-up to use getMouseXY function onMouseMove
document.onmousemove = getMouseXY;

// Temporary variables to hold mouse x-y pos.s
var mouseX = 0
var mouseY = 0

// Main function to retrieve mouse x-y pos.s

function getMouseXY(e) {
   // grab the x-y pos
    mouseX = e.pageX
    mouseY = e.pageY
  
    //set target image to move in relation to the mouse
    document.getElementById("list").children[15].style.marginLeft = String(mouseX) + "px";
    
    //simulates target child
    mouseAlignEl = 15;
    var jConst = mouseAlignEl;
    var jUp = mouseAlignEl + 10;

    //adjust alignment of images below the Target image
    for (var i = 1; i < 9; i++) {
      document.getElementById("list").children[mouseAlignEl + i].style.marginLeft = String(mouseX - i) + "px";
    }
    //adjust alignment of images above the Target image
    for (var i = 8; i > 0; i--) {
      document.getElementById("list").children[mouseAlignEl - i].style.marginLeft = String(mouseX - i) + "px";
    }

    var lastMargin = document.getElementById("list").children[mouseAlignEl+10].style.marginLeft;

    for (jUp; jUp < imageCount; jUp++){
      document.getElementById("list").children[jUp].style.marginLeft = "100px"; 
    }

  if (mouseY < 0){mouseY = 0}  

 
  return true


}

