var d = new Date('October 12,2019');
function AddDays(a)
{
    var add = a + d.getDate();
    var month = d.getMonth();
    if(add >31 && (month != 0 && month % 2 == 0 )) //for months with 31 Days i.e Jan[0],Mar[1],May[4]
    {
        d.setMonth(month+1)
        add -= 31;
        if(add > 28)
            AddDays(add);
        else
            d.setDate(add);
    }
    else if (add >30 && (month != 0 && month % 2 == 0 )) //for months with 30 Days i.e April[3],June[5],Aug[6]
    {
        d.setMonth(month+1)
        add -= 30;
        if(add > 28)
            AddDays(add);
        else
            d.setDate(add);
    }
    else if(add >28 && (month == 0 && month % 2 == 0 )) //for Month of Feb[1]
    {
        d.setMonth(month+1)
        add -= 28;
        if(add > 30)
            AddDays(add);
        else
            d.setDate(add);
    }
    else
        d.setDate(add);
}
function AddWeek(a)
{
    document.writeln("Current Date is : ", d ,"<br>")
    document.writeln("After ", a ," Weeks <br>");
    var Days_To_Add = a * 7;
    AddDays(Days_To_Add);
    document.writeln("Final Date is : ", d ,"<br>")
}
AddWeek(31);