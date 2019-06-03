# TypeScript函数

**JS函数:**
```
function add(num1, num2){
  return num1 + num2
}
```

### 为函数参数指定类型
```
function add(num1: number, num2: number): number {
  return num1 + num2
}
```
### 可选参数和默认值参数
>**可选参数必须放在必选参数后面**
```
function add(num1: number, num2?: number): number {
  return num1 + num2 || 0
}
```
带有默认值的参数:
>**默认值参数可以传undefined**
```
function add(num1 = '参数默认值', num2: number) {
  return `${num1} ${num2}`
}
```
### 剩余参数
```
function add(num1: number, num2: number, ...resetOfNum: number[]) {
  return num1 + num2 + resetOfNum.reduce((accumulator, currentValue, currentIndex) => accumulator + currentValue)
}
```
**调用：add(1, 1, 1, 1, 1)**
### 限定函数this指向
```
class Add {
  num: number
  constructor(){
    this.num = 11;
  }
  innerAdd(this: Add) {
    console.log(this.num)
  }
}
```
### 函数重载（官网的例子很好）
```
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
```
