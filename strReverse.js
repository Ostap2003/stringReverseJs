// reversed for loop
function stringReverse(str) {
    let rev = '';
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return rev;
}

// while loop
function stringReverse2(str) {
    let rev = '';
    let i = str.length - 1;
    while (i >= 0) {
        rev += str[i];
        i--;
    }
    return rev;
}

// functional
function stringReverse3(str) {
    return str.split('').reverse().join('');
}

// recursion
function stringReverse4(str) {
    if (str.length == 1) {
        return str;
    }
    return stringReverse4(str.substring(1)) + str[0];
}

// while + substring
function stringReverse5(str) {
    let rev = '';
    let i = str.length - 1;
    while (i >= 0) {
        rev += str.substring(i)[0];
        i--;
    }
    return rev;
}

// String to array, array inplace replacement, convert array back to string
function stringReverse6(str) {
    let strArr = str.split('');
    let startPt = 0;
    let endPt = str.length - 1;
    while ((endPt - startPt != 0) & (startPt < endPt)) {
        let temp = strArr[startPt];
        strArr[startPt] = strArr[endPt];
        strArr[endPt] = temp;
        startPt++;
        endPt--;
    }
    return strArr.join('');
}

// for ... i loop (increasing)
function stringReverse7(str) {
    let rev = '';
    for (let i = 0; i < str.length; i++) {
        rev += str.substring(str.length - 1 - i)[0];
    }
    return rev;
}

// for ... in
function stringReverse8(str) {
    let rev = '';
    for (let ch in str) {
        rev = str[ch] + rev;
    }
    return rev;
}

// for ... of
function stringReverse9(str) {
    let rev = '';
    for (let ch of str) {
        rev = ch + rev;
    }
    return rev;
}

// forEach method
function stringReverse10(str) {
    let rev = '';
    str.split('').forEach((i) => {
        rev = i + rev;
    });
    return rev
}

let str = 'Hello there';
console.log(`${str}, len:${str.length}\n`);

let funcArr = {stringReverse, 
               stringReverse2, 
               stringReverse3, 
               stringReverse4, 
               stringReverse5, 
               stringReverse6, 
               stringReverse7, 
               stringReverse8, 
               stringReverse9, 
               stringReverse10}

for (let func in funcArr) {
    console.log(`${func}:\t\t${funcArr[func](str)}`)
}
