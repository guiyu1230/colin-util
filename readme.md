## 工具库函数开发

工具包分别已压缩或者分包. 可支持全引入和按需引入两种方式

```js
import { debounce, throttle } from "colin-util";   //全引入
import deepClone from "colin-util/dist";           //按需引入

// debounce用法
debounce(() => {
    console.log('fn 防抖执行了')
}, 1000)

// throttle用法
function handle(){
    console.log('节流函数降低调用频率');
}
window.addEventListener("mousemove",throttle(handle, 1000));

// deepClone用法
const liLei = {
    name: 'lilei',
    age: 28,
    habits: ['coding', 'hiking', 'running']
}
// 深拷贝:实现一
const liLeiStr = JSON.stringify(liLei)
const liLeiCopy = JSON.parse(liLeiStr)
console.log(liLeiStr === liLeiCopy) // false

// 深拷贝: 实现二
const liLeiCopy1 = deepClone(liLei);
console.log(liLeiStr === liLeiCopy1) // false

```