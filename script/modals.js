let modal = document.getElementById("my-modal");
let images = document.getElementsByClassName("my-images");
let modalImg = document.getElementById("img01");
let imgCaption = document.getElementById("caption");
let imagesContainer = document.getElementsByClassName("images-container");
let bgIcon = document.getElementsByClassName("bg-icon");

for(let i = 0; i < images.length; i++){
    let imgCon = images[i]

imgCon.onclick = function(event){
    modal.style.display = "block"
    modalImg.src = this.src
    imgCaption.innerHTML = this.alt
    }
}

for(let i = 0; i < images.length; i++ ){
    let icon = images[i]

    icon.onclick = function(event){
        modal.style.display = "block"
        modalImg.src = this.src
        imgCaption.innerHTML = this.alt
    }
}

let closeX = document.getElementsByClassName("close")[0]
closeX.onclick = function(){
    modal.style.display = "none"
}