function IsVowel(str)
{
    document.writeln("In The Given String : ",str,"<br>");
    for(var i = 0; i < str.length; i++)
    {
        switch(str[i])
        {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                return true;
        }
    }
    return false;
}
var incoming = ["My",,"Name","Is","Muhammad","Bilal",]

incoming.forEach(str =>{
    if(IsVowel(str))
        document.writeln("There was a Vowels Found<br>");
    else
        document.writeln("There were No Vowels Found<br>");
});