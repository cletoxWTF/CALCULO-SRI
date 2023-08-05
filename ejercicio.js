var ingresos = window.prompt("Ingrese la cantidad de ingresos: ");
var gastos = window.prompt("Ingrese la cantidad de gastos deducibles: ");

var baseImponible = ingresos-gastos;

var fraccionBasica=0;
var excedentePor=0;
var impuestoFraccionBasica=0;
if(baseImponible>=0&&baseImponible<11212){
    fraccionBasica=0;
    excedentePor=0;
    impuestoFraccionBasica=0;
}else if(baseImponible>=11212&&baseImponible<14285){
    fraccionBasica=11212;
    excedentePor=5;
    impuestoFraccionBasica=0;
}else if(baseImponible>=14285&&baseImponible<17854){
    fraccionBasica=14285;
    excedentePor=10;
    impuestoFraccionBasica=154;
}else if(baseImponible>=17854&&baseImponible<21442){
    fraccionBasica=17854;
    excedentePor=12;
    impuestoFraccionBasica=511;
}else if(baseImponible>=21442&&baseImponible<42874){
    fraccionBasica=21442;
    excedentePor=15;
    impuestoFraccionBasica=941;
}else if(baseImponible>=42874&&baseImponible<64297){
    fraccionBasica=42874;
    excedentePor=20;
    impuestoFraccionBasica=4156;
}else if(baseImponible>=64297&&baseImponible<85729){
    fraccionBasica=64297;
    excedentePor=25;
    impuestoFraccionBasica=8440;
}else if(baseImponible>=85729&&baseImponible<114288){
    fraccionBasica=85729;
    excedentePor=30;
    impuestoFraccionBasica=13798;
}else if(baseImponible>=114288){
    fraccionBasica=114288;
    excedentePor=35;
    impuestoFraccionBasica=22366;
}

var excedente = baseImponible-fraccionBasica;
var porexcedente = excedente*excedentePor/100;
var ImpuestoRenta = porexcedente+impuestoFraccionBasica;
document.write("PRACTICA 1 <br>");
console.log("Sus ingresos son: "+ingresos);
console.log("Sus gastos son: "+gastos);
console.log("Base Imponible: "+baseImponible);
console.log("Usted debe cancelar por impuesto a la renta "+ImpuestoRenta);
document.write("Su impuesto a la renta es: " + ImpuestoRenta);