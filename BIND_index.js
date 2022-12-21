let multiply = function(x){
    return function(y) {
        console.log(x*y) 
    }
}

let multipleByTwo = multiply(2);
multipleByTwo(3);

let multipleByThree = multiply(3);
multipleByThree(10);