function convertir() {

  let cm = parseFloat(document.getElementById("cm").value);

  let mm = cm * 10;
  let metros = cm / 100;
  let km = cm / 100000;
  let pulgadas = cm / 2.54;

  document.getElementById("mm").innerHTML =
    "Milimetros: " + mm.toFixed(2) + " mm";

  document.getElementById("metros").innerHTML =
    "Metros: " + metros.toFixed(2) + " m";

  document.getElementById("km").innerHTML =
    "Kilometros: " + km.toFixed(5) + " km";

  document.getElementById("pulgadas").innerHTML =
    "Pulgadas: " + pulgadas.toFixed(2) + " in";

}