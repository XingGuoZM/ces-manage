function deepClone(obj) {
    // Handle the 3 simple types, and null or undefined or function
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }
    // Handle Array or Object
    if (obj instanceof Array || obj instanceof Object) {
        let copy = (obj instanceof Array)?[]:{};
        for (let attr in obj) {
            copy[attr] = deepClone(obj[attr])
        }
        return copy
    }
    throw new Error("Unable to clone obj! Its type isn't supported.")
}
export  {deepClone}