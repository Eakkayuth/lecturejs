// Functions คือการทำงานหนึ่งๆ จะไม่ทำงานถ้าไม่ถูกเรียกใช้งาน (call function)
// Functions มี 4 ประเภท
// 1. no parameter-no return
function funA() {
  console.log("wow wow wow");
}

// 2. have parameter-no return
function funB(a, b) {
  console.log(a + b);
}

// 3. no parameter-have return
function funC() {
  console.log("Hello...");
  return 10;
}

// 4. have parameter-have return
function funD(a, b, c, d) {
  console.log(a, b, c, d);
  return a * b * c * d;
}

funA();
funB(10, 20); //เราเรียกข้อมูลที่ส่งให้ parameter ว่า argument

console.log(funC());
console.log(funD(1, 2, 3, 4)); // เราเรียกข้อมูลที่ส่งให้ parameter ว่า argument
