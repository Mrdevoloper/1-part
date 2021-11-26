var numberList = [2,3,4,5,6,7,8,9,10,11,12,13];
var result = false;
function isSumHasInArray(array, number) {
    for (var i = 0; i < array.length; i++){
        for(var j = i++; j < array.length; j++){
            if (array[i] + array[j] === number) {
                result = true;
            }
           
        }
    }
    return result;
};

console.log(isSumHasInArray(numberList,  1));