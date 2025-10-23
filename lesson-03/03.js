// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.
let a= 1
let b= 2
let c= 3

function findLargest() {

    if (a>b && a>c)
        return a
    else if (b>a && b>c)
    return b
    else if(c >b && c>a)
        return c
}
 console.log(findLargest())