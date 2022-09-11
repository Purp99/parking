const list = document.querySelector('.parking-list');
const btn = document.querySelector('.buttons');
const parking_name = document.querySelector('.parking-name');
const spots_available = document.querySelector('.spots-available');
const spots_header = document.querySelector('.spots-header');
const spots_header_str = "Number of available parking spots:";

async function getData(){
    const url = ``;
        
    const response = await fetch(url);
    const data = await response.json();

        
    if(data.media_type == "image"){
    }
   
     
} 

async function getListOfParking(){
    const url = `http://45.83.123.118:6001/Parking/GetListOfParking`;
        
    try{
        const response = await fetch(url, {mode: "no-cors"});
        const data = await response.json();

        
        parking_name.innerText = "xxxx";
        spots_available.innerText = "xxx";
        spots_header.innerText = spots_header_str;
    }catch{
        parking_name.innerText = "Some Problems :("
        spots_header.innerText = "111";
        spots_available.innerText = "2222";
    }
   

    
   
    
} 

async function checkAPI(){
    const url = `http://45.83.123.118:6001/Parking/HealthCheck`;
        
    const response = await fetch(url);
    const data = await response.json();

    // if (){
    //     parking_name.innerText = "Some Problems :("
    //     spots_header.innerText = "";
    //     spots_available.innerText = "";
    // }
   
     
}

document.getElementById('parkingList').innerHTML += "<option value = \"2PAC\">Tupac Amaru Shakur</option>"

// checkAPI();
getListOfParking();
list.addEventListener('change', getData);