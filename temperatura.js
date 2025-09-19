function convertirTemperatura() {
  const resultadosDiv = document.getElementById("resultados");
  const entrada = document.getElementById("temperatura").value;
  const temperaturaCelsius = parseFloat(entrada);

  if (isNaN(temperaturaCelsius)) {
    resultadosDiv.innerHTML = "<p>Error: Por favor, ingresa un número válido.</p>";
    return;
  }

  const temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
  const temperaturaKelvin = temperaturaCelsius + 273.15;

  resultadosDiv.innerHTML = `
    <p>Temperatura ingresada: <strong>${temperaturaCelsius} °C</strong></p>
    <p>Grados Fahrenheit: <strong>${temperaturaFahrenheit.toFixed(1)} °F</strong></p>
    <p>Grados Kelvin: <strong>${temperaturaKelvin.toFixed(2)} K</strong></p>
  `;
}

