const oradeaButton = document.querySelector('.oradea');
const bucharestButton = document.querySelector('.bucharest');
const timisoaraButton = document.querySelector('.timisoara');
const aradButton = document.querySelector('.arad');
const sibiuButton = document.querySelector('.sibiu');
const currentLocation = document.querySelector('.current-location');

function handleOradeaClick() {
  currentLocation.innerHTML = 'Oradea';
  displayCurrentWeather('Oradea');
}

function handleBucharestClick() {
  currentLocation.innerHTML = 'București';
  displayCurrentWeather('București');
}

function handleTimisoaraClick() {
  currentLocation.innerHTML = 'Timișoara';
  displayCurrentWeather('Timișoara');
}

function handleAradClick() {
  currentLocation.innerHTML = 'Arad';
  displayCurrentWeather('Arad');
}

function handleSibiuClick() {
  currentLocation.innerHTML = 'Sibiu';
  displayCurrentWeather('Sibiu');
}

oradeaButton.addEventListener('click', handleOradeaClick);
bucharestButton.addEventListener('click', handleBucharestClick);
timisoaraButton.addEventListener('click', handleTimisoaraClick);
aradButton.addEventListener('click', handleAradClick);
sibiuButton.addEventListener('click', handleSibiuClick);
