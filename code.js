function letter(){
const box2 = document.getElementById("letterdiv");
const box1 = document.getElementById("div1");

box2.style.visibility = "visible";
box2.style.animationName = "fadeIn";
box2.style.animationDuration = "2s";
box1.style.visibility = "hidden";
}

function readLetter(){
const box2 = document.getElementById("letterdiv");
const box3 = document.getElementById("div2");       

box2.style.visibility = "hidden";
box3.style.animationName = "fadeIn";
box3.style.animationDuration = "2s";
box3.style.visibility = "visible";
}

document.addEventListener('mousemove',function(e){
            let body = document.querySelector('body');
            let Heart = document.createElement('span');
            let x = e.offsetX;
            let y = e.offsetY;
            Heart.style.left = x+'px';
            Heart.style.top = y+'px';

            let size = Math.random() * 10;
            Heart.style.width = 20 + size+'px';
            Heart.style.height = 20 + size+'px';

            let transformValue = Math.random() * 360;
            Heart.style.transform = 'rotate('+ transformValue +' deg)';

            body.append(Heart);

            setTimeout(function() {
                Heart.remove();
            }, 1000);
        })