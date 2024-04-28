//calcular areo y perimetro de algunas figuras geometricas 
//triangulo b * h/2, a+b+c 
//cuadrado 4*a , a2
//rectangulo 2*(a+b), b*a
// circulo  2*π*r^2 , π*r^2


// trangulo area y perimetro//

var base;
var altura;

base=prompt("ingrese la base", " ");
var num=parseInt(base);

altura=prompt("ingrese la altura", " ");
var num1=parseInt(altura);
var area= base*altura/2;
document.write ("el area del triangulo es:" + area+"<br>");


//perimetro
var lado1;
var lado2
var lado3

lado1=prompt("ingrese la lado1", " ");
var numero=parseInt(lado1);

lado2=prompt("ingrese la lado2", " ");
var numero1=parseInt(lado2);

lado3=prompt("ingrese la lado3", " ");
var numero2=parseInt(lado3);

var suma= lado1+lado2+lado3;
document.write ("el perimetro es: ,"+suma+ "<br>" );


//cuadrado area y perimetro

var lado;

lado=prompt("ingrese la valor del lado", " ");
var medida=parseInt(lado);

var multi=lado*4;
document.write ("el perímetro del cuadrado es:" +multi+ "<br>");


lado=prompt("ingrese el valor del lado ", " ");
var medida2=parseInt(lado);

var multi=lado*lado;
document.write ("el area del cuadrado es: "+multi+ "<br>")



//rectangulo area y perímetro

var b;
var a;

b=prompt("ingrese la base", " ");
var dato=parseInt(b);

a=prompt("ingrese la altura", " ");
var dato1=parseInt(a);

var perimetro= 2*(a+b);
document.write ("el perimetro del rectangulo es: "+perimetro+ "<br>"); 

//area

b=prompt("ingrese la base", " ");
var dato2=parseInt(b);

a=prompt("ingrese la altura", " ");
var dato3=parseInt(a);

var area= a*b;
document.write ("el area del cuadrado esa."+area+ "<br>");


// area y perimetro del circulo

var pi= 3.1416
var Radio

Radio =prompt("ingrese el valr del radio");
var med=parseInt(Radio);
area = pi*(Radio^2);
document.write ("el area del circulo es:"+area);

// perimetro
var perimetro= 2*pi * Radio^2;
document.write ("el perimetro del circulo es:" + perimetro);















