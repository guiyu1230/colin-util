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

/**
 * 清除图片周围空白区域
 * @param {string} url - 图片地址或base64
 * @param {number} [padding=0] - 内边距
 * @return {Promise<string>} base64 - 裁剪后的图片字符串
 */
export const CropImgEdge = (url: string, padding = 0) => {
    return new Promise((resolve, reject) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const image = new Image();
        image.onload = imgLoad;
        image.src = url;
        image.crossOrigin = 'Anonymous';

        function imgLoad() {
            canvas.width = image.width;
            canvas.height = image.height;

            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

            const { data, width, height } = imageData;

            // 裁剪需要的起点和终点, 初始值为画布左上和右下点交换设置极限值
            let startX = width, startY = height;
            let endX = 0, endY = 0;

            /**
             * col为列, row为行, 两层循环构造每一个网格,
             * 遍历所有网格的像素, 如果有色彩则设置剪裁的起点和终点
             */
            for (let col = 0; col < width; col++) {
                for (let row = 0; row < height; row++) {
                    // 网络索引
                    const pxStartIndex = (row * width + col) * 4;

                    // 网格的实际像素RGBA
                    const pxData = {
                        r: data[pxStartIndex],
                        g: data[pxStartIndex + 1],
                        b: data[pxStartIndex + 2],
                        a: data[pxStartIndex + 3]
                    }

                    // 存在色彩：不透明
                    const colorExist = pxData.a !== 0;

                    /**
                     * 如果当前像素有色彩
                     * startX坐标取当前col和starX的最小值
                     * endX坐标取当前col和startX的最大值
                     * startY坐标取当前row和startY最小值
                     * endY坐标取当前row和endY的最大值
                     */
                    if(colorExist) {
                        startX = Math.min(col, startX);
                        endX = Math.max(col, startX);
                        startY = Math.min(row, startY);
                        endY = Math.max(row, endY);
                    }
                }
            }

            // 右下坐标需要扩展1px,才能完整的截取到图像
            endX += 1;
            endY += 1;

            // 加上padding
            startX -= padding;
            startY -= padding;
            endX += padding;
            endY += padding;

            // 根据计算的起点终点进行裁剪
            const cropCanvas = document.createElement("canvas");
            const cropCtx = cropCanvas.getContext("2d");
            cropCanvas.width = endX - startX;
            cropCanvas.height = endY - startY;
            cropCtx.drawImage(
                image,
                startX,
                startY,
                cropCanvas.width,
                cropCanvas.height,
                0,
                0,
                cropCanvas.width,
                cropCanvas.height
            )

            // resolve裁剪后的图像字符串
            resolve(cropCanvas.toDataURL());
        }
    })
}