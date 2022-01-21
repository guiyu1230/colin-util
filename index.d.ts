/**
 * 防抖函数
 * @param fn 回调函数
 * @param wait 间隔时间
 * @returns {void}
 */
 export declare const debounce: (fn: any, wait: number) => (...args: any[]) => void;
 /**
  * 节流函数
  * @param fn 回调函数
  * @param wait 间隔时间
  * @returns {void}
  */
 export declare const throttle: (fn: any, wait: number) => (...args: any[]) => void;
 /**
  * 深拷贝
  * @param obj 拷贝对象
  * @returns {obj}
  */
 export declare const deepClone: (obj: object) => {};
