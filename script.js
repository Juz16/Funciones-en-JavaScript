function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log("Factorial de 5:", factorial(5)); 
console.log("Factorial de 3:", factorial(3)); 
console.log("Factorial de 0:", factorial(0)); 

function sumaRecursiva(n) {
    if (n === 0) {
        return 0;
    }
    return n + sumaRecursiva(n - 1);
}

console.log("Suma recursiva hasta 5:", sumaRecursiva(5)); 
console.log("Suma recursiva hasta 3:", sumaRecursiva(3)); 

const numeros = [1, 5, 3, 9, 2];
const maximo = Math.max(...numeros); 
console.log("El número más grande es:", maximo)

const arreglo = [1, 2, 3];
const noEsArreglo = "Hola Mundo";

console.log("¿Es un arreglo?", Array.isArray(arreglo));
console.log("¿Es un arreglo?", Array.isArray(noEsArreglo));

let arregloDeEjemplo = [10, 20, 30, 40, 50];
console.log("Primer elemento del arreglo:", arregloDeEjemplo[0]); 
console.log("Cuarto elemento del arreglo:", arregloDeEjemplo[3]); 

let numerosArray = [1, 2, 3];
numerosArray.push(4); 
console.log("Arreglo después de push:", numerosArray); 

let frutas = ["manzana", "banana", "cereza"];
frutas.pop(); 
console.log("Arreglo después de pop:", frutas);

