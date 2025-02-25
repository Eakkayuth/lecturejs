//value of variable
let data1 = "Hello.....";
let data2 = 20;
let data3 = true;
// index number 0    1    2    3    4
let data4 = [10, 20, 30, 40, 50];
let data6 = ["John", 30, true]; // ไม่แนะนำ
let data7 = ["John", "Manee", "Sombat"];
let data5 = {
  fullname: "John",
  age: 30,
  status: true,
  color: ["red", "green", "blue"],
  address: {
    no: 10 / 5,
    soi: "Soi 10",
    street: "Petchakasem",
    provine: "Bangkok",
  },
};
let data8 = null;
let data9;

console.log(data8);
console.log(data9);
console.log("----------------");
console.log(data5.fullname);
console.log(data5.status);
console.log(data5.color[1]);
console.log(data5.address.street);
console.log("----------------");

console.log(data1);
console.log(data2);
console.log(data3);
console.log("----------------");
// เข้าถึงข้อมูลแต่ละตัวของ Array
console.log(data4[2]);
console.log(data4[4]);
data4[2] = 333;
console.log(data4[2]);
console.log("----------------");
// เข้าถึงข้อมูลทุกตัวของ Array
data4.forEach((value) => {
  console.log(value * 10);
});
