/* Global Variables */
let baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&d0f695a615e6383109ba620fde3bcc1e&units=imperial';
const submit = document.getElementById('generate');
const zip = document.getElementById('zip');
const feeling = document.getElementById('feelings');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to perform action after click button 
document.getElementById('generate').addEventListener('click',performAction);

function performAction(e){
    e.preventDefault();
    const newZip = document.getElementById('zip').Value;
    const feelings = document.getElementById('feelings').value;
    console.log(data);
    //adding data to post request)
    postData('/add',{date:d, temp:data.list[0].main.temp, content:feelings})
    updateUI();
}

// Async function to get wep api data to the user
const getWeather = async (baseUrl,zip,Key)=>{
    const res = await fetch(baseUrl+zip+Key)
    try {
        const data = await res.json();
        console.log(data)
        return data;
    }
    // appropriately handle the error
    //catch error if their any found in this code
    catch(error) {
        console.log("error",error);
    }
}
// post data variable and its function 
/* Function to POST data */
const postData = async ( url = '', data = {})=>{
    console.log(data)
      const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

    try {
        let newData = await response.json();
        console.log(newData);
        return newData;
    }
    catch (error) {
        console.log('error', error);
    }
}
postData('/add')
// updataUI function to get project Data 

const updateUI = async() => {
    const request = await fetch('/all');
    try{
        const allData = await request.json();
        document.getElementById('data').innerHTML = `Data: ${allData.date}`;
        document.getElementById('temp').innerHTML = `Temprature: ${allData.temp}`;
        document.getElementById('content').innerHTML = `i feel: ${allData.content}`;
    
    }
    catch (error) {
        console.log('error', error);
    }
}
