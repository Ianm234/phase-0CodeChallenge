
const marks = prompt("80");


const marksNumber = Number(marks);


if (isNaN(marksNumber) || marksNumber < 0 || marksNumber > 100) {
  console.log("Invalid input. Please enter a number between 0 and 100.");
} else {
  
  let grade;
  if (marksNumber > 79) {
    grade = 'A';
  } else if (marksNumber >= 60 && marksNumber <= 79) {
    grade = 'B';
  } else if (marksNumber >= 50 && marksNumber <= 59) {
    grade = 'C';
  } else if (marksNumber >= 40 && marksNumber <= 49) {
    grade = 'D';
  } else {
    grade = 'E';
  }
  
  console.log(`The student's grade is ${grade}.`);
}


