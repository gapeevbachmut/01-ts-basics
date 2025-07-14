// Задача 6. Узагальнені типи (файл task-6.ts)
// Функція getFirstElement приймає масив і повертає його перший елемент.
// Зроби функцію узагальненою, використовуючи тип T, щоб вона працювала з масивами будь-якого типу.
// Додай явну типізацію дженериків у виклики функцій.
// Переконайся, що тип елемента, який повертається, точно відповідає типу елементів у масиві.
// Перевір, що TypeScript не дозволяє передати масив змішаних типів без відповідного типу.

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([1, 2, 3]); // 1
getFirstElement<string>(["a", "b", "c"]); // "a"
getFirstElement<boolean>([true, false, true]); // true

//
//
//
//
//
//
//
//
//
//
//
//
///////////////////////////
//

// type test = { a: number; b: number; c: number };

// console.log(
//   getFirstElement<test>([
//     { a: 1256, b: 2981, c: 336589 },
//     { a: 4, b: 5, c: 6 },
//     { a: 7, b: 8, c: 9 },
//     { a: 10, b: 11, c: 12 },
//   ])
// );
//////////////////////////
//

// type test = { a: number; b: string; c: boolean };

// console.log(
//   getFirstElement<test>([
//     { a: 1256, b: "Te-aSte=ro#iD", c: false },
//     // { a: 4, b: 5, c: 6 },
//     // { a: 7, b: 8, c: 9 },
//     // { a: 10, b: 11, c: 12 },
//   ])
// );

// console.log(
//   getFirstElement<boolean | number | string>([198457457, "two", true])
// ); // працює  :)
