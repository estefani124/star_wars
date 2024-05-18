const requestOptions = {
  method: "GET",
  redirect: "follow"
};

let boton = document.getElementById('buttons');
let films = document.getElementById('films');
let people= document.getElementById('people');
let boton1 = document.getElementById('buttons1');

boton.addEventListener('click', function() {
  fetch("https://swapi.dev/api/films/", requestOptions)
  .then((response) => response.json())
  .then((result) => showFilms(result))
  .catch((error) => console.error(error));


});



function showFilms(result) {
  result.results.forEach(element => {

    films.innerHTML += `
      <div class="card" onclick="showDetail('${element.title}','${element.director}')">
      <div class="card-content">
        <p class="title">${element.title}</p>
        <span style="text-decoration:underline">Director</span>:${element.director}<br>
    </div>

    `;
  });
}

boton1.addEventListener('click' ,function() {
  fetch("https://swapi.dev/api/people/", requestOptions)
  .then((response) => response.json())
  .then((result) => showPeople(result))
  .catch((error) => console.error(error));
});

function showPeople(result) {
  result.results.forEach(element => {
    people.innerHTML += `
      <div class="card" onclick="showDetail('${element.name}','${element.height}')">
      <div class="card-content">
        <p class="title">${element.name}</p>
        <span style="text-decoration:underline">Height</span>:${element.height}<br>
    </div>

    `;
  });
}






function showDetail(title,director){
  Swal.fire({
    title: title,
    text:director,
    width: 600,
    padding: "3em",
    color: "black",
    background: "#1ABC9C",
     showConfirmButton:false,
    customClass:{
      popup:'card__detail'// clase personalizada para el popup
    },
    backdrop: `
      rgba(0,0,123,0.4)
      url("../assets/img/c.gif")
      left top
      no-repeat
    `
  });
}