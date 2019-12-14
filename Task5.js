var input = parseInt(prompt("Enter Amount to Withdraw",0));
document.writeln("<h1>Amount to Withdraw : " , input , "</h1><br>")
print(Withdraw(input));
function Withdraw(income)
{
    var change = [0,0,0];
    while(income >= 100){
        income -=100;
        change[0]++;
    }
    while(income >= 50){
        income -=50;
        change[1]++;
    }
    while(income >= 10){
        income -=10;
        change[2]++;
    }
    if(income < 10){    
        change[3] = income;
    }
    return change;
}
function print(change)
{
    var word = ["Hundred","Fifty","Ten"];
    var withdrable = true;
    for(var i = 0; i < 3; i++)
    {
        if(change[i] > 0)
        {
            if(withdrable)
                document.writeln("<h2>You will have ");
            document.writeln(change[i] , " Notes of ", word[i]);
            withdrable = false;
        }
    }
    document.writeln("</h2>");
    if(change[3] > 0)
        document.writeln("<br><h3>You Cannot have the remaining ", change[3] , " as it is to low to be withdrawn</h3>");
}