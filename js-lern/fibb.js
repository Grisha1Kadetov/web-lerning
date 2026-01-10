function fibb(n) {
    if (!Number.isInteger(n)) {
        throw new TypeError("n должно быть целым числом");
    }

    if (n < 0 || n > 1000) {
        throw new RangeError("n должно быть в диапазоне от 0 до 1000");
    }

    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        const c = a + b;
        a = b;
        b = c;
    }

    return b;
}

function testFibb(n, t) {
    const res = fibb(n);
    if (res === t) {
        console.log(`Test passed: fibb(${n}) === ${t}`);
    } else {
        console.log(`Test failed: fibb(${n}) !== ${t}, got ${res}`);
    }
}

testFibb(0, 0);
testFibb(1, 1);
testFibb(2, 1);
testFibb(3, 2);
testFibb(4, 3);
testFibb(5, 5);
testFibb(10, 55);

try {
    fibb(-1);
} catch (e) {
    console.log(e.message);
}

try {
    fibb(2.5);
} catch (e) {
    console.log(e.message);
}