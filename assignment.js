const capitalize = (string) => {
    const capString = string[0].toUpperCase() + string.slice(1);
    return capString;
}

const reverseString = (string) => {
    let revString = '';
    for (let i = string.length - 1; i > - 1; i--) {
        revString += string[i];
        
    }
    return revString;
}

const calculator = {
    add(x, y) {
        return x + y;
    },
    subtract(x, y) {
        return x - y;
    },
    divide(x, y) {
        if (y === 0) {
            return 'cannot divide by 0';
        }
        return x / y;
    },
    multiply(x, y) {
        return x * y;
    }
}

const ceasarCipher = (plaintext, key) => {
    let ciphertext = '';
    for (let i = 0; i < plaintext.length; i++) {
        if (plaintext[i].charCodeAt() >= 97 && plaintext[i].charCodeAt() <= 122) {
            ciphertext += String.fromCharCode((((plaintext[i].charCodeAt() + key) - 97) % 26) + 97);
        } else if (plaintext[i].charCodeAt() >= 65 && plaintext[i].charCodeAt() <= 90){
            ciphertext += String.fromCharCode((((plaintext[i].charCodeAt() + key) - 65) % 26) + 65);
        } else {
            ciphertext += String.fromCharCode(plaintext[i].charCodeAt());
        } 
    }
    return ciphertext;
}

const analyzeArray = (numberArray) => {
    analyzedArray = {
        average: arrayAverage(numberArray),
        min: arrayMin(numberArray),
        max: arrayMax(numberArray),
        length: arrayLength(numberArray)
    }
    return analyzedArray;
}

const arrayAverage = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

const arrayMin = (array) => {
    let minValue = array[0];
    for ( let i = 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
        }
    }
    return minValue;
}

const arrayMax = (array) => {
    let maxValue = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }
    return maxValue;
}

const arrayLength = (array) => {
    return array.length;
}


module.exports = { capitalize, reverseString, calculator, ceasarCipher, analyzeArray };

