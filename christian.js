const a = 2;
const b = 3;
const c = 4;

// Ausgabe nur für mich, damit ich gleich im Terminal
// sehe, was die Werte waren.
console.log("-------------------");
console.log("a =", a, " b =", b, " c =", c);
console.log("-------------------");

// 1.)
function addition() {
  let result = a + b + c;
  console.log("a + b + c =", result);
}

// 2.)
function subtraction() {
  let result = a - b - c;
  console.log("a - b - c =", result);
}

// 3.)
function multiplication() {
  let result = a * b * c;
  console.log("a * b * c =", result);
}

// 4.)
function division() {
  let result = a / b / c;
  console.log("a / b / c =", result);
}

// Ich muss die Funktionen auch ausführen,
// damit sie benutzt werden.
addition();
subtraction();
multiplication();
division();
