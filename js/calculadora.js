/*https://www.w3schools.com/howto/howto_js_rangeslider.asp*/

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var outputArboles = document.getElementById("arboles");
var outputAnual = document.getElementById("anual");
output.innerHTML = slider.value;
outputArboles.innerHTML = ((slider.value)/200).toFixed(0);
outputAnual.innerHTML = ((slider.value)/200*12).toFixed(0);
// Display the default slider value


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  outputArboles.innerHTML = ((this.value)/200).toFixed(0);
  outputAnual.innerHTML = ((this.value)/200*12).toFixed(0);
}
