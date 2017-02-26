var possibleCodes = [];

/**
 * Returns the number of reds and greens of compared codes
 * @param {String} code1
 * @param {String} code2
 * @return {Array} Array that contains number of reds and greens
 */
function compareCodes(code1, code2) {
    var reds = 0;
    var greens = 0;
    var splitCode1 = code1.split("");
    var splitCode2 = code2.split("");
    for(var i = 0; i < 4; i++) {
        if(splitCode1[i] === splitCode2[i]) {
            greens++;
        }
        if(splitCode1.includes(splitCode2[i]) && splitCode1[i] !== splitCode2[i]) {
            reds++;
        }
    }
    return [reds, greens];
}

/**
 * Removes codes from remaining possible codes that do not give the outputted amount of reds and greens.
 * Returns the next suggested code to enter.
 * @param {String} previousCode The code entered previously
 * @param {Number} reds Number of reds previous code gave
 * @param {Number} greens Number of greens previous code gave
 * @return {String} The next suggested code to enter
 */
function solve(previousCode, reds, greens) {
    var newPossibleCodes = [];
    for(var i = 0; i < possibleCodes.length; i++) {
        var redGreenArr = compareCodes(previousCode, possibleCodes[i]);
        if(redGreenArr[0] === reds && redGreenArr[1] === greens) {
            newPossibleCodes.push(possibleCodes[i]);
        }
    }
    possibleCodes = newPossibleCodes;
    return possibleCodes[0];
}

/**
 * Generates an array of possible codes between 1234 and 9876
 */
function generatePossibleCodes() {
    possibleCodes = [];
    for(var i = 1; i <= 9; i++) {
        for(var j = 1; j <= 9; j++) {
            if(i !== j) {
                for(var k = 1; k <= 9; k++) {
                    if(i !== k && j !== k) {
                        for(var l = 1; l <= 9; l++) {
                            if(i !== l && j !== l && k !== l) {
                                possibleCodes.push("" + i + j + k + l);
                            }
                        }
                    }
                }
            }
        }
    }
}
