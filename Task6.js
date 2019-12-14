//a Nameless Arrow Fucntion
( () => {
var mirror = [1,2,3,4];
document.writeln("Initial Array : ");
document.writeln(mirror,"<br>");

j = mirror.length-1;
for(; j >= 0; j--){
    mirror.push(mirror[j]);
}

document.writeln("<br>Final Array : ");
document.writeln(mirror);
})();