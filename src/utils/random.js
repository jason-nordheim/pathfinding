/**
 * return a random integer between the provided values 
 * @param min {number}
 * @param max {number}
 */
function randInteger(min, max) {
    if (typeof (min) !== 'number' || typeof (max) !== 'number' || min < 0 || max < 0)
        throw 'min and max must be positive numbers'
    if (min > max)
        throw 'min value must be less than max value'

    // round to be safe 
    const rMin = Math.floor(min), rMax = Math.floor(max)
    const diff = rMax - rMin

    // return the min value plus a random amount 
    // between rMin and rMax 
    return rMin + Math.floor(diff * Math.random())
}

exports.randInteger = randInteger