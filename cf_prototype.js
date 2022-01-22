// 1. constructor function (cf is a blue print. 'new' word is used to create obj using cf)

// function cf1 (f,l) {
//     this.fname = f,
//     this.lname = l
// }

// var res = new cf1("Rahul","Kumar");
// console.log(res);

// ********************************************

// 2. cf1 -->> cf2

// function cf1 (f,l) {
//     this.fname = f,
//     this.lname = l
// }

// function cf2 (a,f,l) {
//     cf1.call(this,f,l),
//     this.age = a
// }

// var res = new cf2(25,"Rahul","Kumar");
// console.log(res);

// ********************************************

// 3. cf -->> obj

// function cf (p) {
//     this.age = p
// }

// var obj = {
//     name: "Rahul",
// }

// cf.call(obj,25);
// console.log(obj);

// ********************************************

// 4. obj1 -->> obj2 (obj2 is created using obj1)

// var obj1 = {
//     legs: 4,
//     tail: true
// }

// var obj2 = Object.create(obj1);
// obj2.position = "Child of obj1";
// console.log(obj2);

// ********************************************

// 5. obj -->> cf

// var obj = {
//     legs: 4,
//     tail: true
// }

// function cf () {
//     this.name = "child of obj"
// }

// cf.prototype = obj;

// var res = new cf();
// console.log(res);

// ********************************************

// 6. passing some extra thing to parent(prototype) and also to child

// method -> 1
var obj = {
    father_name: "Raju",
}

function cf() {
    this.child_name= "Ajay"
}

cf.prototype = obj;
cf.prototype.num_chid = 5;

var res = new cf ();
res.age = 25
console.log(res);


// method -> 2
var obj = {
    father_name: "Raju",
}

function cf() {
    this.child_name= "Ajay"
}

cf.prototype = obj;

var res = new cf ();
cf.prototype.sister = function(arg) {
    this.sis = arg;
}
res.sister("Sita");

console.log(res);