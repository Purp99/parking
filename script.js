let parkings;
const container = document.querySelector('.container');



async function getListOfParking(){
    const url = `http://45.83.123.118:6001/Parking/GetListOfParking`;
    
     try{
        const response = await fetch(url);
        const data = await response.json();
        var str = "";

        data.forEach(element => {
            str+=`<div class="parking" id="${element.id}"><h1 class="name">${element.name}</h1><p class="spot-count">Available spots count: ${element.availableSpotsCount}</p></div>`;

        });

        container.innerHTML += str;

        parkings = document.querySelectorAll('.parking');
        for (var i = 0; i < parkings.length; i++) {
            parkings[i].addEventListener('click', nextPage, false);
            parkings[i].myParam = i;
        }
    }catch{

    }
} 

function nextPage(index){
    document.location = "parkingPage.html?id=" + parkings[index.currentTarget.myParam].id;
}

getListOfParking();