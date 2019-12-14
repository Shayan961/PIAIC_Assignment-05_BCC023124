var Pals = ["mom","dad","madam",'tibit'];
var Non_Pals = ["my","name","is","bilal"];
for(var i = 0; i < 4; i++)
{
    document.writeln("Word '" , Pals[i], (Palindrome(Pals[i]))? "' Is A Palindrome<br>" : "' Is NOT A Palindrome<br>");
    document.writeln("Word '" , Non_Pals[i],(Palindrome(Non_Pals[i]))? "' Is A Palindrome<br>" : "' Is NOT A Palindrome<br>");
}
function Palindrome(Input)
{
    var Input3 = "";
    var Input2 = "";
    Input3 = Input;
    for(var j = Input3.length-1; j >= 0; j--)
        Input2 += Input[j];
    if(Input === Input2)
        return true;
    else
        return false;
}