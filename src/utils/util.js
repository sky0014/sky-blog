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