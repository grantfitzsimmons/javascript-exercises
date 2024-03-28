const sumAll = function(min,max) {
    let sum = 0;
    if (min < max) {
        for (min; min <= max; min++) {
            sum += min; 
            console.log(min);
        }
        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
