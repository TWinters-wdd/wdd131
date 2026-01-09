const PI = 3.14;
let radius = 3;

const one = 1;
const two = '2';

let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course); //works because course is global
    console.log(student); //works because student is in the block
}
console.log(course); //works because course is global
console.log(student); //doesn't work because student is block variable
