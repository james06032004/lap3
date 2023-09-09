function flattenNestedArray(arr){
    const flattened=[];
    function flattenHelper(arr){
        for(let item of arr){
            if(Array.isArray(item)){
                flattenHelper(item);
            }
            else{
                flattened.push(item);
            }
        }
    }
    flattenHelper(arr);
    return flattened;
}
const nestedArray=[1,[2,3,[4,5]],6,[7]];
const flattenedArray=flattenNestedArray(nestedArray);
console.log("Flattened Array: ",flattenedArray);