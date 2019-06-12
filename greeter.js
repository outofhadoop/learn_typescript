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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
// function fullName (person: Person) {
//   return `${person.fristName} ${person.lastName}`;
// }
// fullName( {fristName: 'Han', lastName: 'Tianyu'} );
// let user = new Student('han', 'tianyu')
// document.body.innerHTML = greeter(user)
// /**
//  * 基本类型
//  * 对于基本类型，官方文档都是小写，但首字母大写也是可以的
//  */
// // 布尔类型
// let isBoolean: boolean = true
// // 数字
// let decLiteral: number = 6
// let hexLiteral: number = 0xf00d // 61453 16进制  13 + Math.pow(16, 3) * 15
// let binaryLiteral: number = 0b1010 // 10 二进制
// let octalLiteral: number = 0o744 // 484 8进制 
// // 字符串
// let isString : string = "bob"
// isString = 'string'
// isString = `is string`
// isString = `${isString} : yes`
// isString = `next line:
// ${isString}
// `
// // 数组
// let isArrayNumber: number[] = [1, 2] // 或 let isArrayNumber: Array<number> = [ 1, 2]
// let isArrayString: Array<string> = ['1', '2'] // 或 let isArrayString: string[] = ['1', '2']
// /**
//  * @todo question 怎么声明 ['', 1, '', 1] 这种字符串和数字随机位置的数组 
//  */
// // 元组
// let x: [string, number] = ['str', 10] // 错误： let x: [string, number] = [10, 'str']
// x[3] = '越界的元素可以赋值(string | number)类型；称为联合类型'
// // 枚举
// enum Color {Red, Green, Bule} 
// // 默认情况下，从0开始为元素编号
// // enum Color {Red = 1, Green, Blue}
// // 全部都采用手动赋值：
// // enum Color {Red = 1, Green = 2, Blue = 4}
// // let colorName: string = Color[2];
// let c: Color = Color.Bule // c 的值为Bule
// // Any
// let notSure: any = 4
// // Void
// function voidFunction () : void {
//   // do something
// }
// let unusable: void = undefined
// // Null 和 Undefined
// // 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
// // 指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自
// let isNull: null = null
// let isUndefined: undefined = undefined
// // Never
// // 返回never的函数必须存在无法达到的终点
// function error(message: string): never {
//   throw new Error(message);
// }
// // 推断的返回值类型为never
// function fail() {
//   return error("Something failed");
// }
// // 返回never的函数必须存在无法达到的终点
// function infiniteLoop(): never {
//   while (true) {
//   }
// }
// // 类型断言
// // 类型断言有两种形式。 其一是“尖括号”语法：
// let someValue: any = "this is a string"
// let strLength: number = (<string>someValue).length
// // 另一种是as语法
// // let strLength: number = (someValue as string).length
// // 接口定义 除了width 和 color属性，还有其他任意数量的位置类型的属性
// interface sq {
//   color: string;
//   width: number;
//   [propName: string]: any;
// }
// // 定义函数类型接口
// // param1为参数一 param2为参数二 boolean定义了返回类型
// interface Func {
//   (param1: string, param2: number): boolean
// }
// // 用接口检测类的构造函数是否符合规范
// interface ClockConstructor {
//   new (hour: number, minute: number): ClockInterface
// }
// interface ClockInterface {
//   tick();
// }
// function createClock(ctor: ClockConstructor, hour: number, minute: number) {
//   return new ctor(hour, minute)
// }
// class DigitalClock implements ClockInterface {
//   constructor(h: number, m: number){
//   }
//   tick(){
//   }
// }
// // 创建可被检测的实例 
// let digital = new DigitalClock(2,3);
// // 接口可以多继承
// interface A {
//   color: string;
// }
// interface B {
//   width:number;
// }
// interface C extends A, B{
//   side: number;
// }
// let square = <C>{}
// square = {
//   width: 1,
//   color: '',
//   side: 3
// }
// function add(num1 = '参数默认值', num2: number): string{
//   return `${num1} ${num2}`
// }
// let a = new Promise(function(resolve, reject){resolve(1)})
// function add(num1 = '参数默认值', num2: number) {
//   return `${num1} ${num2}`
// }
// function add(num1: number, num2: number, ...resetOfNum: number[]) {
//   return num1 + num2 + resetOfNum.reduce((accumulator, currentValue, currentIndex) => accumulator + currentValue)
// }
// console.log(add(1, 1, 1, 1, 1))
// let suits = ["hearts", "spades", "clubs", "diamonds"];
// function pickCard(x: {suit: string; card: number; }[]): number;
// function pickCard(x: number): {suit: string; card: number; };
// function pickCard(x): any {
//     if (typeof x == "object") {
//         let pickedCard = Math.floor(Math.random() * x.length);
//         return pickedCard;
//     }
//     else if (typeof x == "number") {
//         let pickedSuit = Math.floor(x / 13);
//         return { suit: suits[pickedSuit], card: x % 13 };
//     }
// }
// let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
// let pickedCard1 = myDeck[pickCard(myDeck)];
// console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
// let pickedCard2 = pickCard(15);
// console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
// class Add {
//     num: number
//     constructor(){
//       this.num = 11;
//     }
//     innerAdd(this: Add) {
//       console.log(this.num)
//     }
//   }
// let instanceAdd = new Add()
// instanceAdd.innerAdd()
// function add<F>(num1: F): F {
//   return num1;
// }
// console.log(add('3333'))
// console.log(add(123))
// console.log(add({a: 12, b: 'string'}))
// function add<T>(num: T[]): Array<T> {
//   return num.reverse();
// }
// let addInstance: <T>(num: Array<T>) => T[] 
// console.log(addInstance)
// let genericsFunction: {<T>(num: T[]): T[]}
// genericsFunction = function(num){return num}
// class GenericsClass<T> {
//   num: T
//   addNum: {(num: T): T}
// }
// let instanceGenericsClass: GenericsClass<number>
// instanceGenericsClass = new GenericsClass()
// instanceGenericsClass.num = 2;
// instanceGenericsClass.addNum = num => {
//   return num + 1
// }
// console.log(instanceGenericsClass.addNum(instanceGenericsClass.num))
// interface Length {
//   length: number;
// }
// function add<T extends Length>(num: T): T {
//   return num
// }
// console.log(add({length: 1}))
// function getProperty(obj: T, key: K) {
//   return obj[key];
// }
// let x = { a: 1, b: 2, c: 3, d: 4 };
// getProperty(x, "a"); 
// getProperty(x, "m");
var NumberEnum;
(function (NumberEnum) {
    NumberEnum[NumberEnum["Zero"] = 0] = "Zero";
    NumberEnum[NumberEnum["One"] = 1] = "One";
    NumberEnum[NumberEnum["Two"] = 2] = "Two";
    NumberEnum[NumberEnum["Three"] = 3] = "Three";
})(NumberEnum || (NumberEnum = {}));
var one;
one = NumberEnum.One;
console.log(one);
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
function f(obj) {
    console.log(obj.Zero + 100);
}
f(NumberEnum);
function spl(template, name, oo) {
    console.log(template, name);
}
var ll = '123';
spl(__makeTemplateObject(["kkkkk ", " l ", ""], ["kkkkk ", " l ", ""]), ll, 'ff');
