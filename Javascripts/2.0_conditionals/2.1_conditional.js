var value_is = 22;

if (value_is === 22) {
  console.log("Value is match.");
} else {
  console.log("value is not match.");
}

let iceCream = "chocolate";
if (iceCream === "chocolate") {
  console.log("Yay, I love chocolate ice cream!");
} else {
  console.log("Awwww, but chocolate is my favorite…");
}

/*
Note:
= is used for assigning values to a variable, == is used for comparing two variables, but it ignores the datatype of variable whereas === is used for comparing two variables, but this operator also checks datatype and compares two values.


The strict equality ( === ) operator checks whether its two operands are equal, returning a Boolean result. 

*/

// another Example: which value is bigger.

var a = 660;
var b = 709;
var c = 210;

if (a >= b && a >= c) {
  console.log("A is biger!.");
} else if (b >= a && b >= c) {
  console.log("B is bigger");
} else {
  console.log("c is bigger.");
}

// if statement

var a = 406;
var b = 209;
var c = 201;

if (a <= b && b >= c) {
  if (a == b || b == c)
    if (a == b && b == c) {
      console.log("value equal");
    } else {
      console.log("one is equal with b");
    }
  else {
    console.log(" b is biger");
  }
} else if (b <= c && c >= a) {
  console.log(" c is biger");
} else if (c <= a && a >= b) {
  console.log("a is biger");
} else {
  console.log("sytext error");
}
