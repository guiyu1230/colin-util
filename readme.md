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

// recursionTree 分析树结构用法
const tree = [
    {
        id: 0,
        title: '节点0',
        children: [
            { 
                id: 1, 
                title: '节点1',
                children: [
                    {
                        id: 3,
                        title: '节点3'
                    },
                    {
                        id: 4,
                        title: '节点4'
                    }
                ]
            },
            { 
                id: 2, 
                title: '节点2'
            }
        ]
    }
]

const allId = {};   // allId会拿到节点及其所有上下关系的详细信息
recursionTree(tree, { step: 1, allId, pIdList: [] })
console.log(allId)
// {
//  0: {
//     childList: (4) [1, 3, 4, 2]
//     item: {id: 0, title: '节点0', children: Array(2)}
//     pId: undefined
//     pIdList: []
//     step: 1
//  },
//  1: {
//     childList: (2) [3, 4]
//     item: {id: 1, title: '节点1', children: Array(2)}
//     pId: 0
//     pIdList: [0]
//     step: 2
//   },
//   ...
// }

// arrayToTree  将带有引用关系的数组转换为树结构
const array = [
    {id: 0},
    {id: 1, pid: 0},
    {id: 2, pid: 0},
    {id: 3, pid: 1},
    {id: 4, pid: 1},
    {id: 5, pid: 2}
]

const newTree =  arrayToTree(array);
console.log(newTree);
// [
//     {
//         id: 0,
//         children: [
//             { 
//                 id: 1, 
//                 pid: 0,
//                 children: [
//                     { id: 3, pid: 1},
//                     { id: 4, pid: 1},
//                 ]
//             },
//             { 
//                 id: 2, 
//                 pid: 0,
//                 children: [
//                     { id: 5, pid: 2}
//                 ]
//             }
//         ]
//     }
// ]

// MyPromise用法
function fn() {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      if(Math.random() > 0.5) {
        resolve(1)
      } else {
        reject(2)
      }
    }, 1000)
  })
}
fn().then(
  res => {
    console.log('成功', res) // res 1
  },
  err => {
    console.log('失败', err) // err 2
  })
```