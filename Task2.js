function Area (width,height)
{
    if(!isNaN(width) && !isNaN(height))
    {
        var A = width * height;
        document.writeln("The Area of Rectangle is : ", A , "<br>");
    }
    else
        document.writeln("Wrong Values givin<br>");
}
width_User = parseFloat(prompt("Enter width of the Recatngle"))
height_User = parseFloat(prompt("Enter height of the Recatngle"))

document.writeln("Execution with User Input : <br>")//Function Calling with passing Arguments as Variables
Area(width_User,height_User);

document.writeln("Execution with Constant Input : <br>")// Function Calling with Passign of Arguments as Values
Area(6,9);

document.writeln("Error Case:<br>");
Area('a',9);
