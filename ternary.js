let myVar = 5;

if (myVar) {
  myVar = myVar * 10;
} else {
  myVar = 0;
}
//true
console.log(myVar);

// //doing this with  ternary opt

myVar = !myVar ? (myVar = myVar * 10) : (myVar = 0);
//false
console.log(myVar);

//another practice

const money = 120000;
const gf = 6;

money > 100000 && gf < 5
  ? console.log("do saving  20000")
  : console.log("can't do saving ");
// another example

const isActive = false;

const show = () => console.log("hey I am active ");
const hide = () => console.log("go to hell ");

// isActive ? show() : hide();
isActive && show();
!isActive && hide();
// it's  the another shortcut of above .. i don't recommend for getting uncaught error
// srt to number shortcut
const numStr = "45";

const realNum = +numStr;

console.log(realNum);
