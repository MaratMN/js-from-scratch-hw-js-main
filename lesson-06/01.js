/*
Напишите свою версию метода `filter`.
Ваша задача — создать функцию `filter`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна принимать два параметра:

- `element` (текущий элемент массива)
- `index` (индекс текущего элемента)

Функция `filter` должна возвращать новый массив, содержащий только те элементы `array`, для которых `callback` возвращает `true`.
*/

/* Пример использования:
const numbers = [1, 2, 3, 4, 5]

const oddNumbers = filter(numbers, (element, index) => {
  return element % 2 !== 0
});

console.log(oddNumbers) // Должен вывести: [1, 3, 5]
*/


const filter = (array,callback) => {
    const newArray = [] ;
    for (let i = 0; i <array.length; i++) {
        const element = array[i]
        const index= i;
        const result = callback(element, index); //fuu()
        console.log(result)
        if (result) {
            newArray.push(element);
        }
    } return newArray;
}


// let i = filter(array,callback)
// let sum = (a, b) => a + b;
// sum(1,2)
// const numbers = [1, 2, 3, 4, 5]
//
// const oddNumbers = filter(numbers, (element, index) => {
//     return element % 2 !== 0
// });
//
// console.log(oddNumbers) // Должен вывести: [1, 3, 5]

let fuu = string => string.length >4
const arr=['jfjfjf', 'jdjdjd','jfjfj','df','d']
console.log(filter(arr,fuu));