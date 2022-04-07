// we declare the function with the exact name "fromEuroToDollar"
///////////////////////////////////////////////////
var fromEuroToDollar = function(valueInEuro){   
    
    let valueInDollar = valueInEuro * 1.2
    return valueInDollar;
};
var fromDollarToYen = function(valueInDollar){

    let valueInYen = (valueInDollar / 1.2) * 127.9
    return valueInYen;
};
var fromYenToPound = function(valueInYen){

    let valueInPound = (valueInYen / 127.9) * 0.8
    return valueInPound;
};
////////////////////////////////////////////////////////////
// var dollarToEuro = function(dollarValue){
// 	return dollarValue * 0.89;
// }
// var euroToYen = function(euroValue){
// 	return euroValue * 124.15;
// }
////////////////////////////////////////////////////////////
// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };