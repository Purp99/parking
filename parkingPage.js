const spots_available = document.querySelector('.spot-count');
const parking_name = document.querySelector('.name');
const img = document.querySelector('.img');


async function getData(id){
    const url = `http://45.83.123.118:6001/Parking/GetDataAboutAvailableSpots/${id}`;
    
    try{
        const response = await fetch(url);
        const data = await response.json();

        
        img.setAttribute('src', "data:image/png;base64," + data.image);

        spots_available.innerText = "Available spots count: " + data.availableSpotsCount;
        parking_name.innerText = data.parkingName;
    }catch{
    } 
    
} 

function onLoad(){
    var paramValue = window.location.href.split("?")[1].split("=")[1];
    getData(paramValue);
}