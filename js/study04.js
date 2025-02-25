//Operator ตัวดำเนินการ
// + - * / % ** ++ --
console.log(10 ** 2);

// == != === !== > < >= <=

// !&& ||

let a = 10;
let b = "10";
// Python: a + b จะได้ Error
// JAVA: a + b จะได้ 1010
// JavaScript: a + b จะได้ 20

console.log(a * b);
// เปรียบว่าเท่ากันใช่ไหม
console.log(a == b); // ไม่สนใจ Type
console.log(a === b); // สนใจ Type
// เปรียบว่าไม่เท่ากันใช่ไหม
console.log(a != b); // ไม่สนใจ Type
console.log(a !== b); // สนใจ Type

a = "Hello";
console.log(a);

console.log("Bangna" < "Bangkok");

// Ternay Operator
// _______ ? _______ : _______
// เงื่อนไข ? ทำเมื่อจริง : ทำเมื่อเท็จ

let score = 50;
let grade = score > 60 ? "A" : "B";
console.log(grade);

// Nullish Operator
// ___ ?? ___
// หน้าเครื่องหมาย ?? เป็น null หรือ undefined จะได้ค่าหลังเครื่องหมาย
// หน้าเครื่องหมาย ?? ไม่เป็น null หรือ undefined จะได้ค่านั้นเลย
let data1 = null;
console.log(data1 ?? "Hi.....");
let data2 = "Wow wow wow";
console.log(data2 ?? "Hello.....");
let data3;
console.log(data3 ?? "Hey.....");
