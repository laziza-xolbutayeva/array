'use strict'

//1-masala
// let n = +prompt("n=");
// let array = [];
// for (let i = 1; i <= n; i++) {
//     array.push(i);
// }
// console.log(array)


//2-masala
// let n = +prompt("n=");
// let arr = [];
// for (let i = 0; i <= n; i++) {
//     arr[i] = Math.pow(2, i);
// }
// console.log(arr)


//3-masala
// let n = +prompt("n=");
// let a = [];
// let sum = 0;
// for (let i = 0; i <= n; i++) {
//     a[i] = i;
//     sum += a[i];
// }
// console.log(sum);
// console.log(a)


//4-masala
// let a = [];
// let st = 0;
// let sj = 0;
// for (let i = 0; i <= 10; i++) {
//     a[i] = i * 10;
//     (i % 2 == 1) ? st += a[i]: sj -= a[i];
// }
// console.log(st);
// console.log(sj);
// console.log(st - sj);
// console.log(a)


//5-masala
// let n = +prompt("n=");
// let array = [];
// let sum = 0;
// for (let i = 0; i <= n; i++) {
//     array[i] = +prompt();
//     sum += array[i];
// }
// console.log(array)
// console.log(sum)


//6-masala
// let n = +prompt("n=");
// let array = [];
// for (let i = 0; i < n; i++) {
//     array.push(i);
// }
// for (let i = 0; i < n; i++) {
//     console.log(array[array.length - i - 1])
// }
// console.log(array)


//7-masala
// let a = ['Kamol', 22, 'Erkin', 17, 'Akmal', 15];
// let b = prompt("ism1");
// let c = prompt("ism2");
// for (let i = 0; i < a.length; i++) {
//     if (a[i] == b) {
//         for (let j = 0; j < a.length; j++) {
//             if (a[j] == c) {
//                 console.log(Math.abs(a[i + 1] - a[j + 1]));
//             }
//         }
//     }
// }


//8-masala
// let n = +prompt('n=')
// let k = +prompt('k=')
// let l = +prompt('l=')
// let array = [];
// let s = 0;
// for (let i = 0; i <= n; i++) {
//     array.push(i);
//     if (i >= k && i <= l) {
//         s += i;
//     }
// }
// console.log(array)
// console.log(s)


//9-masala
// let n = +prompt('n=')
// let array = [];
// for (let i = 1; i <= n; i++) {
//     array.push(Math.floor(Math.random() * 100))
// }
// console.log(array)
// function maximum(arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 == 0) {
//             if (arr[i] > max)
//                 max = array[i]
//         }
//     }
//     return max;
// }
// console.log(maximum(array))


//10-masala
// let n = +prompt('n=')
// let array = [];
// for (let i = 1; i <= n; i++) {
//     array.push(Math.floor(Math.random() * 100))
// }
// console.log(array)
// function minimum(arr) {
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 == 0) {
//             if (arr[i] < min)
//                 min = array[i]
//         }
//     }
//     return min;
// }
// console.log(minimum(array))


//11-masala
// let n = +prompt('n=')
// let array = [];
// for (let i = 1; i <= n; i++) {
//     array.push(Math.floor(Math.random() * 100))
// }
// console.log(array)
// function maximum(arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 == 1 && arr[i] > max) {
//             max = array[i]
//         }
//     }
//     return max;
// }
// console.log(maximum(array));


//12-masala
// let n = +prompt('n=')
// let array = [];
// let s = 0;
// for (let i = 1; i <= n; i++) {
//     array.push(Math.floor(Math.random() * 100))
//     s += array[i - 1];
// }
// console.log(array)
// console.log(s / array.length)


//13-masala
// let n = +prompt('n=')
// let array = [];
// for (let i = 1; i <= n; i++) {
//     array.push(Math.floor(Math.random() * 100))
// }
// console.log(array)
// for (let i = 0; i < array.length; i++) {
//     if (i % 2 == 0) {
//         console.log(array[i]);
//     }
// }


//14-masala
// let n = +prompt('n=')
// let arr = [];
// let m = 0;
// for (let i = 1; i <= n; i++) {
//     arr.push(Math.floor(Math.random() * 100))
// }
// console.log(arr)
// for (let i = 0; i < arr.length; i++) {
//     if (i == 0) continue;
//     for (let j = 1; j <= i; j++) {
//         if (i % j == 0) {
//             m++;
//         }
//     }
//     if (m > 2) console.log(`${i}-indeksdagi ${arr[i]}`);
//     m = 0;
// }


//15-masala
// let n = +prompt('n=')
// let arr = [];
// let s = 0;
// let m = 0;
// for (let i = 1; i <= n; i++) {
//     arr.push(Math.floor(Math.random() * 100))
// }
// console.log(arr)
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 0) continue;
//     for (let j = 1; j <= arr[i]; j++) {
//         if (arr[i] % j == 0) {
//             m++;
//         }
//     }
//     if (m == 2) console.log(arr[i]);
//     m = 0;
// }


//16-masala
// let arr = ['hello', 25, true, 'hii'];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof(arr[i]) == "string")
//         console.log(arr[i]);
// }


//17-masala
// let a = [1, 2, 35, 68, 95, 32, 17];
// let b = [35, 32, 1, 56, 58];
// for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//         if (a[i] === b[j]) {
//             console.log(a[i]);
//         }
//     }
// }


//18-masala
// let n = +prompt("n=");
// let array = [];
// for (let i = 1; i <= n; i++) {
//     array.push(+prompt(`${i} massiv elementi`))
// }
// console.log(array)


// 18 - masala
// let n = +prompt("n=");
// let array = [];
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     array.push(+prompt(`${i} massiv elementi`));
//     sum += array[i - 1];
// }
// console.log(array)
// console.log(sum)


//20-masala
// let n = +prompt("n=");
// let array = [];
// for (let i = 1; i <= n; i++) {
//     array.push(+prompt(`${i} massiv elementi`))
// }
// let m = prompt();
// if (m == "juft") {
//     for (let i = 0; i < array.length; i++) {
//         if (i % 2 == 0) console.log(array[i])
//     }
// } else if (m == "toq") {
//     for (let i = 0; i < array.length; i++) {
//         if (i % 2 == 1) console.log(array[i])
//     }
// }



//21-masala
// let n = +prompt('n=')
// let arr = [];
// for (let i = 1; i <= n; i++) {
//     arr.push(Math.floor(Math.random() * 100))
// }
// console.log(arr)
// console.log(arr[arr.length - 1])



//22-masala
// let n = +prompt("n=");
// let array = [];
// for (let i = 1; i <= n; i++) {
//     array.push(+prompt(`${i} massiv elementi`))
// }
// let mas = [array[0]];
// let s = false;
// for (let i = 1; i < array.length; i++) {
//     for (let j = 0; j <= mas.length; j++) {
//         if (array[i] == mas[j])
//             s = true;
//     }
//     if (s == false) {
//         mas.push(array[i]);
//     }
//     s = false;
// }
// console.log(array)
// console.log(mas)