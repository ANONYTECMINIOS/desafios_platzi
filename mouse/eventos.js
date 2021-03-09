var clics = {
  LEFT: 0,
  RIGHT: 2
};

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var estado;
var x = 150;
var y = 150;
cuadrito.addEventListener("mousedown", dibujarMouseInicio);
cuadrito.addEventListener("mouseup", dibujarMouseFinal);
cuadrito.addEventListener("mousemove", dibujarMouseEnMovimiento);

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarMouseInicio(evento)
{
  switch(evento.button)
  {
    case clics.LEFT:
      estado = 1;
    break;
    case clics.RIGHT:
      alert("Usa el clic izquierdo.");
    break;
    
  }
}

function dibujarMouseEnMovimiento(evento)
{
  if (estado == 1)
  {
    var xf = evento.layerX;
    var yf = evento.layerY;
    var colorcito = "#AFF";
    dibujarLinea(colorcito, x, y, xf, yf, papel);
    x = evento.layerX;
    y = evento.layerY;
  }
}

function dibujarMouseFinal(evento)
{
  estado = 0;
}