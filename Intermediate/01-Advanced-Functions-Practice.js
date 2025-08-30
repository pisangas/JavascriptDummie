// 1. Crea una función que retorne a otra función
const counterLetters = function (word){
        return word.length;
}

function returnCounterLetters(func, word){
    return func(word);
}

console.log(returnCounterLetters(counterLetters, "Hola Mundo"));

// 2. Implementa una función currificada que multiplique 3 números
function multiply(a){
    return function(b){
        return function(c){
            return a * b * c;
        }
    }
}
console.log(multiply(2)(3)(4)); // 24

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base, exponent - 1);
}
console.log(power(2, 3)); // 8

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
function createCounter(initialValue){
    let count = initialValue;
    return {
        increment: function(){
            count++;
        },
        decrement: function(){
            count--;
        },
        getValue: function(){
            return count;
        }
    }
}

const counter = createCounter(5);
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getValue());

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
function sumManyTimes(multiplier, ...numbers){
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum * multiplier;
}

console.log(sumManyTimes(2, 1, 2, 3, 4)); // 20

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
function sumWithCallback(numbers, callback){
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    callback(sum);
}
sumWithCallback([1, 2, 3, 4], function(result){
    console.log("La suma es: " + result);
});

// 7. Desarrolla una función parcial
function partial(func, ...fixedArgs){
    return function(...remainingArgs){
        return func(...fixedArgs, ...remainingArgs);
    }
}
function add(a, b, c){
    return a + b + c;
}
const add5And10 = partial(add, 5, 10);
console.log(add5And10(15)); // 30

// 8. Implementa un ejemplo que haga uso de Spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// 9. Implementa un retorno implícito
const square = x => x * x;
console.log(square(5)); // 25   

// 10. Haz uso del this léxico
const obj = {
    value: 42,
    getValue: function(){
        const innerFunction = () => this.value;
        return innerFunction();
    }
};
console.log(obj.getValue()); // 42