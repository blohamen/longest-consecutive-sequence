module.exports = function longestConsecutiveLength(array) {
 if(!array.length) return 0;
 if(array.length  === 1) return 1;
array.sort(function(a,b){
return a-b;
});
var result = 0;
var length= 0;
for(var i = 0; i<array.length - 1; i++)
{
    if(array[i+1] - array[i] === 1)
    {
        length++;
        result = Math.max(result, length);
    }
    else{
        length = 1;
    }
}
return result;
}
