let images = document.querySelectorAll('.banner img');
let index = 0;

setInterval(function() {
  images[index].classList.remove('active');
  index = (index + 1) % images.length;
  images[index].classList.add('active');
}, 5500);
