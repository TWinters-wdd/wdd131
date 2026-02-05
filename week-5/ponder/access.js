const ratings = document.querySelectorAll('.stars');

ratings.forEach(span => {
    const stars = span.textContent;
    const length = stars.length;

    span.setAttribute('aria-label', `${length} out of 5 stars`);
});