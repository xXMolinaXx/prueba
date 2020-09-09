//documento js
alert('hola mundo curso de practica');/*alert detienen el flujo de ejecucion*/
document.write('hola papu');
var variable;//asi se crean variables
variable=1;
variable='string';
document.write(variable);//en esta funcion puedo escribir html es un string
alert(variable);
//Number()  esta funcion transforma string a numero
var nombre=prompt('introduze tu nombre');//prompt hace lectura de datos
var apellido=prompt('ingresa apellido');
document.write('----->   '+nombre+' '+apellido);

var arreglo=[1,'asd',4,123];
alert(arreglo[0]+arreglo[1]+arreglo[2]);
var arreglo=new Array(123,1233,'asdas');
/*arreglo.push('hola') agrega al arreglo un elemento al final 
arreglo.unshift('adsasd') agrega al final
arreglo.pop() elimina al final del arreglo
arreglo.shift elimina al inicio del arreglo
*/

var objeto=document.getElementById('boton1');//guardamos el objeto en esta variable
objeto.style.width='200px';//asi modificamos el css del objeto
function sumar(a,b)
{
    document.write('la fecha es      ');
    document.write(a+b);
}

function mostrar()
{
    alert('asdas');
}
sumar(10,2);

var cadena_prueba='abc esta es una cadena';
document.write(cadena_prueba[2]);