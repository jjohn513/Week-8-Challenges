function min (num1, num2) {
    var answer
    if(num1 < num2){
        return console.log(`The minimum number is ${num1}`)
    } else if (num2 < num1) {
        return console.log(`The minimum number is ${num2}`)
    }
}

let input1 = prompt("Enter in your first number")
let input2 = prompt("Enter in your second number")

console.log(min(input1, input2))
