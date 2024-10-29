/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    return new Promise((res, rej) => {
        if (functions.length === 0) {
            resolve([]);
            return;
        }

        const arr = new Array(functions.length)
        let resolvedCount = 0

        functions.forEach((func, index) => {
            func()
                .then(val => {
                    arr[index] = val
                    resolvedCount++

                    if (resolvedCount === functions.length) {
                        res(arr)
                    }

                })
                .catch(e => {
                    rej(e)
                })
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
