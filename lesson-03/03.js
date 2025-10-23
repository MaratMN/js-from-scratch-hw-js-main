// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.
// let a
// let b
// let c
function findLargest(a,b,c) {
let largest
    if (a>b && a>c)
        largest = a
    else if (b>a && b>c)
        largest = b
    else if(c >b && c>a)
        largest = c
    else if (a===b && b===c)
        largest = a
    return largest
}
// findLargest(1,2,0)

 console.log(findLargest(-2,1,0))