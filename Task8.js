function getDOB(dob)
{
    var db = new Date(dob);
    var curr = new Date();
    var Year_Diff = curr.getFullYear()-db.getFullYear();
    var Month_Diff = curr.getMonth()-db.getMonth();
    var Date_diff = curr.getDate()-db.getDate();
    document.writeln("As Per Your Date of Birth : ", dob," Your Are <br>");  
    if(Month_Diff < 0)
    {
        Year_Diff -=1;
        Month_Diff += 11;
    }
    if(Date_diff < 0)
    {
        if(Month_Diff != 2 && Month_Diff % 2 != 0 ) //for months with 31 Days i.e Jan[0],Mar[1],May[4]
        {
            Date_diff += 31;
            Month_Diff -=1;
        }
        else if (Month_Diff != 2 && Month_Diff % 2 == 0 ) //for months with 30 Days i.e April[3],June[5],Aug[6]
        {
            Date_diff = Date_diff + 30;
            Month_Diff = Month_Diff - 1;
        }
        else if(Month_Diff == 3 && Month_Diff % 2 == 0 ) //for Month of Feb[1]
        {
            Date_diff += 28;
            Month_Diff -=1;
        }  
    }
    document.writeln("Years : ", Year_Diff,"<br>");
    document.writeln("Months : ", Month_Diff,"<br>");
    document.writeln("Days : ", Date_diff,"<br>");
}
getDOB('Sep 01,1979'); //40 - 03 - 11
getDOB('Aug 09,1986'); //33 - 04 - 03 
getDOB('Feb 13,2000'); //19 - 09 - 29
