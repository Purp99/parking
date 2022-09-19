const list = document.querySelector('.parking-list');
const btn = document.querySelector('.buttons');
const parking_name = document.querySelector('.parking-name');
const spots_available = document.querySelector('.spots-available');
const spots_header = document.querySelector('.spots-header');
const spots_header_str = "Number of available parking spots:";

async function getData(){
    const url = `http://45.83.123.118:6001/Parking/GetDataAboutAvailableSpots/${list.value}`;
        
    const response = await fetch(url);
    const data = await response.json();
   
    spots_available.innerText = data.availableSpotsCount;
} 

async function getListOfParking(){
    const url = `http://45.83.123.118:6001/Parking/GetListOfParking`;
    
     try{
        const response = await fetch(url);
        const data = await response.json();
        var str = "";

        data.forEach(element => {
            str+=`<option value = "${element.id}">${element.name}</option>`;
        });

        list.innerHTML += str;
        spots_available.innerText = data[0].availableSpotsCount;
        spots_header.innerText = spots_header_str;
    }catch{
         spots_available.innerText = "Some Problems :(";
    }
} 

function nextPage(){
    document.location = "parkingPage.html?id=" + list.value;
}

getListOfParking();

list.addEventListener('change', getData);
btn.addEventListener('onclick', nextPage)