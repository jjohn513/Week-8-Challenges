let input = prompt("Enter a digit between 1 and 12")

if (input == "1") {
    console.log("It's January (1)")
} else if (input == "2") {
    console.log("It's February (2)")
} else if (input == "3") {
    console.log("It's March (3)")
} else if (input == "4") {
    console.log("It's April (4)")
} else if (input == "5") {
    console.log("It's May (5)")
} else if (input == "6") {
    console.log("It's June (6)")
} else if (input == "7") {
    console.log("It's July (7)")
} else if (input == "8") {
    console.log("It's August (8)")
} else if (input == "9") {
    console.log("It's September (9)")
} else if (input == "10") {
    console.log("It's October (10)")
} else if (input == "11") {
    console.log("It's November (11)")
} else if (input == "12") {
    console.log("It's December (12)")
} else if(input < 1) {
    console.log(`The number you entered is less than 1`)
} else if(input > 12){
    console.log(`Then number you enetered is greater than 12`)
} else {
    console.log(`You did not enter valid input try using the number keys!`)
}