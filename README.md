# 🌤️ Weather Dashboard

[Live Demo](https://weatherapp-beta-dusky.vercel.app/)
A modern weather application providing real-time weather updates with a sleek user interface. Built with HTML, CSS, and JavaScript.

## ✨ Features

- 🔍 Search weather by city name
- 📍 Auto-detect location using geolocation
- 🌡️ Temperature unit toggle (°C/°F)
- 📊 Detailed weather information including:
  - Temperature
  - Humidity
  - Wind Speed
  - Atmospheric Pressure
  - Visibility
- 📱 Fully responsive design
- 🎨 Dynamic background effects based on temperature
- ⚡ Real-time weather updates
- 🛠️ Error handling for invalid locations

## 🚀 Getting Started

### Prerequisites
- Web browser with JavaScript enabled
- OpenWeatherMap API key

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/NitinBharti007/WeatherApp.git
2. Navigate to project directory:
   ```bash
   cd WeatherApp
3. Open index.html in your browser or run a local server.

## Configuration
- Get your free API key from OpenWeatherMap
- Replace YOUR_API_KEY in script.js with your actual API key

## Usage
- Open index.html in a web browser
- Enter a city name in the search field or click "Use Current Location"
- View detailed weather information
- Toggle temperature units using the °C/°F button

## 🛠️ Technologies Used
- **Frontend**
  - HTML5
  - CSS3 (Flexbox, Grid, Animations)
  - JavaScript (ES6+)
- **APIs**
  - OpenWeatherMap API
  - Browser Geolocation API
- **Design**
  - Glassmorphism UI
  - Responsive Layout
  - Dynamic Gradients

## 🧠 Development Approach
- **Implementation Strategy**
- Component-Based Structure:
   - Created modular components for search, weather display, and stats
   - Separated concerns with clear HTML structure and CSS classes
- Progressive Enhancement:
  - Basic functionality works without JavaScript
  - Enhanced features added with JavaScript
  - Graceful degradation for older browsers
- Performance Optimization:
  - Minimized API calls with caching
  - Used CSS animations instead of JavaScript for smoother effects
  - Lazy loading of weather icons

## Challenges Faced & Solutions
- **Challenge**: Dynamic Background Adaptation
- **Solution**: Implemented temperature-based gradient calculation using HSL color values and CSS variables

- **Challenge**: Responsive Layout for Various Screen Sizes
- **Solution**: Used CSS Grid with media queries and relative units (em, rem) for fluid scaling

- **Challenge**: API Rate Limiting
- **Solution**: Implemented client-side caching using localStorage to reduce API calls

- **Challenge**: Geolocation Permission Handling
- **Solution**: Added user-friendly prompts and fallback to manual city search

- **Challenge**: Unit Conversion Accuracy
- **Solution**: Implemented precise conversion formulas with proper rounding

- **Challenge**: Error Handling for Invalid Cities
- **Solution**: Created comprehensive error states with user-friendly messages
 
## 📄 License
Distributed under the MIT License. See LICENSE for more information.
