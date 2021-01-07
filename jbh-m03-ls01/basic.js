/* 1 */
var myVariable; // undefined
var myVariable1 = 5;
var myVariable2 = "str";
var myVariable3 = false;
var myVariable4 = null;

console.log(typeof myVariable1); // 'number'


/* 2a */
var x1 = "5";
var _x1 = Number(x1);
var nan = Number("5sdfsdf5") // NaN
var nan2 = Number("5sdfsdf5") // NaN
Number.isNaN(nan);
console.log(nan == nan2); //false

/* 2b */
var t1 = "2";
var t2 = 2;
console.log(t1 == t2); // true
console.log(t1 === t2); // false

2 + 2 + "2";
4 + "2"

/* 2c */
var f1 = "asd";
if (f1) {
    console.log(f1);
}

// falsy values
''
null
undefined
0
NaN
// all equals to false


/* 3 */
function mult(a, b, c) {
    return a * b * c;
}
mult(1, 2, 3);

function asyncFunc() {
    function later() {
        console.log(1);
    }
    setTimeout(later, 1000);
    console.log(2);
}
asyncFunc();


// anonymous function
function asyncFunc() {
    setTimeout(function () {
        console.log(1);
    }, 1000);
    console.log(2);
}
asyncFunc();

function h(callback) {
    setTimeout(function () {
        callback(3);
    }, 1000);
}
var x = 1;
var y = 2;
h(function (z) {
    console.log(x * y * z);
});

// anonymous object
var myObj1 = {
    a: 1,
    b: false,
    c: "sdf"
}

// constructor function
function Person(age, name) {
    this.age = age;
    this.name = name;
}
var myObj2 = new Person(22, 'name');

// arrow functions
function mult2(a, b, c) {
    return a * b * c;
}
const mult2 = (a, b, c) => a * b * c;

function mult3(a, b, c) {
    console.log(a, b, c);
    return a * b * c;
}
const mult3 = (a, b, c) => {
    console.log(a, b, c);
    return a * b * c;
}

function mult4(a) {
    return a * 2;
}
const mult4 = a => a * 2;


function mult5() {
    return 5 * 4;
}
const mult4 = () => 5 * 5;