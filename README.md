Weather App

Overview
This Weather App is built using Node.js, HTML, CSS, and the OpenWeatherMap API to display real-time weather information for a given location. The app uses Node.js to fetch weather data from the API and dynamically updates the webpage with temperature, location, and weather status.

Features
Displays current temperature, minimum, and maximum temperatures.
Shows location (city and country).
Displays an icon for the current weather condition (Sunny, Clouds, Rainy).
Updates the display dynamically with date and time.

Technologies Used
Node.js: Backend server to handle HTTP requests.
HTML5 & CSS3: Frontend for displaying the weather data.
JavaScript: Handles real-time updates like weather status icons and the current date and time.
OpenWeatherMap API: Provides the weather data.
Font Awesome: Icons for weather conditions.

Installation

Prerequisites
Node.js and npm installed on your machine.
OpenWeatherMap API Key.

Steps
1. Clone the repository to your local machine:
  git clone https://github.com/riyav910/weather-app.git
2. Navigate to the project folder:
  cd Weather App
3. Install dependencies:
  npm install
4. Update the OpenWeatherMap API key in index.js:
  const apiKey = '1b827c92f85d53cc63490a8d1f50b6e3';
5.. Run the application:
  node index.js
  Or with nodemon for automatic restarts:
  nodemon index.js
6. Open your browser and go to:
  http://localhost:8000

Project Structure
weather-app/
├── home.html        # Main HTML file for the weather display
├── index.js         # Node.js backend server
├── style.css        # CSS file for styling the webpage
├── package.json     # Project configuration and dependencies
└── README.md        # Project documentation

API Used
OpenWeatherMap API: Fetches real-time weather data.
