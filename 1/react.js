'use strict';

// let a = 5, b = 10, c = '5';
// const z = a;

// console.log(a == c); //true
// console.log(a === c); //false
// console.log(a == z); //true
// console.log(a === z); //true
// console.log(a != b); //true
// console.log(a != z); //false
// console.log(a > b); //false
// console.log(a < b); //true
// console.log(a >= b); //false
// console.log(a <= b); //true

// let a = 5, b = 10, c = 15;

// console.log(a); //5
// a = b;
// console.log(a); //10
// a += b;
// console.log(a); //20
// a -= b;
// console.log(b); //10
// c *= b;
// console.log(c); //150
// c /= 5;
// console.log(c); //30
// b %= 2;
// console.log(b); //0

// let ism = 'Sardor';
// console.log(ism);

// let familiya = "Azimov";
// console.log(familiya);

// let ism = 'Sardor';
// let message = 'Salom ' + ism + ' !';
// console.log(message);

// let ism = 'Sardor';
// let message = `Salom ${ism}`;
// console.log(message);

// const htmlPassed = true;
// const cssPassed = true;
// let message = ` `;

// if (htmlPassed && cssPassed) {
//     message = 'Siz Bootstrap kursini boshlashingiz mumkin';
// } else if (htmlPassed || cssPassed) {
//     message = 'Iltimos ikkinchi kursni ham tugating';
// } else {
//     message = 'Iltimos birinchi ikkala kursni ham tugatib oling';
// }

// console.log(message);

// const print = () => console.log ("Printing...");
// print() // Printing...;

// const mixedArray = ['Sardor', 1, true, null];
// console.log(mixedArray);

// const helloArray = ['h', 'e', 'l', 'l', 'o'];

// console.log(helloArray[0]); //h

// console.log(helloArray[2]); //l

// let languages = ['js', 'java'];
// console.log(languages);

// languages.push('go'); 

// console.log(languages);

// const languages = ['js', 'java'];
// console.log(languages);

// languages.unshift('go');

// console.log(languages);

// let languages = ['js', 'java', 'go'];

// languages[1] = 'swift';

// console.log(languages); 

// const languages = ['js', 'java', 'go', 'swift'];
// console.log(languages);
// const deleteLanguage = languages.pop();
// console.log(languages);
// console.log(deleteLanguage);
 
// const languages = ['js', 'java', 'go', 'swift'];

// console.log(languages.length);
// console.log(languages);
// const deletedLanguage = languages.shift();
// console.log(languages);
// console.log(deletedLanguage);

// concat()

// const array1 = [1, 4];
// const array2 = [2, 3, 7];
// const result = array1.concat(array2);
// console.log(result); //[1, 4, 2, 3, 7]

// // find()

// const findValue = (number) => number === 2;
// const foundValue = result.find(findValue);
// console.log(foundValue); //2

// // filter()

// const filterValues = number => number > 5;
// const filteredValues = result.filter(filterValues);
// console.log(filteredValues) //7

// // map()

// const mapValues = number => 'Son: ' + number;
// const mappedValues = result.map(mapValues);
// console.log(mappedValues);

// // sort()

// const sortValues = (number1, number2) => number1 - number2;
// result.sort();
// console.log(result); // [1, 2, 3, 4, 7]

// const dasturchi = {
//     ism: 'Sardor',
//     yosh: 18
// }

// console.log(dasturchi.yosh);

// const dasturchi = {
//     ism: 'Sardor',
//     yosh: 18,
//     manzil: {
//         mamlakat: 'Uzbekistan',
//         shahar: 'Jizzax',
//         uy: 28
//     }
// }

// console.log(dasturchi.manzil.shahar);

// const dasturchi = {
//     ism: 'Sardor',
//     yosh: 18,
//     salomlashish: function() {
//         console.log('Salom!');
//     }
// }

// console.log(dasturchi.salomlashish());

// const dasturchi = {
//     ism: 'Sardor',
//     yosh: 18,
//     salomlashish: function() {
//         console.log('Salom! Mening ismim ' + this.ism);
//     }
// }

// dasturchi.salomlashish();

// const dasturchi = {
//     ism: 'Sardor',
//     yosh: 18
// }

// console.log(Object.keys(dasturchi));
// console.log(Object.values(dasturchi));
// console.log(Object.entries(dasturchi));

// const number = 2;

// if (number > 0) {
//     console.log('Berilgan son musbat');
// } else if (number === 0) {
//     console.log('Berilgan son 0');
// } else {
//     console.log('Berilgan son manfiy');
// }

// const number = 4;
// let output;

// switch (number) {
//     case 1:
//         output = 'bir';
//         break;
//     case 2:
//         output = 'ikki';
//         break;
//     case 3:
//         output = 'uch';
//         break;
//     default:
//         output = 'topilmadi';
//         break;
//     case 4:
//         output = 'tort';
//         break
// }

// console.log(`Qiymat: ${output}`);
