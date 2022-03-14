

const API = "https://jsonplaceholder.typicode.com/users";



let imageArray =[];

const getUserData = (api) => {
    return fetch(api)
        .then((response) => response.json())                    //promesa 
        .then((json) => {
            fillForm(json);
        })                                                      // si se cumple la promesa
        .catch((error) => {
            console.log("Error", error);
        });
};


const fillForm = (data) => {
    let html = "";    
    data.forEach((user) => {                    
        html += '<div class="card">';       
        html += '<div class="card-data">';
        html += `<h2 class="user-name">${user.name}</h2>`;
        html += `<p class="user-email"><span>Email: </span>${user.email}</p>`;
        html += `<p class="user-city"><span>City: </span>${user.address.city}</p>`;      
        html += '</div>';
        html += '</div>';       
    });
    document.getElementById("user-data").innerHTML = html;
};


getUserData(API);

