const btn = document.querySelector('.menu-btn');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = document.querySelector('.close-viewer');
const nav = document.querySelector('nav');
const gallery = document.querySelector('.gallery')

btn.addEventListener('click', openMenu);

function openMenu() {
    nav.classList.toggle('active');
}

gallery.addEventListener('click', openModal);

function openModal(e) {
    if (e.target.tagName != 'IMG') {
        return;
    }
    modal.showModal();
    modalImage.src = e.target.src.replace('-sm', '-full');
}

// Code to close the modal
closeButton.addEventListener('click', () => {
    modal.close();
})

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

// Close modal if pressing the esc key
// modal.addEventListener('')