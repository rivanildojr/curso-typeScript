"use strict";
// Example Number
let number1 = 23.0;
let number2 = 0x78CF;
let number3 = 0o577;
let number4 = 0b110001;
console.log({ number: number1, type: typeof number1 });
console.log({ hex: number2, type: typeof number2 });
console.log({ octal: number3, type: typeof number3 });
console.log({ binario: number4, type: typeof number4 });
// Example BigInt
let big1 = 4545454587813189n;
let big2 = 1n;
let big3 = 0x200000000000003n;
let big4 = 1125899906842651n;
console.log('BigInt - ', big1);
console.log('BigInt - Binário', big2);
console.log('BigInt - Hexadecimal', big3);
console.log('BigInt - Octal', big4);
