
const speed = prompt("135");

const speedNumber = Number(speed);

if (speedNumber < 70) {
  console.log("Ok");
} else {
  
  const demeritPoints = Math.floor((speedNumber - 70) / 5);
  

  if (demeritPoints > 12) {
    console.log("License suspended");
  } else {
    console.log(`Points: ${demeritPoints}`);
  }
}
