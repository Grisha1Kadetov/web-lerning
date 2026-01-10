function gcd(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new TypeError("a и b должны быть целыми числами");
    }

    if (a < 0 || b < 0) {
        throw new RangeError("a и b должны быть неотрицательными");
    }

    // алгоритм Евклида
    while (b != 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

function testGcd(a, b, t) {
    const res = gcd(a, b);
    if (res === t) {
        console.log(`Test passed: gcd(${a}, ${b}) === ${t}`);
    } else {
        console.log(`Test failed: gcd(${a}, ${b}) !== ${t}, got ${res}`);
    }
}

testGcd(48, 18, 6);
testGcd(10, 5, 5);
testGcd(7, 3, 1);
testGcd(0, 5, 5);
testGcd(0, 0, 0);

try {
    gcd(-1, 5);
} catch (e) {
    console.log(e.message);
}

try {
    gcd(3.5, 2);
} catch (e) {
    console.log(e.message);
}

