// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.
let a = -1
let b = 1
let c = 1

function findLargest() {
let largest
    if (a>b && a>c)
        largest = a
    else if (b>a && b>c)
        largest = b
    else if(c >b && c>a)
        largest = c
    else if (a=b=c)
        largest = a
    return largest
}
findLargest()
 console.log(findLargest())