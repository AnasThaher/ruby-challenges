
//  Fibonacci Using Daynamic Programming 
function fib(n, map){
    if( n<=1 ) return n;
    if(map[n]) return map[n];

    value = fib(n-1,map)+fib(n-2,map);
    map[n] = value;
    return value;
}


console.log(fib(10,{}));
console.log(fib(15,{}));
console.log(fib(7,{}));
console.log(fib(3,{}));
