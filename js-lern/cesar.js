function cesar(str, shift, action) {
    if (typeof str !== "string") {
        throw new TypeError("str должно быть строкой");
    }

    if (!Number.isInteger(shift)) {
        throw new TypeError("shift должно быть целым числом");
    }

    if (action !== "encode" && action !== "decode") {
        throw new Error("action должно быть 'encode' или 'decode'");
    }

    const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    const len = alphabet.length;

    if (action === "decode") {
        shift = -shift;
    }

    let result = "";

    for (let i = 0; i < str.length; i++) {
        const ch = str[i];
        const lower = ch.toLowerCase();
        const index = alphabet.indexOf(lower);

        if (index === -1) {
            result += ch;
            continue;
        }

        let newIndex = (index + shift) % len;
        if (newIndex < 0) {
            newIndex += len;
        }

        let newChar = alphabet[newIndex];

        if (ch === ch.toUpperCase()) {
            newChar = newChar.toUpperCase();
        }

        result += newChar;
    }

    return result;
}

const res = cesar("Привет, мир!", 3, "encode");
console.log(res);
console.log(cesar(res, 3, "decode"));

const secret = "эзтыхз фзъзъз";
for (let shift = -35; shift <= 35; shift += 1)
{
    console.log(`Shift: ${shift}, Decoded: ${cesar(secret, shift, "decode")}`);
    //decode shift -25 хакуна матата
}