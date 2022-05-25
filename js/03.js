let picwidth = 600;

for (var i=0; i < 3; i++) {
    document.getElementById("pic" + i).style.left = (picwidth * i) + "px";
}

let moveNum = 0;
document.getElementById("prev_btn").onclick = function() {
    if(moveNum > 0){
        moveNum--;
    } else {
        moveNum = 2;
    }
    for(var i=0; i<3; i++) {
        document.getElementById("pic" + i).style.left = (1440 * (i-moveNum)) + "px";
    }
}
document.getElementById("next_btn").onclick = function(){
    if(moveNum < 2){
        moveNum++;
    } else {
        moveNum = 0;
    }
    for (var i=0; i<3; i++) {
        document.getElementById("pic" + i).style.left = (1440 * (i-moveNum)) + "px";
    }
}