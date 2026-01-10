function minDigit(x) {
    if (!Number.isInteger(x)) {
        throw new TypeError("x должно быть целым числом");
    }

    if (x < 0) {
        throw new RangeError("x должно быть неотрицательным");
    }

    if (x === 0) {
        return 0;
    }

    let min = 9;

    while (x > 0) {
        digit = x % 10;
        if (digit < min) {
            min = digit;
        }
        x = (x - digit) / 10;
    }

    return min;
}

function testMinDigit(x, t) {
    const res = minDigit(x);
    if (res === t) {
        console.log(`Test passed: minDigit(${x}) === ${t}`);
    } else {
        console.log(`Test failed: minDigit(${x}) !== ${t}, got ${res}`);
    }
}

testMinDigit(5723, 2);
testMinDigit(9081, 0);
testMinDigit(7, 7);
testMinDigit(0, 0);

try {
    minDigit(-5);
} catch (e) {
    console.log(e.message);
}

try {
    minDigit(12.3);
} catch (e) {
    console.log(e.message);
}
