// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
let numero1 = 46

function verificarpar(numero) {
    if(numero % 2 === 0) {
        console.log(`${numero} es par`);
    } else {
        console.log(`${numero} es impar`);
    }
}
verificarpar(numero1)

// 2- Crear una función que reciba dos números por parámetro e indique en consola qué número es mayor, y si ninguno lo es, indicar por consola que son iguales.
let numero2 = 85
let numero3 = 4

function mayor() {
    if (numero2 > numero3) {
        console.log(`${numero2} es mayor`);
    } else if (numero3 > numero2) {
        console.log(`${numero3} es mayor`);  
    } else {
        console.log(`Son iguales`);
    }
}
mayor()

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

const multiplo = (numero) => {
    return numero % 5 === 0 ? `${numero} es multiplo de 5` : `${numero} no es multiplo de 5`
}
console.log(multiplo(35));

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
for (let i = 0; i <= 15; i++) {
    console.log(`Número: ${i}`);
}

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
let palabra = "chinguenguencha"
let repeticion = 5

function repetirpalabra(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
        console.log(`${palabra}`);
    }
}
repetirpalabra(palabra, repeticion)

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
let array1 = [
    'James T. Kirk',
    'Señor Spock',
    'Leonard McCoy',
    'Hikaru Sulu',
    'Mongomery Scotty',
    'Nyota Uhura',
    'Pavel Chekov',
    'Christine Chapel',
]
console.log(array1);

for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
let array2 = [
    '2',
    '4',
    '6',
    '8',
    '9',
    '12',
    '14',
    '16',
    '18',
    '20',
]
function imprimirarray(array2) {
    for (let i = 0; i < array2.length; i++) {
        if (i !== 4) {
            console.log(array2[i]);
        }
    }
}
imprimirarray(array2);


// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
let array3 = [
    '2',
    '4',
    '6',
    '8',
    '10',
]
let multiplicacion = 5
function multiplicar(array3, multiplicacion) {
    for (let i = 0; i < array3.length; i++) {
        console.log(array3[i] * multiplicacion);
    }
}
multiplicar(array3, multiplicacion)