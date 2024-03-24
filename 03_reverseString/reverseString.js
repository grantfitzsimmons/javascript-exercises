const reverseString = function(userString) {
    let userArray = userString.split("");
    userArray = userArray.reverse();
    return userArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
