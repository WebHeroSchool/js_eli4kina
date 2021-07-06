# JavaScript_Style_Guide

Руководство по оформлению кода на Java Script

##Содержание 

0. [Пробелы](#пробелы)
1. [Переменные](#переменные)
2. [Запятые](#запятые)
3. [Точка с запятой](#точка-с-запятой)
4. [Блоки](#блоки)
5. [Объекты](#объекты)
6. [Операторы сравнения](#операторы-сравнения)
7. [Массивы](#массивы)
8. [Строки](#строки)
9. [Функции](#функции)
10. [Стрелочные функции](#стрелочные-функции)
11. [Классы и конструкторы](#классы-и-конструкторы)

## Переменные.

&nbsp;
#### 1. Используй табуляцию вместо 4-х пробелов.

❌ Плохо
```javascript
if (x > y) {
let a=2  
}
```
&nbsp;
✅ Хорошо
```javascript
if (x > y) {
    let a = 2  
}
```

&nbsp;
#### 2. Операторы и переменные должны быть разделены пробелами.

❌ Плохо
```javascript
if (x>y) {
    let a=2  
}
```
&nbsp;
✅ Хорошо
```javascript
if (x > y) {
    let a = 2  
}
```

&nbsp;

## Переменные.

&nbsp;
#### 1. Используй let и const вместо var.

❌ Плохо
```javascript
var x = "y";
var CONFIG = {};
```
&nbsp;
✅ Хорошо
```javascript
let x = "y";
const CONFIG = {};
```

#### 2. Если ты не переназначаешь переменную, то используй const для ее объявления. И наоборот.

&nbsp;

❌ Плохо
```javascript
var a = 1;
var b = 2;
var count = 1;
if (true) {
  count += 1;
}
```

&nbsp;

✅ Хорошо
```javascript
const a = 1;
const b = 2;
let count = 1;
if (true) {
  count += 1;
}
```

## Запятые.

&nbsp;
#### 1. Запятые не должны быть в начале строки.

&nbsp;

❌ Плохо
```javascript
const story = [
    once
  , upon
  , aTime
];
```

&nbsp;

✅ Хорошо
```javascript
const story = [
  once,
  upon,
  aTime,
];
```

&nbsp;

## Точка с запятой.

&nbsp;
#### 1. Всегда ставьте точку с запятой в конце выражения.

&nbsp;

❌ Плохо
```javascript
// Выбросит исключение
const luke = {}
const leia = {}
[luke, leia].forEach((jedi) => jedi.father = 'vader')
// Выбросит исключение
const reaction = "No! That’s impossible!"
(async function meanwhileOnTheFalcon() {
  // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
  // ...
}())
// Вернет `undefined` вместо корректной строки так return находится один в строке и ASI автоматически вставит точку с запятой именно туда!
function foo() {
  return
    'search your feelings, you know it to be foo'
}
```

&nbsp;

✅ Хорошо
```javascript
const luke = {};
const leia = {};
[luke, leia].forEach((jedi) => {
  jedi.father = 'vader';
});
const reaction = "No! That’s impossible!";
(async function meanwhileOnTheFalcon() {
  // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
  // ...
}());
function foo() {
  return 'search your feelings, you know it to be foo';
}
```

&nbsp;

## Блоки.

&nbsp;
#### 1. Используй фигурные скобки для всех многострочных блоков.

&nbsp;

❌ Плохо
```javascript
if (test)
  return false;
function foo() { return false; }
```

&nbsp;

✅ Хорошо
```javascript
if (test) return false;
function bar() {
  return false;
}
```

&nbsp;
#### 2. При использовании конструкции if .. else располагайте else на одной строке со скобкой закрывающей блок if.

&nbsp;

❌ Плохо
```javascript
if (test) {
  thing1();
  thing2();
}
else {
  thing3();
}
```

&nbsp;

✅ Хорошо
```javascript
if (test) {
  thing1();
  thing2();
} else {
  thing3();
}
```

&nbsp;
#### 3. В конструкции if .. else можно упустить фигурные скобки, если выполняется одно действие в условии

&nbsp;

❌ Плохо
```javascript
if (test) {
  thing1();
}
else {
  thing3();
}
```

&nbsp;

✅ Хорошо
```javascript
if (test) 
  thing1();
else 
  thing3();
```

&nbsp;

## Объекты.

&nbsp;
#### 1. Для объявления объекта использую фигурные скобки.

&nbsp;

❌ Плохо
```javascript
const item = new Object();
```

&nbsp;

✅ Хорошо
```javascript
const item = {};
```

#### 2. В многострочных объектах после открывающей фигурной скобки свойства необходимо писать с новой строки. Закрывающую фигурную скобку следует также расположить на новой строке. Если объект однострочный, фигурные скобки должны находиться на одной строке.

&nbsp;

❌ Плохо
```javascript
let a = {foo: 1
};
let c = {foo: 1, bar: 2
};
let e = {foo: function() {
  dosomething();
}};
```

&nbsp;

✅ Хорошо
```javascript
let a = {};
let b = {foo: 1};
let e = {
  foo: 1,
  bar: 2
};
let f = {foo: function() {dosomething();}};
let g = {
  foo: function() {
      dosomething();
  }
};
```

&nbsp;

## Операторы сравнения.

&nbsp;
#### 1. Используй === и !== (строгое сравнение ), вместо == и != (нестрогое сравнение).

&nbsp;

Это считается хорошей практикой, т.к. ты избегаешь неявного преобразования типов данных.

&nbsp;

❌ Плохо
```javascript
a == b 
foo == true
bananas != 1
value == undefined
```

&nbsp;

✅ Хорошо
```javascript
typeof foo === 'undefined'
'hello' !== 'world'
0 === 0
true === true
foo === null
```

**Исключения:**
* сравнение двух литеральных значений:
* вызов typeof;
* сравнение с nullю

&nbsp;

## Массивы.

&nbsp;
#### 1. Используй квадратные скобки [ ] для объявления массивов.

&nbsp;

❌ Плохо
```javascript
const items = new Array();
```

&nbsp;

✅ Хорошо
```javascript
const items = [];
```

&nbsp;

## Строки.

&nbsp;
#### 1. Используй одинарные кавычки ' '  для строк.

&nbsp;

❌ Плохо
```javascript
const name = "Capt. Janeway";
```

&nbsp;

✅ Хорошо
```javascript
const name = 'Capt. Janeway';
```

&nbsp;

## Функции.
#### 1. Всегда ставь один пробел перед {} в функциях.


&nbsp;

❌ Плохо
```javascript
const f = function(){};
function a(){};
```

&nbsp;

✅ Хорошо
```javascript
const x = function() {};
function a() {};
```

&nbsp;
#### 2. Не объявляй функцию внутри цикла.

&nbsp;

❌ Плохо
```javascript
for (let i=10; i; i--) {
  (function() { return i; })();
}
while(i) {
  const a = function() { return i; };
  a();
}
```

&nbsp;

✅ Хорошо
```javascript
const a = function() {};
for (let i=10; i; i--) {
  a();
}
```

&nbsp;

## Стрелочные функции.

&nbsp;
#### 1. Используйте стрелочные функции для передачи коллбеков.

&nbsp;

❌ Плохо
```javascript
[1, 2, 3].map(function (x) {
  const y = x + 1;
  return x * y;
});
```

&nbsp;

✅ Хорошо
```javascript
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});
```
&nbsp;

## Классы и конструкторы.

&nbsp;
#### 1. Называй функции-конструкторы с большой буквы.

&nbsp;

❌ Плохо
```javascript
const colleague = new person();
const friend = new person.acquaintance();
```

&nbsp;

✅ Хорошо
```javascript
const colleague = new Person();
const friend = new person.Acquaintance();
```