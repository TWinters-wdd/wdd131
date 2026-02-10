const students = [
    {last: 'Andrus', first: 'Aaron', grade: 'A'},
    {last: 'Masa', first:'Manny', grade: 'B'},
    {last: 'Tanda', first: 'Tamanda', grade: 'D'}
];

let studentList = document.querySelector('.student-info');
let studentPoints = document.querySelector('body section');
let button = document.querySelector('.button');
let dictionary = document.querySelector('body p');
const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

students.forEach((student) => {
    studentList.innerText += `Name: ${student.last} ${student.first}, Grade: ${student.grade}\n`;
    console.log(`${student.last} ${student.first} ${student.grade}`)
    let points = convert(student.grade);
    studentPoints.innerText += `Name: ${student.last} ${student.first}, Points: ${points}\n`;
});

button.addEventListener('click', () => {
    if (dictionary.innerText === '') {
        words.forEach((word) => {
            dictionary.innerText += `${word}\n`
            console.log(words.length);
        });
    } else {
        dictionary.innerText = '';
    }
        
});
