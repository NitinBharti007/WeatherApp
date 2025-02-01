const API_KEY = "6099ceaecefd0bb4e965970fb19ad954";

const elements = {
  loader: document.getElementById("loader"),
  weatherCard: document.getElementById("weatherCard"),
  errorMessage: document.getElementById("errorMessage"),
  cityInput: document.getElementById("cityInput"),
  searchButton: document.getElementById("searchButton"),
  geoButton: document.getElementById("geoButton"),
  unitToggle: document.getElementById("unitToggle"),
  cityName: document.getElementById("cityName"),
  tempValue: document.getElementById("tempValue"),
  weatherIcon: document.getElementById("weatherIcon"),
  weatherCondition: document.getElementById("weatherCondition"),
  humidityValue: document.getElementById("humidityValue"),
  windSpeed: document.getElementById("windSpeed"),
};

let currentWeather = null;
let isCelsius = true;

function setLoading(state) {
  elements.loader.style.display = state ? "block" : "none";
  elements.searchButton.disabled = state;
}

function updateBackground(temp) {
  const hue = temp > 25 ? 20 : 200;
  const saturation = 70;
  const lightness = Math.min(40, 100 - Math.abs(temp - 20) * 2);
  document.body.style.background = `linear-gradient(135deg, hsl(${hue}, ${saturation}%, ${lightness}%) 0%, hsl(${
    hue + 40
  }, ${saturation}%, ${lightness - 10}%) 100%)`;
}

async function fetchWeather(query) {
  try {
    setLoading(true);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) throw new Error("City not found");
    return await response.json();
  } finally {
    setLoading(false);
  }
}

function updateWeatherUI(data) {
  elements.weatherCard.classList.add("active");
  updateBackground(data.main.temp);

  elements.cityName.textContent = `${data.name}, ${data.sys.country}`;
  elements.tempValue.textContent = Math.round(data.main.temp);
  elements.humidityValue.textContent = `${data.main.humidity}%`;
  elements.windSpeed.textContent = `${Math.round(data.wind.speed * 3.6)} km/h`;
  elements.weatherCondition.textContent = data.weather[0].main;

  elements.weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  elements.errorMessage.style.display = "none";

  currentWeather = data;
}

function handleUnitToggle() {
  isCelsius = !isCelsius;
  elements.unitToggle.textContent = isCelsius ? "°C" : "°F";
  const temp = isCelsius
    ? Math.round(currentWeather.main.temp)
    : Math.round((currentWeather.main.temp * 9) / 5 + 32);
  elements.tempValue.textContent = temp;
  updateBackground(
    isCelsius ? currentWeather.main.temp : ((temp - 32) * 5) / 9
  );
}

function showError() {
  elements.weatherCard.classList.remove("active");
  elements.errorMessage.style.display = "block";
}

async function handleGeolocation() {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      try {
        setLoading(true);
        const { latitude, longitude } = position.coords;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        updateWeatherUI(data);
      } catch {
        showError();
      } finally {
        setLoading(false);
      }
    },
    () => alert("Unable to retrieve your location")
  );
}

// Event Listeners
elements.searchButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const city = elements.cityInput.value.trim();
  if (!city) return;

  try {
    const data = await fetchWeather(city);
    updateWeatherUI(data);
  } catch {
    showError();
  }
});

elements.unitToggle.addEventListener("click", handleUnitToggle);
elements.geoButton.addEventListener("click", handleGeolocation);
