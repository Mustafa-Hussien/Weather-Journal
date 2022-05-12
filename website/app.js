/* Global Variables */
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&appid=46ff55eb47c0ac027779dcdff5dd1a67'

// Create async function 
const getWeatherData = async (url,zip, key) => {
    const res = await fetch(url+zip+key)

    try {
        const data = await res.json();
        console.log(data);
      }  catch(error) {
        // appropriately handle the error
        console.log("error", error);
      }
}

// Event listener for the generate button
document.getElementById('generate').addEventListener('click', (e) => {
    let zipCode = document.getElementById('zip').value;
    getWeatherData(baseURL, zipCode,apiKey)
})

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();