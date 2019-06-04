# TypeScript 泛型

**JS函数:**
```
function add(num1, num2){
  return num1 + num2
}
```

### 类型变量(T只是一个变量名) 标识 未知类型 但参数和返回结果类型相同
```
function add<T>(num: T): T {
  return num;
}
```
### 对类型变量拓展
```
function add<T>(num: T[]): Array<T> {
  return num.reverse();
}
```
### 泛型类型
>**泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样**
```
let genericsAdd: <T>(num: Array<T>) => T[]
```
### 泛型函数
```
let genericsFunction: {<T>(num: T[]): T[]}
```
### 泛型接口
```
interface genericsInterface {
  <T>(num: T[]): T[]
}
```
### 泛型类
```
class GenericsClass<T> {
  num: T
  addNum: {(num: T): T}
}
```
### 泛型约束(泛型继承接口)
```
interface Length {
  length: number;
}
function add<T extends Length>(num: T): T {
  return num;
}
```
### 泛型约束(泛型约束使用类型参数)
**这样写不知道有什么意义，而且会报找不到T和K这两个定义的错误**
```
function getProperty(obj: T, key: K) {
  return obj[key];
}
```
### 泛型约束(泛型里使用类类型)
>**引用官方例子**
```
class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string;
}

class Animal {
  numLegs: number;
}

class Bee extends Animal {
  keeper: BeeKeeper;
}

class Lion extends Animal {
  keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!
```