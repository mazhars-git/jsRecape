/* 
var mobilePrice = 2550;
console.log(mobilePrice);

var amountOfPen = 200;
console.log(typeof amountOfPen);

var friendName = "Ahmad Abdullah";
console.log(typeof friendName);

var isGood = true;
var isBad = false;

console.log(typeof isGood)
console.log(isBad)


var myName = "azad khan";

myName = "Azad Vhi";

console.log(myname)



var myAuth = "I take shelter of Allah from the rejected Shaitan";

var lower = myAuth.toLowerCase();
var Upper = myAuth.toUpperCase();
var Split = myAuth.split(" ");

var position = myAuth.indexOf("The");

console.log(lower, Upper, position, Split);


var number1 = 0.1;
var number2 = 0.2;

// number1 = '' + number1;

// number2 = parseFloat(number2);
// number2 = parseInt(number2);
// number2 = +number2;

// console.log(number1 + number2)

total = (number1 + number2);
total = total.toFixed(3);

console.log(total)



var num1 = 60;
var num2 = 7;

var addition = num1 + num2;
var subtraction = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;

console.log(addition, subtraction, multiplication, modulus)



var name1 = "Farid";
var name2 = "Khan";

var result = name1 + " " + name2;

console.log(result);



var num = 8.41132132;

var result = Math.round(num);
var result1 = Math.floor(num);
var result2 = Math.ceil(num);

var result3 = Math.random(num);

console.log(result, result1, result2, result3)



var bananaPrice = 10;

if(bananaPrice < 12){
    console.log("Give me a banana.");
}
else{
    console.log("Give me khali Chaa.");
}

if (bananaPrice == 10) {
    console.log("Give me this item")
} else {
    console.log("No thanks.")
}
if (bananaPrice != 10) {
    console.log("Give me this item")
} else {
    console.log("No thanks.")
}



var savings = 5000;
var jobHolder = true;

if (jobHolder == true && savings > 20000) {
    console.log("You can get married.")
}
else if(jobHolder == true){
 console.log("Koi din wait koro.")
}
else {
    console.log("No you have not.")
}

var date = new Date();

console.log(date);

//Module 12 done*************************

*/

//Module 13 ***********************************

//Array

// var stNumber = [50, 60, 80, 90];

// studentNumber[0] = 70;

// var position = studentNumber.indexOf(90);

// console.log(position)

// stNumber.push(15);
// stNumber.push(88);
// var moreNum = [33, 34, 55]
// stNumber.push(...moreNum)

// console.log(stNumber)
// stNumber.pop()

// stNumber.shift();
// stNumber.unshift(66);

// console.log(stNumber)

// var frNames = ['Azad', 'Akash', 'Jaber', 'Kalin', 'Kadij'];

// console.log(frNames);
// frNames.shift()
// frNames.unshift('Hamid')
// frNames.push('Nayeem')
// console.log(frNames);

// var slice= frNames.slice(3, 5);
// console.log(slice)

// const person = {age: 42}
// person.age= 41;

// let arr = [1, 2, 3]

// arr.push(0)
// console.log(arr);



//weDevs interview: ......................................

//Q: 1 is: var, let and const ??? 70% ans;

//Q: 2 is it correct? wrong ans:
// const person = {age: 42}
// person.age= 41;

//Q: 3 is: how to find the "age" property? not ans:
// const person = {age: 42}
// person.age= 41;

//Q: 4 is: how to add another number? not ans:
// let sum = [1, 2, 3].reduce((a, b) => a + b)
// console.log(sum)

// //Q: 5 is: different between normal fun? 20% ans:
// const fun = () =>{

// }

//Q: 6 is: react hook. useEffect hook? 30% ans:


//loop............

// var num = 1;

// while(num <=20){
//     console.log(num);
//     num++;
// }

// for(var i = 0; i < 10; i++){
//     console.log(i)
// }

// var friends = ['Akas', 'Azad', 'Jalal', 'Jashim', 'Loli', 'Latif', 'Kajol'];

// for (let i = 0; i < friends.length; i++) {
//     const element = friends[i];

//     console.log(element);
// }


/*var foodName = ['Apple', 'Orange', 'Banana', 'Malta', 'Green Apple'];

for (var i = 0; i < foodName.length; i++){
    var element = foodName[i];
    console.log(element);

}


var num = 850;

switch (num) {
    case 1000:
        console.log('I am the number 1 Thousand.')
        break;
    case 900:
        console.log('I am the number nine hundred.')
        break;
    case 800:
        console.log('I am the write number..........')
        break;
    default:
        console.log('Something is wrong.')
        break;
}



//function:

function myFunc(){
    console.log("Hello my function.")
};

// myFunc();

function double(num) {
    var result = num * 5;
    return result;
}

var output = double(10);
console.log(output);


function addNum(num1, num2){
    var result = num1 + num2;
    return result;
}

var add = addNum(5, 10);
console.log(add);



var stData = {
    name: 'Abid',
    phone: 01754,
    id: 555,
    group: "D"
}

var stPhoneNo = "phone";

var stPhone = stData.phone;
var stPhone2 = stData["phone"];
var stPhone3 = stData[stPhoneNo];

//update data;

stData.phone = 3358555;
console.log(stData)

console.log(stPhone, stPhone2, stPhone3);

*/

/*function largeNum(number){
    var larger = number[0];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];

        if (element > larger) {
            larger = element;
        }
    }
    return larger;
}

var result = largeNum([50, 80, 99]);
console.log(result)

*/

//inch to feet

// var inch = 150;
// var feet = inch / 12;

// console.log(feet);


// function inchToFeet(inch){
//     var feet = inch / 12;
//     return feet;
// }

// var myFeet = inchToFeet(256);
// console.log(myFeet);


// leapYear

// function leap_year(year){
//     const remainder = year % 4;
//     if (remainder == 0) {
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const result = leap_year(2024);
// console.log(result);


// var factoNum = 1;
// for (let i = 1; i < 5; i++) {

//     factoNum = factoNum * i;
//     console.log(factoNum);
    
// }


//factorial ...........

/*/function factorial(n) {
    if (n == 0) {
        return 1;
    }
    else{
        return n * factorial(n-1); 
    }
    
}

const add = factorial(12);
console.log(factorial, add)*/

// fibonacci

var fibo = [0, 1];

for (let i = 2; i <=10; i++) {
   fibo[i] = fibo[i - 1]+ fibo[i - 2];
//    console.log(fibo[i], fibo[i-1], fibo[i-2])
    
}
// console.log(fibo)

/*
function fibonacci(n) {
    var fibo = [0, 1];
   for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
        }
        return fibo;
}

var result = fibonacci(5);
console.log(result); */

// function fibonacci(n) {
//     if (n == 0) {
//         return 0;
//     }
//     if (n == 1) {
//         return 1;  
//     }
//     else{
//         return fibonacci(n-1) + fibonacci(n-2);
//     }
    
// }

// var result = fibonacci(15);
// console.log(result);


//prime number: 

/*
function primeNumber(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return 'is not a prime number'
        }
        
    }
    return 'your number is a prime'
}
var result = primeNumber(179);
console.log(result);



//swap variable....................

var a = 9;
var b = 10;

console.log('Before Swap: a=', a,',', 'b=', b);

var temp = a;
a = b;
b = temp;

console.log('After Swap: a=', a,',', 'b=', b);

var x = 6;
var y = 3;

x = x + y;
y = x - y;
x = x - y;

console.log('after Swap: x=', x,',', 'y=', y);


var m = 8;
var n = 9;
[m, n] = [n, m]

console.log(m, n);

*/

//Random Number

/* var num = 10.5164;

var result = Math.round(num);
var result2 = Math.floor(num);

var result4 = Math.ceil(num);

// console.log(result, result2, result3, result4)

for(var i = 0; i <= 10; i++){
    var randomNum = Math.random() * 6;
    var output = Math.round(randomNum);
    console.log(output)
}
*/

//Max value: -----------------

// var bcsCader = 1160;
// var doctor = 6650;
// var salesMan = 950;

// var max = Math.max(bcsCader, doctor, salesMan);

// console.log(max);


/*
if (bcsCader > doctor) {
    if (bcsCader > salesMan) {
        console.log("Bcs Cader is Bigger.");
    }
    else{
        console.log("salesMan is Bigger.");
    }
}
else{
    if (doctor > salesMan) {
        console.log("doctor is Bigger.");
    }
    else{
        console.log("sales man is Bigger.")
    }
    
}
*/

/*
var marks = [78, 77, 55, 98, 95, 50, 60, 66];

var max = marks[0];

for (let i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max = element;
    }
    
}

console.log('The max number is', max);

*/

//array sum/total: ---------------------

// function totalArray(numbers){
//     var sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         var element = numbers[i];
//         sum = sum + element;
//     }
//     return sum;
// }

// var numbers = [70, 55, 77, 88, 12, 30];
// var output = totalArray(numbers);
// var output2 = totalArray([50, 60, 10]);
// console.log(output, output2);

/*
var numbers = [7, 9, 10, 13, 15];
var sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
}

console.log(sum);

*/

// var items = [1, 4, 5, 1, 6, 7, 8, 6, 9, 4, 5, 10];

// var uniqueItems = [];
// for (let i = 0; i < items.length; i++) {
//     const element = items[i];
//     var index = uniqueItems.indexOf(element);
//     if (index == -1) {
//         uniqueItems.push(element)
//     }
    
// }
// console.log(uniqueItems);


// var sentence = 'I am a good   student';

// var count = 0;
// for (let i = 0; i < sentence.length; i++) {
//     const char = sentence[i];
//     if (char == ' ' && sentence[i-1]!== ' ') {
//         count++;
//     }
// }
// count++;

// console.log(count);

// var gotJob = true;

// if (gotJob == true) {

//     console.log('Biye kore fel')
    
// }else{
//     console.log("Biye korar boyos hoini")
// }

// var webCamPrice = 1700;
// var myBudget = 1000;

// if (webCamPrice < myBudget) {
//     console.log("I will buy it")
// }else{
//     console.log("I can't buy it")
// }


//while loop

var givenRice = 0;

while (givenRice < 10) {
    
    // console.log('give him more')
    givenRice++;
}

var num = 1;

while (num <= 15) {
    // console.log(num);
    num = num + 2;
}

//Odd number 

for (var i = 1; i < 15; i+= 2) {
    console.log(i);
}