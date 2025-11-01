/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает
 новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее.
Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
function includesElement(array, element) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === element){
            return true}
    }
    return false
}


function findUniqueElements(array){
let newArr =[];
for (let i = 0; i < array.length; i++) {
    if (!includesElement(newArr,array[i])) {
        newArr.push(array[i])
    }
}
return newArr
}

console.log(findUniqueElements([1, 2, 3, 3,5,8,8]))
//
// function findUniqueElements(arr) {
//     const uniqueElements = ;
//
//     for(let i = 0; i < arr.length; i++) {
//         // Проверяем, встречается ли элемент ранее в исходном массиве
//         if(!includesElement(arr, arr[i], i + 1) &&
//             !includesElement(uniqueElements, arr[i])) {
//             uniqueElements.push(arr[i]);
//         }
//     }
//
//     return uniqueElements;
// }