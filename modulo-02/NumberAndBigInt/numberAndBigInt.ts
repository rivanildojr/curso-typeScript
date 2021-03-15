// Example Number

let number1: number = 23.0;
let number2: number = 0x78CF;
let number3: number = 0o577;
let number4: number = 0b110001;

console.log({number: number1, type: typeof number1});
console.log({hex: number2, type: typeof number2});
console.log({octal: number3, type: typeof number3});
console.log({binario: number4, type: typeof number4});

// Example BigInt

let big1: bigint = 4545454587813189n;
let big2: bigint = 0b0000000000000000000000001n;
let big3: bigint = 0x200000000000003n;
let big4: bigint = 0o40000000000000033n;

console.log('BigInt - ', big1);
console.log('BigInt - Binário', big2);
console.log('BigInt - Hexadecimal', big3);
console.log('BigInt - Octal', big4);