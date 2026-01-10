function pow(x, n) {
    if (!Number.isInteger(n)) {
        throw new TypeError("n должно быть целым числом");
    }

    if (n < 0) {
        throw new RangeError("n должно быть >= 0");
    }

    if (n === 0) {
        return 1;
    }

    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

function testPow(x, n, t) {
    const res = pow(x, n);
    if (res === t) {
        console.log(`Test passed: pow(${x}, ${n}) === ${t}`);
    } else {
        console.log(`Test failed: pow(${x}, ${n}) !== ${t}, got ${res}`);
    }
}

testPow(2, 3, 8);
testPow(3, 4, 81);
testPow(5, 0, 1);

try {
    pow(2, -1);
} catch (e) {
    console.log(e.message);
}

try {
    pow(2, 2.5);
} catch (e) {
    console.log(e.message);
}