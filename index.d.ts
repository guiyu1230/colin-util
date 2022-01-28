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
/**
 * 清除图片周围空白区域
 * @param {string} url - 图片地址或base64
 * @param {number} [padding=0] - 内边距
 * @return {Promise<string>} base64 - 裁剪后的图片字符串
 */
 export declare const CropImgEdge: (url: string, padding?: number) => Promise<unknown>;