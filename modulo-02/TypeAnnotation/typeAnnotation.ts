// Variáveis
let nome: string = 'Rivanildo Júnior';
console.log(nome);

// Arrays
let animals: string[] = ['Elefante', 'Cachorro', 'Gato', 'Leão'];
console.log(animals);

// Objetos
let car: {
  name: string,
  year: number,
  price: number, 
}

car = { 
  name: 'Toyota Yaris Sedan XS',
  year: 2019,
  price: 80000,
}

console.log(car);

// Funções
function multipleNumber(number1: number, number2: number) {
  return number1 * number2
}

console.log(multipleNumber(2, 5));
