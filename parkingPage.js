const central_section = document.querySelector('.central-section');
const spots_available = document.querySelector('.spots-available');
const spots_header = document.querySelector('.spots-header');
const parking_name = document.querySelector('.parking-name');
const spots_header_str = "Number of available parking spots:";


async function getData(id){
    const url = `http://45.83.123.118:6001/Parking/GetDataAboutAvailableSpots/${id}`;
    
    try{
        const response = await fetch(url);
        const data = await response.json();

        //var value = window.atob(data.image);

        document.getElementById('img').setAttribute('src', "data:image/png;base64," + data.image);

        spots_available.innerText = data.availableSpotsCount;
        spots_header.innerText = spots_header_str;
        parking_name.innerText = data.parkingName;
    }catch{
        parking_name.innerText = "Some Problems :(";
    } 
    
} 

function onLoad(){
    var paramValue = window.location.href.split("?")[1].split("=")[1];
    getData(paramValue);
}