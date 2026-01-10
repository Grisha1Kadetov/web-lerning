function getSortedArray(array, key) {
    let result = array.slice();

    let n = result.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n-1; j++) {
            if (result[j][key] > result[j + 1][key]) {
                let t = result[j];
                result[j] = result[j + 1];
                result[j + 1] = t;
            }
        }
    }

    return result;
}

const data = [
    { id: 3 },
    { id: 1 },
    { id: 2 }
];
console.log(getSortedArray(data, "id"));

const users = [
    { name: "Charlie" },
    { name: "Alice" },
    { name: "Bob" }
];
console.log(getSortedArray(users, "name"));
