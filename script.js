const fills = document.querySelectorAll('.fill');

function animateOnScroll() {
  fills.forEach(fill => {
    const rect = fill.getBoundingClientRect();
    const targetWidth = fill.dataset.width;

    if(rect.top < window.innerHeight && rect.bottom > 0) {
      // Element is visible -> animate to target width
      fill.style.width = targetWidth;
    } else {
      // Element is not visible -> reset width
      fill.style.width = '0%';
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);
