function preloadePage (){
    

    let preload = document.getElementById("preload");
    let loading = 0;
    let id = setInterval(frame, 20);

    function frame(){
        if(loading == 100){
            clearInterval(id);
            window.location.href = "home.html";
        }else{
            loading = loading + 1;
            if(loading == 90){
                preload.style.animation = "fadeout 1s ease";
            }
        }
    }

    
function captureF5(e){
    let code = (e.keyCode ? e.keyCode : e.wich);

    if(code == 116){    
    window.location.href = "index.html";

    }
}
document.onkeydown = captureF5;

}
preloadePage();

