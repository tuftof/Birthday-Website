

function letter(){
    const box2 = document.getElementById("letterdiv");
    const box1 = document.getElementById("div1");

    box2.style.visibility = "visible";
    box2.style.animationName = "fadeIn";
    box2.style.animationDuration = "2s";
    box1.style.visibility = "hidden";
}

function readLetter(){

    const backLetter = document.getElementById("backLetter");
    
    const LetterBack = document.getElementById("LetterBack");

    LetterBack.style.visibility = "hidden";
    backLetter.style.visibility = "hidden";
    

    const gallery = document.getElementById("gallery");
    const board_content = document.getElementById("board_content");
    const scrollGallery = document.getElementById("scrollGallery");

    scrollGallery.style.width = "0px";
    scrollGallery.style.visibility = "hidden";
    board_content.style.visibility = "hidden";
    gallery.style.visibility = "hidden";


    const box2 = document.getElementById("letterdiv");
    const box3 = document.getElementById("wrapper2"); 
    const shadow = document.getElementById("shadow");
    shadow.style.visibility = "visible";




    box3.style.visibility = "visible";
    box2.style.visibility = "hidden";
    box3.style.animationName = "fadeIn";
    box3.style.animationDuration = "2s";


    
    


}



   



function openLetter() {

    
    const first = document.getElementById("firsthalf");``
    const second = document.getElementById("secondhalf");
    const foryou = document.getElementById("forYou");
    const shadow = document.getElementById("shadow");

    first.style.transform = "translate(-50%,-100%) rotateX(0deg)";
    second.style.transform = "translate(-50%,-3%) ";
    shadow.style.visibility = "hidden";
    shadow.style.height = "40rem";
    shadow.style.transform = "translate(-50%, -51%)";   


    setTimeout(() => {
        foryou.style.visibility = "hidden";
        
    }, 1000); // Adjust the delay as needed
    setTimeout(() => {
            shadow.style.visibility = "visible";

    }, 2000); // Adjust the delay as needed   
    setTimeout(() => {
        const bodyLetter = document.getElementById("bodyLetter");
        bodyLetter.style.visibility = "visible";
        bodyLetter.style.animationName = "fadeIn";
        bodyLetter.style.animationDuration = "2s";

        bodyLetter.style.transform = "translate(-50%, -50%)";

    }, 1500);
    setTimeout(() => {
        const nextDiv = document.getElementById("nextDiv");
        nextDiv.style.visibility = "visible";
        nextDiv.style.animationName = "fadeIn";
        nextDiv.style.animationDuration = "2s";

        const scroll = document.getElementById("scroll");
        scroll.style.width = "100px";
        scroll.style.visibility = "visible";
        


    }, 7000); // Adjust the delay as needed

    setTimeout(() => {
            const next = document.getElementById("Next");
            next.style.visibility = "visible";
            next.style.animationName = "fadeIn";
            next.style.animationDuration = "2s";
        }, 8000);
}

function homepage() {


    const first = document.getElementById("firsthalf");``
    const second = document.getElementById("secondhalf");
    const foryou = document.getElementById("forYou");
    const shadow = document.getElementById("shadow");
    const letterScroll = document.getElementById("scroll");
    
    letterScroll.style.width = "0px";
    letterScroll.style.visibility = "hidden";
    foryou.style.visibility = "visible";
    first.style.transform = "translate(-50%,-48%) rotateX(180deg)";
    second.style.transform = "translate(-50%, -45%)";
    shadow.style.height = "20rem";
    shadow.style.transform = "translate(-50%, -45%)"; 


    const nextDiv = document.getElementById("nextDiv");
    const wrapper2 = document.getElementById("wrapper2");

    const bodyLetter = document.getElementById("bodyLetter");
    const next = document.getElementById("Next");
    

    nextDiv.style.visibility = "hidden";
    shadow.style.transform = "translate(-50%, -45%)";
    wrapper2.style.visibility = "hidden";
    shadow.style.height = "20rem";
    shadow.style.visibility = "hidden";
    bodyLetter.style.visibility = "hidden";
    next.style.visibility = "hidden";

    
   
    const gallery = document.getElementById("gallery");
    const board_content = document.getElementById("board_content");

    gallery.style.visibility = "visible";
    gallery.style.animationName = "fadeIn";
    gallery.style.animationDuration = "1s";

 
    board_content.style.visibility = "visible";
    board_content.style.animationName = "fadeIn";
    board_content.style.animationDuration = "1s";

    setTimeout(() => {
        
        const scroll = document.getElementById("scrollGallery");

        scroll.style.width = "100px";
        scroll.style.visibility = "visible";
        
      
       
        

    }, 7000);

      setTimeout(() => {
            const LetterBack = document.getElementById("LetterBack");
            LetterBack.style.visibility = "visible";
            LetterBack.style.animationName = "fadeIn";
            LetterBack.style.animationDuration = "2s";
        }, 8000);
    
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



