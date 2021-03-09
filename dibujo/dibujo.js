var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xi;
var colorcito = "#FAA"

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

for(l = 0; l < lineas; l++)
{
  xi = 10 * l;
  yf = 10 * (l + 1);
  dibujarLinea(colorcito, xi, 0, 300, yf);
  console.log("Linea " + l);
}

dibujarLinea(colorcito, 299,1,1,1);
dibujarLinea(colorcito, 299,299,299,1);