 let score = 85;
if (score>=80) {
    letter = 'A';
}
else if (score>=60){
     letter = 'B';
}
else if (score>=50){
     letter = 'C';
}
else if (score>=40){
     letter = 'D';
}
else (score<40){
     letter = 'E';
}


let speed = 80;
if (speed<=70){
     return 'ok';
}
else if (speed=75){
    return '1point';
}
else if (speed=80){
    return '2point';
}
else if (speed=85){
    return '3point';
}
else if (speed=90){
    return '4point';
}
else if (speed=95){
    return '5point';
}
else if (speed=100){
    return '6point';
}
else if (speed=105){
    return '7point';
}
else if (speed=110){
    return '8point';
}
else if (speed=115){
    return '9point';
}
else if (speed=120){
    return '10point';
}
else if (speed=125){
    return '11point';
}
else (speed>=130){
      return 'License suspended';
}


let monthlySalary = 26000
let personalRelief = 2400
let insuranceRelief = 5000
if (monthlySalary<=24000){
    return ${0.1*monthlySalary};
}
else if (monthlySalarry>24000){
    return ${0.25*monthlySalary};
}
else if (monthlySalary>32333){
    return ${0.3*monthlySalary};
} 
else (monthlySalary>0){
    return ${monthlySalary-personalRelief-insuranceRelief};
}

