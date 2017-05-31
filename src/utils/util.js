import fecha from 'fecha';

/**
 * 将传统回调方法转换为Promise方法 
 */
export function toPromise(func) {
    return (...args) => {
        return new Promise((resolve, reject) => {
            const cb = (err, result) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            }
            func(...args, cb);
        });
    }
}

/**
 * 格式化输出日期
 * @param {Date} date 
 * @param {string} format 默认格式：YYYY-MM-DD hh:mm:ss
 */
export function formatDate(date, format = 'YYYY-MM-DD hh:mm:ss') {
    return fecha.format(date, format);
}