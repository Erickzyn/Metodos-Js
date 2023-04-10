// Atividade: 01 - Escreva um script no JavaScript para unir todos os elementos do Array

// meu exemplo.:

// const elements = ["cars", "cats", "dogs", "sky"]

// let elementsFindIndex = elements.join(", ")

// console.log(elementsFindIndex)

// exemplo professora.:

// const colors = ["Red", "Green", "Blue", "Violet"];

// let colorFindIndex = colors.join(", ");

// console.log(colorFindIndex)

// Atividade: 02 - Escreva um script que contenha uma lista de usuários, ordenada por ordem alfabetica 

// const users = ["João", "Vinícius", "Larissa", "Arthur", "Bruno"]
// users.sort();

// console.log(users)



// Atividade: 03 - Escreva uma função que receba duas strings, digamos que a e b, como argumentos. Se a contém b, anexe b ao início de a, se não, anexe b ao final e retorne a concatenação.

// function myFunction(a, b) {
//     let array = [];

//     if(a.indexOf(b) !== -1) {
//         array.push(b + a);
//         return array;
//     } else {
//         array.push(a + b);
//         return array;
//     }
// }

// console.log(myFunction("tips", "s"));

// Atividade: 04 - Escreva um script que remova o primeiro elemento de um Array

const ammunition = [".380", ".50", "9mm", "7.62mm", "5.56mm"];

ammunition.shift();

console.log(ammunition);