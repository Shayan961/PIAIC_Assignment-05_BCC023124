function isWeekend(date)
{
    var d = new Date(date);
    if(d.getDay() == 0 || d.getDay() == 6)
        document.writeln("Yay!, its a weekend<br>");
    else
        document.writeln("There are still ",5 - d.getDay()," Days left in the weekend<br>");
}
isWeekend('Oct 12, 2019');
isWeekend('Oct 09, 2019');