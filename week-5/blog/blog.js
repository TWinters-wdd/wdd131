const rating = document.querySelector('.rating');
let length = rating.innerText.length;

rating.setAttribute('aria-label', `${length} out of 5 stars`)