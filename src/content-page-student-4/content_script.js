if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
let imageSrcArray = [
    "game-of-thrones.jpg",
    "game-of-thrones-season-1-episode-1-full-stitched-607175_PRO35_10-1920.jpg",
    "money2.jpg",
    "money3.jpg"
]
function ready(){
    changeBackgroundImage();
}
let sliderIndex = 0;
function changeBackgroundImage(){
    let imageContainers = document.getElementsByClassName('img-gallery')
    for (let i = 0; i < imageContainers.length; i++) {
        imageContainers[i].style.display = 'none'
    }
    imageContainers[sliderIndex].style.display = 'flex'
    sliderIndex++;
    if(sliderIndex == imageContainers.length){
        sliderIndex = 0;
    }
    setTimeout(changeBackgroundImage, 2000)
}