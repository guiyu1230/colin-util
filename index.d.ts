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
 /**
  * 遍历树状列表. 获取树状节点的具体信息
  * @param list 树结构列表
  * @param other 数据信息
  *     pId  父id
  *     step 当前层级
  *     allId  每个节点的具体信息
  *     allChildObj  每个节点以及对应所有的后代节点id集合
  *     pIdList  当前节点的包括父id及其以上的祖先id集合
  */
 export declare function recursionTree(list: any[], other: {
     pId?: string | null;
     step: number;
     allId: object;
     pIdList: any[];
 }): void;
 /**
  * 将有引用关系的列表转换为树结构
  * @param list 引用关系的系列表
  *  { id, pid }
  */
 export declare function arrayToTree(list: any[]): any[];
 /**
  * 手写promise.
  * 使用了发布订阅模式和状态模式两种
  * 状态模式管理 变量state
  * 发布订阅模式在then方法订阅. 在调用resolve和reject发布
  */
 export declare class MyPromise {
     [x: string]: any;
     constructor(executor: any);
     then(onFulfilled: any, onRejected: any): void;
 }
 