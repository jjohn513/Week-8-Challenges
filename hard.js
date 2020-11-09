function bmi (height, mass) {
    var BMI = mass / (height * height)
    return BMI
}

var Tom = new Object()
Tom.height = 9
Tom.mass = 8

var Jerry = new Object()
Jerry.height = 10
Jerry.mass = 45

if (bmi(Tom) > bmi(Jerry)){
    var more = true
} else {
    var more = false
}

console.log(`Is Tom's BMI higher than Jerry's? ${more}`)