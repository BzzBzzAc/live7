let moreBtn = document.getElementById("btn-show");
let imgBlock = document.getElementById("more-img-cont")

moreBtn.onclick = function(ev){
    if(imgBlock.style.display === "none"){
        imgBlock.style.display = "flex"
    }else{
        imgBlock.style.display = "none"
    }
}