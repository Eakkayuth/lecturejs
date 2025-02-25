//function
//defult parameter

const zz = (a = 10, b = 20, c = 30) => {
  console.log(a, b, c);
};

zz(111);
zz(111, 222);
zz(111, 222, 333);
console.log("-----------");
// callback function
const aa = () => {
  console.log("Hello.....");
};

const bb = (xx) => {
  console.log("Hey.....");
  xx();
};

bb(aa);
bb(() => {
  console.log("Wow wow wow");
});
