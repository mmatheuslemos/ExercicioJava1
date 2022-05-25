//Exercício 1 - JAVA script
//Somar dois valores
/*function multiplicar(a,b){
      return a*b;
}
var hi = multiplicar(40,2);
console.log(hi);

//Dividir dois valores
function dividir(a,c){
    return a/c;
}
var hi = dividir(20,3);
console.log(hi);

//maior número
function maiornum (a,b,c,d){
    return Math.max(a,b,c,d)
}
var hi = maiornum(10,50,8,80);
console.log(hi);

//maior número
function maiornum (a,b,c,d){
    return Math.max(a,b,c,d)
}
var hi = maiornum(10,50,8,80);
console.log(hi);

//menor número
function menornum (a,b,c){
    return Math.min(a,b,c)
}
var hi = menornum(10,50,30);
console.log(hi);

//função área de um círculo
function areacirc (d){
    return d*(Math.PI)/4  //diâmetro
}
var hi = areacirc(2);
console.log(hi);

//função volume de um prisma
function volumeprisma(a,b,h){
    return a*b*h  //diâmetro
}
var hi = volumeprisma(10,10,1);
console.log(hi);

//função volume de um prisma
function volumeprisma(a,b,h){
    return a*b*h  //diâmetro
}
var hi = volumeprisma(10,10,1);
console.log(hi);

//defini se o número é par ou impar
function pegarnumeroimpar(a){
    if(a%2 == 0){
        return "número par"
    }else{
        return "número impar"
    }
}
var hi = pegarnumeroimpar(55);
console.log(hi);
*/

// Imprimir o valor da área e do volume de uma esfera.
/*function imprimirareavolume(raio){
    var area = raio*raio*Math.PI*4; //formula da área da esfera.
    area = area.toFixed(2); // no máximo duas casas decimais.
    var volume = raio*raio*raio*Math.PI*(4/3); //formula do volume da esfera.
    volume = volume.toFixed(2) // no máximo duas casas decimais
    return "A área e o volume da esfera é, respectivamente " + area +"cm² " 
    +volume+ "cm³";
}
console.log(imprimirareavolume(10)); */

//Resolvendo equação do segundo grau
/*function equacaosegundograu(a,b,c){
    var delta = b*b -4*a*c;   // ax^2 + b*x +c.
    var raizdelta = Math.sqrt(delta);
    if(delta<0){
        return "equação não tem solução";
    }else{
        var x1 = (-b + raizdelta)/(2*a);
        
        var x2 = (-b - raizdelta)/(2*a);
        x1 = x1.toFixed(2)
        x2 = x2.toFixed(2)
        return "x1 é " + x1 + "x2 é " + x2;
    }
}
console.log(equacaosegundograu(2,2,-1));*/

//Soma de matrizes de matrizes
/*const matriz1 = [1, 2, 3, 4];
const matriz2 = [1, 2, 3, 4];
let matrizsoma = [12, 0, 2, 0 ];

for (var i = 0; i < matrizsoma.length; i++) {
    matrizsoma[i] = matriz1[i]+matriz2[i]
}
console.log(matrizsoma);*/

//Cálculo da variação linear de uma viga
/*var temperaturainicial = 20; //°C
var temperaturafinal = 30; //°C
var comprimentoinicial = 300 // centímetros
var coeficientedila = 10**-5 //coeficiente de dilatação.
var variacao = 0;
variacao = (temperaturafinal-temperaturainicial)*comprimentoinicial*coeficientedila;
console.log(variacao +' centímetros');*/

