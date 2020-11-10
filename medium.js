// let input = parseInt(prompt("Enter a digit between 1 and 12"))

// if (input == "1") {
//     console.log("It's January (1)")
// } else if (input == "2") {
//     console.log("It's February (2)")
// } else if (input == "3") {
//     console.log("It's March (3)")
// } else if (input == "4") {
//     console.log("It's April (4)")
// } else if (input == "5") {
//     console.log("It's May (5)")
// } else if (input == "6") {
//     console.log("It's June (6)")
// } else if (input == "7") {
//     console.log("It's July (7)")
// } else if (input == "8") {
//     console.log("It's August (8)")
// } else if (input == "9") {
//     console.log("It's September (9)")
// } else if (input == "10") {
//     console.log("It's October (10)")
// } else if (input == "11") {
//     console.log("It's November (11)")
// } else if (input == "12") {
//     console.log("It's December (12)")
// } else if(input < 1) {
//     console.log(`The number you entered is less than 1`)
// } else if(input > 12){
//     console.log(`Then number you enetered is greater than 12`)
// } else {
//     console.log(`You did not enter valid input try using the number keys!`)
// }

let month = [
    {
        "name" : "January",
        "number" : 1
    },

    {
        "name" : "February",
        "number" : 2
    },

    {
        "name" : "March",
        "number" : 3
    },

    {
        "name" : "April",
        "number" : 4
    },

    {
        "name" : "May",
        "number" : 5
    },

    {
        "name" : "June",
        "number" : 6
    },
    
    {
        "name" : "July",
        "number" : 7
    },
    
    {
        "name" : "August",
        "number" : 8
    },

    {
        "name" : "September",
        "number" : 9
    },

    {
        "name" : "October",
        "number" : 10
    },

    {
        "name" : "November",
        "number" : 11
    },

    {
        "name" : "December",
        "number" : 12
    },

]



    let input = parseInt(prompt("Enter a digit between 1 and 12"))

    if (input < 1) {

        console.log("The number you entered is less than 1")

    } else if (input > 12){

        console.log("The number you entered is greater than 12")

    } else {

        console.log(`You entered ${month[input-1].number}, it is ${month[input-1].name}`)
    }
