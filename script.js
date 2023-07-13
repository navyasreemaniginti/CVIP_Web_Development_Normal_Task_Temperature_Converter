document.getElementById("temperatureForm").addEventListener("submit", function(event) {
  event.preventDefault();
  convertTemperature();
});

function convertTemperature() {
  var celsius = parseFloat(document.getElementById("celsiusInput").value);
  var kelvin = parseFloat(document.getElementById("kelvinInput").value);
  var fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
  
  if (!isNaN(celsius)) {
    document.getElementById("kelvinInput").value = celsius + 273.15;
    document.getElementById("fahrenheitInput").value = (celsius * 9/5) + 32;
  } else if (!isNaN(kelvin)) {
    document.getElementById("celsiusInput").value = kelvin - 273.15;
    document.getElementById("fahrenheitInput").value = (kelvin - 273.15) * 9/5 + 32;
  } else if (!isNaN(fahrenheit)) {
    document.getElementById("celsiusInput").value = (fahrenheit - 32) * 5/9;
    document.getElementById("kelvinInput").value = (fahrenheit - 32) * 5/9 + 273.15;
  }
  
  document.getElementById("resultContainer").innerHTML = "Conversion successful!";
}

function clearFields() {
  document.getElementById("celsiusInput").value = "";
  document.getElementById("kelvinInput").value = "";
  document.getElementById("fahrenheitInput").value = "";
  document.getElementById("resultContainer").innerHTML = "";
}

