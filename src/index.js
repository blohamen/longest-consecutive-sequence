module.exports = function longestConsecutiveLength(array) {
 if(!array.length) return 0;
 if(array.length  === 1) return 1;
array.sort(function(a,b){
return a-b;
});
var result = 0;
var length = 1;
for(var i = 0; i<array.length - 1; i++)
{  
    if(array[i+1] === array[i]) continue; 
    if(array[i+1] - 1 === array[i])
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
