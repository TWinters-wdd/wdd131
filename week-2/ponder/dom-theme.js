
let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');
let img = document.querySelector('#logo')

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
        img.style.opacity = "0.4";
        img.style.borderRadius = "30px";
        img.style.transition = "opacity 2s, border-radius 2s";
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
        img.style.opacity = "0.4";
        img.style.borderRadius = "30px";
        img.style.transition = "opacity 2s, border-radius 2s";
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
        img.style.opacity = "0.4";
        img.style.borderRadius = "30px";
        img.style.transition = "opacity 2s, border-radius 2s";
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
        img.style.opacity = "";
        img.style.borderRadius = "";
    }
}
