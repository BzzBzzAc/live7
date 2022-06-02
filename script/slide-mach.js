let slideIndexCont = 1;

showSlidesCon(slideIndexCont)


function plusSlides(n){
    showSlidesCon(slideIndexCont += n)
}

function currentSlide(n){
    showSlidesCon(slideIndexCont = n)
}

function showSlidesCon(n){
    let i;
    let slidesCon = document.getElementsByClassName("my-slide");
    let dotsCon = document.getElementsByClassName("dot");
    if(n > slidesCon.length){slideIndexCont = 1}
    if(n < 1){slideIndexCont = slidesCon.length}
        for(i = 0; i < slidesCon.length; i++){
            slidesCon[i].style.display = "none"
        }
        for(i = 0; i < dotsCon.length; i++){
            dotsCon[i].className = dotsCon[i].className.replace(" active", "")
        }
        slidesCon[slideIndexCont-1].style.display = "block"
        dotsCon[slideIndexCont-1].className += " active"
}