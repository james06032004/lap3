function fibonacciRecursive(n){
    if(n<=0){
        return [];
    }
    else if(n===1){
        return [0];
    }
    else if(n===2){
        return[0,1];
    }
    else{
        const fibSequence=fibonacciRecursive(n-1);
        fibSequence.push(fibSequence[n-2]+fibSequence[n-3]);
        return fibSequence;
    }
}
const num=10;
const fibSequence=fibonacciRecursive(num);
console.log(`Fibonacci sequence of length ${num}: ${fibSequence.join(',')}`);