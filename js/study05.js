//Control Flow: Condition/Decision/Selection
//ใช้พิสูจน์ตรวจสอบก่อนทำงานใดๆ
//if, if-else ,if-else-if, switch-case
// if
let a = 10;
if (a == "10") {
  console.log("Wow....");
}
console.log("-----------");

// if-else
let b = "Sombat";
if (b < "Somjai") {
  console.log("Hi....");
} else {
  console.log("Hey....");
}
console.log("-----------");

// if-else-if
let score = 69;
if (score >= 80) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
} else if (score >= 60) {
  console.log("C");
} else if (score >= 50) {
  console.log("D");
} else {
  console.log("F");
}
console.log("-----------");

// switch-case
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
    break;
}
