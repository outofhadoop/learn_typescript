# TypeScript 枚举

### 数字枚举
```
enum numberEnum{
  Zero,
  One,
  Two,
  Three
}
```
### 带有初始化值的数字枚举
```
enum numberEnum {
  One = 1,
  Two,
  Three
}
```
### 访问枚举类型
```
enum numberEnum {
  One = 1,
  Three = 3,
}
let Three: numberEnum
Three = numberEnum.Three
```
### 字符串枚举
```
enum Direction {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
```
### 计算的和常量
```
enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = "123".length,
}
```
### 运行时枚举
```
enum E {
  X, Y, Z
}
function f(obj: {X: number}) {
  return obj.X
}
f(E)
```
### 反向映射
```

```