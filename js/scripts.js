// const otherKey = prompt('Quale chiave aggiuntiva vuoi inserire?');
// const otherValue = prompt('Quale valore deve avere la chiave aggiuntiva?');

// const name = 'Alessio';
// const age = 32;
// const email = 'alessio@boolean.careers';

// const alessio = {
//     name,
//     age,
//     email,
//     [otherKey]: otherValue
// };

// // alessio[otherKey] = otherValue;

// console.log(alessio);

/* 
    ------------------------------------------------
*/

// const person = {
//     firstName: 'Gino',
//     personalEmail: 'gino@boolean.careers',
//     hoursWorked: 47,
//     classesAsTeacher: [
//         27,
//         39,
//         54,
//         69,
//         84,
//         101,
//         114
//     ],
// };

// // const firstName = person.firstName;
// // const personalEmail = person.personalEmail;
// // const hoursWorked = person.hoursWorked;

// const {
//     hoursWorked,
//     firstName,
//     classesAsTeacher
// } = person;

// console.log('firstName', firstName, typeof firstName);
// // console.log('personalEmail', personalEmail, typeof personalEmail);
// console.log('hoursWorked', hoursWorked, typeof hoursWorked);
// console.log('classesAsTeacher', classesAsTeacher, typeof classesAsTeacher);

/* 
    ------------------------------------------------
*/

// const console = {
//     log(argsArray) {
//         for (let i = 0; i < argsArray.length; i++) {
//             window.printInConsole(argsArray[i]);
//         }
//     }
// };

	
// function myFunction(...myArguments) {
//     console.log('myArguments', myArguments, typeof myArguments);
// }

// myFunction('uno', 3, {name: 'pippo'});

// function sum(numUno, numDue) {
//     return numUno + numDue;
// }

// // const risultatoUno = sum(2, 3);
// // console.log(risultatoUno);

// // const risultatoDue = sum(risultatoUno, 7);
// // console.log(risultatoDue);

// const risultatoTre = sum(sum(2, 3), 7);
// console.log(risultatoTre);

// /* MIGLIORIAMO LA NOSTRA FUNZIONE SUM */
// function sumWithArray(numbers) {
//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }

//     return sum;
// }

// const risultatoQuattro = sumWithArray([2, 3, 7, 4, 2, 6, 7, 8]);    // 39
// console.log(risultatoQuattro);

// /* MIGLIORIAMO ANCORA LA NOSTRA FUNZIONE SUM */
// /*
//     L'operatore spread (cioè ...) così utilizzato ci consente di definire una funzione con un numero
//     VARIABILE di argomenti
// */
// function sumWithSpread(...numbers) {
//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }

//     return sum;
// }

// const risultatoCinque = sumWithSpread(2, 3, 7, 4, 2, 6, 7, 8);    // 39
// console.log(risultatoCinque);

// function operationOnNumbers(operation, ...numbers) {
//     if (numbers.length > 0) {
//         let result = numbers[0];
    
//         if (operation == '+') {
//             for (let i = 1; i < numbers.length; i++) {
//                 result += numbers[i];
//             }
//         }
//         else if (operation == '-') {
//             for (let i = 1; i < numbers.length; i++) {
//                 result -= numbers[i];
//             }
//         }
//         else if (operation == '*') {
//             for (let i = 1; i < numbers.length; i++) {
//                 result *= numbers[i];
//             }
//         }
//         else if (operation == '/') {
//             for (let i = 1; i < numbers.length; i++) {
//                 result /= numbers[i];
//             }
//         }
    
//         return result;
//     }

//     return null;
// }

// console.log(operationOnNumbers('+', 10, 2));
// console.log(operationOnNumbers('-', 10, 2, 3));
// console.log(operationOnNumbers('*', 10, 2, 3, 4));
// console.log(operationOnNumbers('/', 10, 2, 3, 4, 7));

/* 
    ------------------------------------------------
*/

const obj = {
    name: 'palla',
    peso: 50
};
console.log('obj', obj); 

// const copyObj = {
//     name: obj.name,
//     peso: obj.peso,
//     colore: 'blue',
// };

/* OPPURE */

// const copyObj = {};
// copyObj.name = obj.name;
// copyObj.peso = obj.peso;
// copyObj.colore = 'blue';

/* OPPURE */

const copyObj = {
    ...obj,
    colore: 'blue'
};

/* PER IL MOMENTO, NON SI FA */
// const copyObj = obj;
// copyObj.colore = 'blue';

console.log('copyObj', copyObj);

/* 
    ------------------------------------------------
*/

const myObject = {
    name: 'Gino',
    age: 37
};

console.log('myObject PRIMA', myObject);

function updateObjectCheModificaLOggettoOriginale(obj) {
    obj.favoriteColor = 'lightcoral';

    // Qui non avrei bisogno di questo return
    return obj;
}

// function updateObjectCheNONModificaLOggettoOriginale(obj) {
//     const newObject = {
//         ...obj
//     };
//     newObject.favoriteColor = 'lightcoral';

//     return newObject;
// }

const newObject = updateObjectCheModificaLOggettoOriginale(myObject)

console.log('newObject', newObject);
console.log('myObject DOPO', myObject);