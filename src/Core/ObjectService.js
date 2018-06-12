export class ObjectService {
  /**
   * Deep copy the given object
   * @param {*} obj
   * @return {*}
   */
  static deepCopy (obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj
    }

    const copy = Array.isArray(obj) ? [] : {}

    Object.keys(obj).forEach(key => {
      copy[key] = ObjectService.deepCopy(obj[key])
    })

    return copy
  }

  static isObject (obj) {
    if (typeof obj !== 'object' || (typeof obj === 'object' && obj === null)) {
      return false
    }

    return obj.constructor && obj.constructor.prototype && obj.constructor.prototype.isPrototypeOf && !Array.isArray(obj)
  }
}
