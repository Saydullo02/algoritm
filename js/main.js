// 1-mashq a va b butun sonlar berilgan va agar ozgaruvchilar a va b bir biriga teng bolmasa yigindisi chiqsin, teng boladigan bolsa 0 chiqsin;

let a = 7;
let b = 9;

let result = (a !== b )? a + b : 0 ;
// console.log(result);


// 2-mashq  3ta son berilgan shu sonlarni kichkinasini topish dasturini tuzing

let first = 10;
let second = 20; 
let third = 30;

let newResult = ((first < second) && (first < third)) ? first : ((second && third));
// console.log(newResult);


// 3-mashq 3ta son berilgan shu sonlarni ortacha qiymatini toping. misol uchun  1,2,4:>>> 2;
let son1 = 7;
let son2 = 17;
let son3 = 27;
// console.log( son1 + son2 + son3 / 3);


//  4-mashq 3ta son berilgan sonlarni 1- kichkinasini osish tartibida, 2-kattasini, kamayish tartibida chiqsin

// let num1 = 22;
// let num2 = 55;
// let num3 = 44;

// // O'shish tartibi sonlarni
// if ((num1 < num2) && (num1 < num3)) {
//     console.log(num1);
// }if ((num3 > num1) && (num3 < num2)){
//     console.log(num3);
// }if ((num2 > num1) && (num2 > num3)) {
//     console.log(num2);
// }

// // Kamayish tartibi sonlarni
// if ((num2 > num1) && (num2 > num3)) {
//     console.log(num2);
// }if ((num3 > num1) && (num3 < num2)) {
//     console.log(num3);
// }if ((num1 < num2) && (num1 < num3)) {
//     console.log(num1);
// }


//5-mashq 3ta son berilgan agar berilgan sonlar osish tartibida boladigan bolsa, sonlarni 2ga kopaytirin har bittasini aks holda ishorasi ozgarsin >+>- va ->+ga
// let z = 9;
// let x = -4;
// let c = 7;
// let v = -1;
// if ((x < c) && (x < z)) {
//     console.log((x * 2) *v);
// }if ((c > x) && (c < z)) {
//     console.log((c * 2) *v);
// }if ((x < z) && (c < z)) {
//     console.log((z * 2) * v);
// }else {

// };

// 6-mashq 3ta son berilgan agar sonlar osish yoki kamayish tartibida bolsa sonlarini 2lantirish bolsin, agar shartga tushmasa ishorasi ozgarsin

// let q = 21;
// let w = 12;
// let e = 2;

// if ((e < w) && (e < q)) {
//     console.log(e);
// }if ((w > e) && (w < q)) {
//     console.log(w);
// }if ((e < q ) && (w < q)) {
//     console.log(q);
// }