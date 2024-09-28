console.log('Hola mundo');

let nombre = 'Fredo';
console.log('nombre', nombre);
var edad = 30;
console.log('edad', edad);
const Pi = 3.1416;
console.log('Pi', Pi);
console.log('===========');

// Objeto /  Object
// se define con llaves un objeto
const persona = {
  nombre: nombre,
  edad: edad,
  esEstudiante: false
}

const persona2 = {
  nombre: 'Omar',
  edad: 20,
  esEstudiante: true
}
console.log(persona)

nombre = 'Maria'

persona.edad = 27
persona.altura = 170

console.log('Nombre:', nombre);
console.log('Edad:', edad);
console.log('PI:', Pi);
console.log('persona', persona)
console.log('persona2', persona2)

let numerosFavoritos = [1,2,3,4,5]
console.log(numerosFavoritos)
numerosFavoritos.push(6)
console.log(numerosFavoritos)

if(true) {
  let nombre = 'julia';
  var edad = 20;
  console.log(nombre)
  console.log(edad)
}
console.log('Fuera del bloque -> Nombre:', nombre); // María (no cambió)
console.log('Fuera del bloque -> Edad:', edad); // 20 (sí cambió)





// esto provoca un error
// Pi = 5
// console.log('Pi', Pi);

// let totalList0 = 100;

// let total_list123 = 1 + 2 + 3;


// Dato primitivos

// let miString = 'Hola mundo' // String
// let miNumero = 123; // numero
// let esVerdad = true // false Booleano
// let valorNulo = null // Null
// let noDefinido; // Undefined
// let miSimbolo = Symbol('simbolo') // Symbol
// let miBigInt = BigInt(123456789012345678901234567890) // BigInt

// console.log('miString es de tipo:', typeof miString); // "string"
// console.log('miNumero es de tipo:', typeof miNumero); // "number"
// console.log('esVerdad es de tipo:', typeof esVerdad); // "boolean"
// console.log('valorNulo es de tipo:', typeof valorNulo); // "object" (este es un caso especial, aunque null es primitivo, typeof devuelve "object")
// console.log('noDefinido es de tipo:', typeof noDefinido); // "undefined"
// console.log('miSimbolo es de tipo:', typeof miSimbolo); // "symbol"
// console.log('miBigInt es de tipo:', typeof miBigInt); // "bigint"

