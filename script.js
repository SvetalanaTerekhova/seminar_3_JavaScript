/* Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени */


const degreeNumber = (arg) => {
    return Math.pow(arg, 3);
}

let num1 = Number(prompt(`Введите первое число`));
let num2 = Number(prompt(`Введите второе число`));
console.log(`Сумма чисел ${num1} и ${num2} в 3 степени = ${degreeNumber(num1) + degreeNumber(num2)}`);


/* Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение" */


/* 
const stringNumber = (arg) => {
    if (isNaN(arg)) {
        return "string";
    }
    else {
        return "number";
    }
}

const tax = (arg) => {
    return arg * 0.87;
}


let num = prompt(`Введите размер заработной платы до вычета налогов`);
if (stringNumber(num) === "string") {
    console.log(`Значение задано неверно`);
}
else {
    console.log(`Размер заработной платы за вычетом налогов равен ${tax(Number(num))}`);
} */


/* Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел */

/* const maxNumber = (arg1, arg2, arg3) => {
    let max = arg1;
    if (arg2 > max) {
        max = arg2;
    }
    if (arg3 > max) {
        max = arg3;
    }
    return max;
}

let num1 = Number(prompt(`Введите первое число`));
let num2 = Number(prompt(`Введите второе число`));
let num3 = Number(prompt(`Введите третье число`));
alert(`Наибольшим числом из ${num1}, ${num2}, ${num3} является ${maxNumber(num1, num2, num3)}`); */



/* Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно. */

/* 
const sumNumber = (arg1, arg2) => {
    return arg1 + arg2;
}

const differenceNumber = (arg1, arg2) => {
    if (arg1 > arg2) {
        return arg1 - arg2;
    }
    else {
        return arg2 - arg1;
    }
}

const multiplicationNumber = (arg1, arg2) => {
    return arg1 * arg2;
}

const divNumber = (arg1, arg2) => {
    return arg1 / arg2;
}

let num1 = Number(prompt(`Введите первое число`));
let num2 = Number(prompt(`Введите второе число`));

console.log(`Сумма чисел ${num1} и ${num2} равна ${sumNumber(num1, num2)}`);
console.log(`Разность чисел ${num1} и ${num2} равна ${differenceNumber(num1, num2)}`);
console.log(`Умножение чисел ${num1} и ${num2} равно ${multiplicationNumber(num1, num2)}`);
console.log(`Деление чисел ${num1} и ${num2} равно ${divNumber(num1, num2)}`); */
