# Best of the best JavaScript Style Guide

Руководство по оформлению кода на Java Script.
Топ-10 лучших мировых практик.
Только здесь, только сейчас!!!
&nbsp;

#### 1. Eval = зло.

Функция "eval" предоставляет нам доступ к компилятору JavaScript. Собственно, с ее помощью мы можем выполнить код, переданный ей в виде строки.

В результате ее использования не только значительно понизится производительность вашего скрипта, но и возникнет огромный риск, связанный с нарушением секретности (информационной безопасности), поскольку при вызове eval переданной строке предоставляются значительные полномочия (* например, могут читаться и меняться  локальные переменные). Избегайте ее использования!
&nbsp;

#### 2. Используй let и const вместо var.

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
&nbsp;

#### 3. Если ты не переназначаешь переменную, то используй const для ее объявления. И наоборот.

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
&nbsp;

#### 4. Уменьшай количество переменных в глобальной области видимости.

❌ Плохо
```javascript
let name = 'Jeffrey';
let lastName = 'Way';
function doSomething() {...}
  
 console.log(name);
```
&nbsp;
✅ Хорошо
```javascript
let DudeNameSpace = {
    name : 'Jeffrey',
    lastName : 'Way',
    doSomething : function() {...}
 }
 console.log(DudeNameSpace.name); 
```
&nbsp;

#### 5. Всегда ставьте точку с запятой в конце выражения.

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

#### 6. Используй фигурные скобки для всех многострочных блоков.

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


#### 7.  Всегда, всегда комментируйте важные части вашего кода.

Поначалу может показаться, что в этом нет необходимости, но поверьте мне, вам следует комментировать ваш код насколько это возможно. Что произойдет, когда вы вернетесь к вашему проекту через несколько месяцев, – только то, что вы поймете: не так-то просто вспомнить ход собственной мысли. Или что если одному из ваших коллег необходимо будет внести изменения в ваш код?

✅ Хорошо
```javascript
// Cycle through array and echo out each name. 
 for(var i = 0, len = array.length; i < len; i++) {
    console.log(array[i]);
 }
```
&nbsp;

#### 8. Используй === и !== (строгое сравнение ), вместо == и != (нестрогое сравнение).

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

#### 9. Используй квадратные скобки [] для объявления массивов.

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

#### 10. Используй {} вместо New Object().

❌ Плохо
```javascript
const o = new Object();
 o.name = 'Jeffrey';
 o.lastName = 'Way';
 o.someFunction = function() {
    console.log(this.name);
 }
```
&nbsp;
✅ Хорошо
```javascript
const o = {
    name: 'Jeffrey',
    lastName = 'Way',
    someFunction : function() {
       console.log(this.name);
    }
 };
```
&nbsp;

#### 11. Не объявляй функцию внутри цикла.

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

#### 12. Используйте стрелочные функции для передачи коллбеков.

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
