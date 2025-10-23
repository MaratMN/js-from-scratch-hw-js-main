// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.
let a= 10
let b= 8
let c= 4

function findLargest() {

    if (a>b && a>c)
        return a
    else if (b>a && b>c)
    return b
    else if(c >b && c>a)
        return c
}
 console.log(findLargest())