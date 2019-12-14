//Codeing through Arrow Function
var factorial = (num) => {
    var i = num-1;
    while( i >= 1)
    {
        num *= i;
        i--;
    }
    return num;
}
for(var i = 1; i <= 10; i++)
    document.writeln("Factorial of ",i," is : ", factorial(i),"<br>");