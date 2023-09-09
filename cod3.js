function isPalindrome(str){
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    const length = cleanedStr.length;
    for(let i=0;i<length/2;i++){
        if(cleanedStr[i]!==cleanedStr[length-1-i]){
            return false;
        }
    }
    return true;
}
const inputString = "A man, a plan, a canal, Panama";
const isPalindromic = isPalindrome(inputString);
console.log(isPalindromic)