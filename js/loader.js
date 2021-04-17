function preloadePage(){
    
    let preload = document.getElementById("preload");
    let loading = 0;
    let id = setInterval(frame, 20);

    function frame(){
        if(loading == 100){
                clearInterval(id);
                window.location.href = "home.html";
        }else{
                loading = loading + 1;
                console.log(loading);
                if(loading == 90){
                    preload.style.animation = "fadeout 1s ease";
                }
            }
    }

};
preloadePage();