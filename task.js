/* 1. Get a number input n from the user. Print the numbers 1 to n with the
following conditions */

// let input = parseInt(prompt("Enter a value : "));

// for(let i=1;i<=input;i++)
// {   
//     if(i%3==0 && i%5==0)
//     {
//         console.log("FizzBuzz");
//     }
//     else if (i%3==0)
//     {
//         console.log("Fizz");
//     }
//     else if (i%5==0)
//     {
//         console.log("Buzz");
//     }
//     else 
//     {
//         console.log(i);
//     }
// }


/* 2 . Write a function that takes 5 numbers input from user a,b,c,d,e and perform
opertion a+b-c*d/e and return the result. */

// let a = parseInt(prompt("Enter a value a : "));
// let b = parseInt(prompt("Enter a value b : "));
// let c = parseInt(prompt("Enter a value c : "));
// let d = parseInt(prompt("Enter a value d : "));
// let e = parseInt(prompt("Enter a value e : "));

// function calculate()
// {
//     return a+b-c*d/e;
// }

// let result = calculate();
// console.log(result);


/* 3. Write a function that takes hours as input and converts it into seconds.*/

// let hour = parseInt(prompt("Enter a hour : "));

// function hoursToSeconds()
// {
//     return hour*3600;
// }

// let seconds=hoursToSeconds();
// console.log(seconds + " seconds ");

/* 4. Write a function that takes years as input and converts it into days. */

// let year = parseInt(prompt("Enter a year " ));

// function yearToDays()
// {
//     return year*365;
// }

// let days=yearToDays();
// console.log(days +" Days");


/*5.  Write a program that gets a string from the user as input and the task is to
count the number of vowels in that given string. */

// let str = prompt("Enter a String : ");
// str=str.toLowerCase();
// let arr = str.split("");
// let count = 0;
// let result = "";

// for(i=0;i<arr.length;i++)
// {
//     if("a"== arr[i] || "e"==arr[i] || "i"==arr[i] || "o"==arr[i] || "u"==arr[i])
//     {
//         count = ++count;
//         result = count + " vowels found" ;
//     }
// }
// console.log(result);


// let string = prompt("Enter a string : ");
// let result = countVowel();
// console.log(result);

/* 6. Write a program that gets a number n from the user. The task is to print the
number from 1 to n by mentioning it as odd or even number. */

// let input = parseInt(prompt("Enter a number : "));

// for(let i=1;i<=input;i++)
// {
//     if(i%2==0)
//     {
//         console.log(i+ "- even");
//     }
//     else if(i%2!=0)
//     {
//         console.log(i+ "- odd");
//     }
//     else
//      {
// }
// }

/* 7. Get an array as input. The task is to reverse the array and store it in another
array without using reverse() method. */

// let array = prompt("Enter a array");
// array=array.split(" ");
// let reversed = "";
// for (let i = array.length - 1; i >= 0; i--) {
//      reversed+=array[i]+" ";
// }
// console.log("the given array " +array)
// console.log("the reversed array " +reversed);

/* 8. Get 2 input from users and store it in two variables. Check whether the strict
values are equal, values are equal and values are not equal.*/

// let input1="10";
// let input2=10;

// function equalityCheck(){
//     if(input1===input2)
//     {
//         input1=document.getElementById("input1");
//         console.log("Both the value and datatypes are equal");
//     }
//     else if(input1==input2)
//     {
//         console.log("Values are equal but different datatypes");
//     }
//     else
//     {
//         console.log("both are not equal");
//     }
// }

// equalityCheck()

// let result=equalityCheck();
// console.log(result);


/* 9. Get a number input from the user and return true whether the given number
greater than zero, if the number is less than or equal to zero then return false.
If the given input is not a number return invalid input */

// let input = parseInt(prompt("Enter a number : "));

// function positiveChecker(){
//     if(input>0)
//     {
//         return true;
//     }
//     else if(input<=0)
//     {
//         return false;
//     }
//     else
//     {
//         console.log("invalid input");
//     }
// }
// let result=positiveChecker();
// console.log(result);

/* 10. Get 2 inputs from the user. It can be numbers, strings, boolean, null,
undefined, etc. If the given two numbers are truthy values then return true or
else return false.*/

// let input1=0;
// let input2=-20;

// let input1 = true;
// let input2 = "false";

// function conditionChecker()
// {
//     if(input1 && input2)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }

// let output=conditionChecker();
// console.log(output);