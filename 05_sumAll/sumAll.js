const sumAll = function(min,max) {
    let sum = 0;
    if (!Number.isInteger(min) || !Number.isInteger(max) || min < 0 || max < 0) {
        return "ERROR"
    }
    if (min < max) {
        for (min; min <= max; min++) {
            sum += min; 
        }
        return sum;
    }
    else {
        for (max; max <= min; max++) {
            sum += max; 
        }
        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
