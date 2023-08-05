//LITERAL 1
document.write("<h1 style=\"background-color:black;color:white;\">Hola Mundo</h1>")

//LITERAL 2
var nombre="Juan";
var apellido="Perez";
var cedula="1714032719";
var ingresos=23678.43;
var gastos=10000;
var declarado=true;
const periodo=2021;

//LITERAL 3
var datosCompletos=nombre + apellido;
console.log(datosCompletos)

//LITERAL 4
var baseImponible = ingresos-gastos;
console.log(baseImponible)

//LITERAL 5
var nombre2="Andrea";
var nombre3='Andrea';

var num1=10000;
var num2=-34.6;

var bool1=true;
var bool2=false;

var array1=['Leer','Nadar','Escribir'];

var nombre3="Luis";
var edad=34;
var ciudad="Quito"
document.write("Nombre: " + nombre3 + "<br>Edad: " + edad + "<br>Ciudad: " + ciudad)

//LITERAL 6
var ingresos=25000;
var gastos=6000;
var baseImponible=ingresos-gastos;
var impuesto=0;
var impuestoFraccionBasica=0;
var porcentajeExcedente=0;
var excedente=0;
if (baseImponible>17854 && baseImponible<=21442)
{
impuestoFraccionBasica=511;
excedente=baseImponible-17854;
porcentajeExcedente=excedente*0.12;
}
impuesto=impuestoFraccionBasica+porcentajeExcedente;
console.log('Usted debe cancelar por Impuesto a la Renta '+impuesto)
document.write("<h3>Su impuesto a la renta es </h3>"+impuesto)

//LITERAL 7
let impuestoFraccionBasica2=[0,0,154,511,941,4156,8440,13798,22366];
console.log(impuestoFraccionBasica2)

//LITERAL 8
for(let i=0; i<impuestoFraccionBasica2.length;i++){
    console.log(impuestoFraccionBasica2[i])
}

//LITERAL 9
function saludo()
{
console.log("Hola ")
}
saludo();

//LITERAL 10
function saludo(persona)
{
console.log("Hola "+ persona)
}
saludo('Ana');
