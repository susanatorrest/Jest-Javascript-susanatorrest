
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = function (valueInDollar){
    let valueInYen = ((valueInDollar / 1.07) * 156.5)  
    return valueInYen
}

const fromEuroToDollar = function (valueInEuro){
    let valueInDollar= valueInEuro * 1.07
    return valueInDollar
}

const fromYenToPound = function (valueInYen){
    let valueInPound = ((valueInYen / 156.5) * 0.87)
    return valueInPound
}

const sum = (a,b) => {
    return a + b
}

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum , fromEuroToDollar, fromDollarToYen, fromYenToPound};