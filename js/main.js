let allImagesElements = document.getElementsByTagName('img');
let lightBox = document.querySelector('.light-box');
let lightBoxItem = document.querySelector('.light-box-item');
let imageOrder = document.querySelector('.image-order h5');
let closeIcon = document.querySelector('.close-icon');
let leftIcon = document.querySelector('.left-icon');
let rightIcon = document.querySelector('.right-icon');
// let regex = /^(http:\/\/127.0.0.1:5500)/; local server
let regex = /^(https:\/\/mohamed-ameer.github.io\/Lightbox-gallery)/;
let allImagesSrc = [];
let currentIndex = 0;
for(let i = 0 ; i < allImagesElements.length ; i++){
    allImagesSrc[i] = allImagesElements[i].src.replace(regex,'');
}
for(let i = 0 ; i < allImagesElements.length ; i++){
    allImagesElements[i].addEventListener('click',function(){
        lightBox.classList.remove('d-none')
        currentIndex = i;
        insertImageSrc(i);
    });
}

document.addEventListener('keydown',function(e){
    if(lightBox.classList.contains('d-none')){
        
    }else{
        if(e.code == 'ArrowRight'){
            if(currentIndex == allImagesSrc.length - 1){
                currentIndex = 0;
                insertImageSrc(currentIndex);
            }else{
                currentIndex++;
                insertImageSrc(currentIndex);
            }
        }else if(e.code == 'ArrowLeft'){
            if(currentIndex != 0){
                currentIndex--;
                insertImageSrc(currentIndex);
            }else{
                currentIndex = allImagesSrc.length - 1;
                insertImageSrc(currentIndex);
            }
        }else if(e.code == 'Escape'){
            lightBox.classList.add('d-none');
        }
    }
});

closeIcon.addEventListener('click',function(){
    lightBox.classList.add('d-none')
});
leftIcon.addEventListener('click',function(){
    if(currentIndex != 0){
        currentIndex--;
        insertImageSrc(currentIndex);
    }else{
        currentIndex = allImagesSrc.length - 1;
        insertImageSrc(currentIndex);
    }
});
rightIcon.addEventListener('click',function(){
    if(currentIndex == allImagesSrc.length - 1){
        currentIndex = 0;
        insertImageSrc(currentIndex);
    }else{
        currentIndex++;
        insertImageSrc(currentIndex);
    }
});
function insertImageSrc(index){
    lightBoxItem.style.cssText = `background-image: url(..${allImagesSrc[index]});`;
    imageOrder.innerHTML = index + 1;
}