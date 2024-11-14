// 引用 a.js 的 export default
// import 變數 from 來源
// from 'a.js'   ---> 引用 a.js 套件
// from './a.js' ---> 引用 a.js 檔案
import a from './a.js'

// 一次引用所有的export,取名為b
import * as b from './b.js';
// 只引用指定的變數
// 可以用 as 重新命名
import {b1, b2, b3, b4 as bb4} from './b.js';


console.log('index - a.a1: ' + a.a1);
console.log('index - a.add: ' + a.add());
//  測試修改 a.js 變數
a.a1 = 100 ;
a.a2 = 100 ;
a.a3 = 100 ;
a.a4.push(300);

console.log('index - a.a1: ' + a.a1);
console.log('index - a.a2: ' + a.a2);
console.log('index - a.a3: ' + a.a3);
console.log('index - a.a4: ' + a.a4);
a.log();
// a.noexport();

a.test(500);
console.log('index - a.a3: ' + a.a3);
a.log();


console.log('index - b.b3: ' + b.b3);
// 具名引用的值無法修改,不管來源是const 還是let都一樣
// b.b3 = 100 
// b3 = 100
b.b4.push(300);
bb4.push(400);
console.log('index - b.b4: ' + b.b4);
console.log('index - bb4: ' + bb4);
b.log();

