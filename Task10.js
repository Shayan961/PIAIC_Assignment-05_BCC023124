function count_Vowels(str)
{
    document.writeln("Number of Vowels in : ");
    var vowel = 0;
    var Simple_Letters = 0;
    str.toLowerCase();
    [...str.toLowerCase()].forEach(chars =>{
        (chars == 'a' || chars == 'e' ||chars == 'i' ||chars == 'o' ||chars == 'u' ) ? vowel++:Simple_Letters++;
    });
    document.writeln(str,"<br>Vowels : ", vowel,"<br>");
    document.writeln("Simple Letters : ", Simple_Letters,"<br>");

}
count_Vowels("MY");
count_Vowels("Name");
count_Vowels("Is");
count_Vowels("Muhammad");
count_Vowels("Bilal");