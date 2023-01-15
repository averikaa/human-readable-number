module.exports = function toReadable (number) {
    let inputStr = number.toString();
    let outputStr = "";
    for(let i = 0; i < inputStr.length; i++) {
        if(inputStr.length == 3 && i == 0){
            outputStr = outputStr.trimEnd() + zeroToNine(inputStr[i]) + " hundred";
        }
        if((inputStr.length == 3 && i == 1) || (inputStr.length == 2 && i == 0)){
            if(inputStr[i] < 2 && inputStr[i] > 0) {
                outputStr = outputStr.trimEnd() + " " + tenToNineteen(inputStr[i] + inputStr[i + 1]);
                break;
            } else{
                outputStr = outputStr.trimEnd() + " " + toDec(inputStr[i]);
            }
        }
        if((inputStr.length == 3 && i == 2) || (inputStr.length == 2 && i == 1) || (inputStr.length == 1)) {
            if((inputStr.length == 1) && inputStr[i] == '0'){
                return "zero";
            }
            outputStr = outputStr.trimEnd() + " " + zeroToNine(inputStr[i]);
        }

    }
  return outputStr.trim();
}
function zeroToNine(number) {
    switch(number){
        case '0':
        return "";
        case '1':
        return "one";
        case '2':
        return "two";
        case '3':
        return "three";
        case '4':
        return "four";
        case '5':
        return "five";
        case '6':
        return "six";
        case '7':
        return "seven";
        case '8':
        return "eight";
        case '9':
        return "nine";
    }
}
function tenToNineteen(number){
    switch (number) {
        case '10':
        return "ten";
        case '11':
        return "eleven";
        case '12':
        return "twelve";
        case '13':
        return "thirteen";
        case '14':
        return "fourteen";
        case '15':
        return "fifteen";
        case '16':
        return "sixteen";
        case '17':
        return "seventeen";
        case '18':
        return "eighteen";
        case '19':
        return "nineteen";
    }
        
}
function toDec(number) {
    switch(number){
        case '2':
        return "twenty";
        case '3':
        return "thirty";
        case '4':
        return "forty";
        case '5':
        return "fifty";
        case '6':
        return "sixty";
        case '7':
        return "seventy";
        case '8':
        return "eighty";
        case '9':
        return "ninety";
        case '0':
        return "";
    }
}