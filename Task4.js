function calcCircumference(radius)
{
    return (2 * Math.PI * radius);
}
function calcArea(radius)
{
    return (Math.PI * Math.pow(radius,2));
}
Input = parseFloat(prompt("Enter Radius :",0,"<br>"));
document.writeln("Radius : ", Input,"<br>");
document.writeln("CircumFerence : ", calcCircumference(Input),"<br>");
document.writeln("Area : ", calcArea(Input));