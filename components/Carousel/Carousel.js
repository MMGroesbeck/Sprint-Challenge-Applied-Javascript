/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const images = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
]

const imageCount = images.length;

let activeImage = 0;

// Set display: flex for active image, display: none for others.
function showImg(){
  let carImgs = document.querySelector('.carousel').getElementsByTagName('img');
  console.log(carImgs);
  console.log('imgCount: ' + imageCount);
  for (let i = 0; i < imageCount; i++) {
    console.log('i: ' + i);
    if (i === activeImage){
      carImgs[i].style.display = 'flex';
    } else {
      carImgs[i].style.display = 'none';
    }
  };
}

// Change active image by -1, update display:
function rotateLeft(){
  activeImage--;
  while (activeImage < 0) {
    activeImage += imageCount;
  }
  showImg();
}

// Change active image by +1, update display:
function rotateRight(){
  activeImage++;
  while (activeImage >= imageCount) {
    activeImage -= imageCount;
  }
  showImg();
}

function buildCarousel(imgs){
  console.log('buildCarousel called');
  console.log('Images: ' + imgs);
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  const leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  carousel.append(leftButton);
  leftButton.addEventListener('click', () => {
    rotateLeft();
  })

  imgs.forEach(thisImg => {
    const newImg = document.createElement('img');
    newImg.src = thisImg;
    carousel.append(newImg);
  });

  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  carousel.append(rightButton);
  rightButton.addEventListener('click', () => {
    rotateRight();
  })

  return carousel;
}

const carouselContainer = document.querySelector('.carousel-container');
console.log(carouselContainer);
carouselContainer.append(buildCarousel(images));
showImg();