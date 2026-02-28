const enemy = {
    enemyName: "Job Application",
    enemyClass: "Unemployed Boss",
    enemyLevel: 8,
    enemyHealth: 200,
    enemyImage: "images/job-application.jpg",
    attacked: function() {
        if (this.enemyHealth > 0) {
            this.enemyHealth -= 20;
        } else {
            alert("This enemy has died.");
        }
    },
    levelUp: function() {
        this.enemyLevel++;
    }
};

function enemyTemplate(enemy) {
    return `<img class="image" src="${enemy.enemyImage}" alt="Picture of a job application">
    <h3 class="name">${enemy.enemyName}</h3>
    <div class="stats">
        <p><b>Class: </b>${enemy.enemyClass}</p>
        <p><b>Level: </b><span id="enemyLevel">${enemy.enemyLevel}</span></p>
        <p><b>Health: </b><span id="enemyHealth">${enemy.enemyHealth}</span></p>
    </div>
    <button id="attackedBtn" class="buttons">Attacked</button>
    <button id="levelUpBtn" class="buttons">Level Up</button>`
}
let characterContainer = document.querySelector(".card");

characterContainer.innerHTML = enemyTemplate(enemy);

const attackedBtn = document.querySelector("#attackedBtn");
const levelUpBtn = document.querySelector("#levelUpBtn");

attackedBtn.addEventListener("click", () => {
    enemy.attacked();
    document.querySelector("#enemyHealth").textContent = enemy.enemyHealth;
});

levelUpBtn.addEventListener("click", () => {
    enemy.levelUp();
    document.querySelector("#enemyLevel").textContent = enemy.enemyLevel;
});