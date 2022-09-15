var i = 0; 

while(i < 10){
    console.log(i)
    if(i == 5){
        break;
    }
    i++;
}

var numbers = [10, 12, 15, 25, 55, 120, 56, 111, 33, 44];

for(var i = 0; i < numbers.length; i++){

    var number = numbers[i];
    // if(number == 55){
    //     break;
    // }
    if(number > 120){
        continue;
    }
    console.log(number);
}