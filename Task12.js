function Guess()
{
    var chance = 2;
    var ans = Math.floor(Math.random()*100) + 1;
    document.writeln("Ans : ", ans,'<br>');
    var user = [parseInt(document.getElementById("value_1")),parseInt(document.getElementById("value_2")),parseInt(document.getElementById("value_3"))];
    while(chance >= 0){
        if(user[chance] == ans)
        {
            document.writeln("Bravo!, You Guessed The Correct Number!,<br>");
            break;
        }
        else
        {
            chance--;
            document.writeln("Oops, Your Guess was Wrong!<br>You Still Have ",chance," Chances Remaining<br>")            
        }
    }
}
var Input = 'y'
while(Input != 'n' || Input != 'no'){
//    var Input = prompt("Do You Want to Play? (Y/N)");
    Input = Input.toLowerCase();
    if(Input == 'y' || Input == "yes")
    {
        document.writeln("Welcome To Our Guessing Game<br>");
        Guess();
        Input = 'no';
    }
    else
    {
        Input = 'no';
        document.writeln("Thankyou For Playing Our Guessing Game<br>");
        break;
    }
}