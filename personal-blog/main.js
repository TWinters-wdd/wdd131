// variables for the posts page
let addPostContainer = document.getElementById('add-post');
let modalContainer = document.getElementById('addModal');
let closeBtn = document.getElementById('addPostCloseBtn');
let modalContent = document.querySelector('.addContent');
let postsContainer = document.getElementById('postsContainer');
let blogForm = document.querySelector('#blogForm');
let contactForm = document.getElementById('contact-form');
let contactSubmitBtn = document.getElementById('submitButton');

// variables for the modal
let newImage = document.getElementById('newImage');
let newHeader = document.getElementById('newHeader');
let newContent = document.getElementById('newContent');
let addPostBtn = document.getElementById('addPostBtn');

// Get localStorage information
const posts = JSON.parse(localStorage.getItem("posts")) || [];

// Event Listener that adds the modal
addPostContainer.addEventListener('click', () => {
    modalContainer.style.display = 'flex';
    modalContent.style.display = 'flex';
    closeBtn.style.display = 'flex';
});

// Event Listener that closes the modal
closeBtn.addEventListener('click', () => {
    let userChoice = confirm("Cancel new post?")
    if (userChoice === true) {
        modalContainer.style.display = 'none';
        modalContent.style.display = 'none';
        closeBtn.style.display = 'none';
    } else {
        modalContainer.style.display = 'flex';
        modalContent.style.display = 'flex';
        closeBtn.style.display = 'flex';
    }
});

function postTemplate(post) {
    return `
    <article class="posts">
        <img class="articleImg" src="${post.image}" alt="User Uploaded Image">
        <h1 class="articleHeader">${post.title}</h1>
        <p class="articleParagraph">${post.content}</p>
    </article>
    `
}


// Code I worked out with the tutor in the Walk-in Lab
// blogForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const data = new FormData(blogForm);
//     const newPost = {
//         image: data.get("newImage"),
//         title: data.get("newHeader"),
//         content: data.get("newContent")
//     }

// Code from WDD 131 GPT Tutor Lines 65 to 98
blogForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const file = newImage.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = () => {
            savePost(reader.result);
        };

        reader.readAsDataURL(file);
    } else {
        savePost("");
    }
});

// Code from WDD 131 GPT Tutor (cont.)
const savePost = (imageData) => {
    const newPost = {
        image: imageData,
        title: newHeader.value,
        content: newContent.value
    };

    posts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));
    initPosts();

    modalContainer.style.display = 'none';
    modalContent.style.display = 'none';
    closeBtn.style.display = 'none';
};

//     posts.push(newPost);
//     localStorage.setItem("posts", JSON.stringify(posts));
    
//     initPosts();
//     modalContainer.style.display = 'none';
//     modalContent.style.display = 'none';
//     closeBtn.style.display = 'none';
// });

function initPosts() {
    postsContainer.innerHTML = "";
    // for (const post of posts) {
    //     const postHTML = postTemplate(post);
    //     postsContainer.innerHTML += postHTML;
    // }
    postsContainer.innerHTML = posts.map((post) => postTemplate(post)).join('');
}

clearPostsBtn.addEventListener('click', clearAllPosts);

function clearAllPosts() {
    posts.length = 0;
    initPosts();
    localStorage.removeItem("posts");
}

initPosts();

