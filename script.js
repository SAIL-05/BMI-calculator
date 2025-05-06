// const userNumber = parseInt(prompt("how old are you?"))
   
//  if (userNumber < 0) {
//     alert(`${userNumber} is a negative number`)
// }
//     else if(userNumber > 0) {
//     alert (`${userNumber} is a positive number`)
//     }
//     else if(userNumber === 0) {
//         alert("your input is invalid")
//     }
//     else if(isNaN(userNumber)) {
//         alert("this is not a number")
   // }
    // else if(userNumber.toString()) {
    //     alert (`this is not a number`)
    //     }
        //write a program that determines if a number is greater the other
    // a = parseInt(prompt("Enter a random Number"))
    // b = parseInt(prompt("Enter another random Number"))
  
    // if (a < b) { 
    //     alert(`${b} is greater than ${a}`)
    // }
    //  else if (a > b) { 
    //     alert(`${a} is greater than ${b}`)
    // }
    // else if (a === b) { 
    //     alert("you have entered the same numbers")
    // }
    // else alert("your input is a jargon which i won,t attempt to run again")

    // a = parseInt(prompt("Enter a random Number"));

    // if (a === 0 || a < 40) {
    //     alert("your Grade is F");
    // } else if (a >= 40 || a < 45) {
    //     alert("your Grade is E");
    // } else if (a >= 45 || a < 50) {
    //     alert("your Grade is D");
    // } else if (a >= 50 && a < 60) {
    //     alert("your Grade is C");
    // } else if (a >= 60 && a < 70) {
    //     alert("your Grade is B");
    // } else if (a >= 70 && a <= 100) {
    //     alert("your Grade is A");
    // } else {
    //     alert("your input is invalid");
    // };

    
    weight = parseFloat(prompt("enter your weight in Kg"))
    height = parseFloat(prompt("enter your height in meter"))
    bmi = (height * height / weight)

    alert(`Your body Max Index is ${bmi}`)