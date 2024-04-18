// 1. Define 10 if statements and 5 conditional expressions

let number = prompt("Whats Your Grade")

if (number >= 70 && number <= 100)
    {
        console.log("the grade is A");
    }

else if (number >= 60 && number <= 69)
    {
        console.log("The grade is B");
    }
else if (number >= 50 && number <= 59)
    {
        console.log("The grade is C");
    
    }

else if (number <= 49 && number >= 40)
    {
        console.log("The grade is D");
    }
else {
    console.log("The grade is F");
}
