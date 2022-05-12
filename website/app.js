/* Global Variables */
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&appid=46ff55eb47c0ac027779dcdff5dd1a67&units=imperial'

// Create async function 
const getWeatherData = async (url,zip, key) => {
    const res = await fetch(url+zip+key)

    try {
        const data = await res.json();
        return data
      }  catch(error) {
        // appropriately handle the error
        console.log("error", error);
      }
}

// Event listener for the generate button
document.getElementById('generate').addEventListener('click', (e) => {
    let zipCode = document.getElementById('zip').value;
    let feeling = document.getElementById('feelings').value;

    getWeatherData(baseURL, zipCode,apiKey)
    .then(function(data){
      postData('/', {temp: data.main.temp, date: newDate, userResponse: feeling});
      updateUI()
    })
})

const postData = async ( url = '', data = {})=>{
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
   // Body data type must match "Content-Type" header        
    body: JSON.stringify(data), 
  });

    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    }
}

// // Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+ 1) +'.'+ d.getDate()+'.'+ d.getFullYear();

// Update UI

const updateUI = async () => {
  const res = await fetch('/all')
  try {
    const allData = await res.json()
    document.getElementById('date').innerHTML = newDate;
    document.getElementById('temp').innerHTML = Math.round(allData.temp)+ '° fahrenheit';
    document.getElementById('content').innerHTML = allData.userResponse;
    }  catch(error) {
      // appropriately handle the error
      console.log("error", error);
    }
}