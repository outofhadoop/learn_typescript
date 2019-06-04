// class Student {
//   fullName: String;
//   constructor (public firstName: String, public lastName: String) {
//     this.fullName = `${firstName} ${lastName}`
//   }
// }
// interface Person {
//   fristName: String,
//   lastName: String
// }
// function greeter(user: Person) {
//   return `Hello, ${user.fristName} ${user.lastName}`
// }
function add(num) {
    return num;
}
console.log(add({ length: 1 }));
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
getProperty(x, "m");
