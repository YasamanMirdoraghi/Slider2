let $ = document
let sliderImgElem = $.querySelector('img')
let prevBtn = $.querySelector('.prev')
let nextBtn = $.querySelector('.next')

let imgSrcArray = ['image/two.jpg','image/one.jpg','image/tree.jpg']

let imgIndex = 0


function prevImage() {
  imgIndex--
  if (imgIndex < 0) {
    imgIndex = imgSrcArray.length - 1
  }
  sliderImgElem.setAttribute('src', imgSrcArray[imgIndex])
  console.log(imgIndex, imgSrcArray[imgIndex]);

}



function nextImage() {
  imgIndex++
  if (imgIndex > imgSrcArray.length - 1) {
    imgIndex = 0
  }
  sliderImgElem.setAttribute('src', imgSrcArray[imgIndex])
  console.log(imgIndex, imgSrcArray[imgIndex]);
}

setInterval(nextImage, 5000);

prevBtn.addEventListener('click', prevImage)
nextBtn.addEventListener('click', nextImage)