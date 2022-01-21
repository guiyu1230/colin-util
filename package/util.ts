/**
 * 防抖函数
 * @param fn 回调函数
 * @param wait 间隔时间
 * @returns {void}
 */
export const debounce = (fn: any, wait: number) => {
    let timer = null;
    return function (...args) {        
        if(timer) {
            clearInterval(timer)
        }
        timer = setTimeout(() => {
            fn.call(this, args);
            clearInterval(timer);
            timer = null;
        }, wait)
    }   
}

/**
 * 节流函数
 * @param fn 回调函数
 * @param wait 间隔时间
 * @returns {void}
 */
export const throttle = (fn: any, wait: number) => {
    let pre = 0;
    return function (...args) {
        let now = Date.now()
        if(now - pre >= wait) {
            fn.apply(this, args);
            pre = now;
        }
    }
}

/**
 * 深拷贝
 * @param obj 拷贝对象
 * @returns {obj}
 */
export const deepClone = (obj: object) => {
    function isObject(o) {
        return (typeof o === 'object' || typeof o === 'function' || o !== null)
    }
    if(!isObject(obj)) {
        throw new Error('非对象');
    }
    const newObj = Array.isArray(obj) ? [...obj] : {...obj};
    Reflect.ownKeys(newObj).forEach(key => {
        newObj[key] = isObject(obj[key]) ? deepClone(newObj[key]) : newObj[key];
    })
    return newObj;
}