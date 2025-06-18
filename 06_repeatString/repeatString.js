const repeatString = function(str, num) {
    let tmp = "";
    if(num < 0){
        return "ERROR";
    }
    for(let i = 0; i < num; i++){
        tmp += str;
    }
    return tmp;
};

// Do not edit below this line
module.exports = repeatString;
