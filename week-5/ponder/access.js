const ratings = document.querySelectorAll('.stars');

ratings.forEach(element => {
    const stars = element.textContent;
    const length = stars.length;

    element.setAttribute('aria-label', `${length} out of 5 stars`);
});