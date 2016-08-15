

describe('Checking getDuplicates function',
function(){
it('throws Error when contains non-integer',function(){
expect(getDuplicates(["string" , 1])).toThrowError(TypeError, "This is not an Integer");
});
it('throws Error when not an array',function(){
expect(getDuplicates("string")).toThrowError(TypeError, "This is not an Array");
});
it('sees an empty array as a valid input',function(){
var emptyarr = [];
if(getDuplicates(emptyarr)) {
expect(sortedArr).toBe([]);
}
});
it('returns duplicates sorted in ascending order',function(){
if(getDuplicates([1 , 1 , 2 , 2 , 3 , 3 , 3])) {
expect(sortedArr).toBe([1 , 2 , 3]);
}
});
it('returns empty array if no duplicates',function(){
if(getDuplicates([1 , 2 , 3 , 4])) {
expect(sortedArr).toBe([]);
}
});
it('returns duplicates sorted in ascending order even if array is not in order',function(){
if(getDuplicates([1 , 2  , 3 , 1 , 2 , 3 , 3 , 2])) {
expect(sortedArr).toBe([1 , 2 , 3]);
}
});
});
