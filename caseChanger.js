//一个非空对象
const isNotNullObj = function (obj) {
    return obj instanceof Object;
}
/**
 * 转换规则
 */
class ChangeRuler {
    /**
     * 
     * @param {RegExp|String} regexp 
     * @param {Function} replacer 
     */
    constructor(regexp, replacer) {
        this.regexp = regexp;
        this.replacer = replacer;
    }
}
/**
 * 所有的替换规则
 */
const rulers = {
    camal2kebab: new ChangeRuler(/[-_].?/g, function (val) {
        return val.toUpperCase().replace(/[-_]/, "");
    })
}
/**
 * 键转换
 * @param {String} key 
 * @param {ChangeRuler} op
 */
const exchangeKey = function (key, op) {
    if (!(op instanceof ChangeRuler)) throw Error("op 错误！必须为ChangeRuler对象");
    if (typeof key !== "string") throw Error("key 必须为string");
    return key.replace(op["regexp"], op["replacer"]);
}
/**下换线转换为驼峰命
 * @param {any} obj
 */
const camal2kebab = function (obj) {
    if (!isNotNullObj(obj)) return obj;
    let newObj = obj.constructor();
    for (key in obj) {
        let val = obj[key];
        let newKey = exchangeKey(key, rulers.camal2kebab);
        newObj[newKey] = val;
        if (isNotNullObj(newObj[newKey])) {
            newObj[newKey] = camal2kebab(newObj[newKey]);
        }
    }
    return newObj;
}
module.exports = {
    camal2kebab
}