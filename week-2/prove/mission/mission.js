let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let content = document.querySelector('body');
let border = document.querySelector('#content');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        content.style.backgroundColor = "#333333";
        content.style.color = "#FFFFFF";
        border.style.border = "3px solid #FFFFFF";
        logo.setAttribute("src", "byui-logo-white.png");
    } else {
        content.style.backgroundColor = "initial";
        content.style.color = "initial";
        border.style.border = "3px solid #000000";
        logo.setAttribute("src", "byui-logo-blue.png");
    }
}
