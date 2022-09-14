// fetch('data.txt')// Se hace el llamado de donde se encuentra la informacion de la API
// .then(function (response) {
//     return response.text();
// }) // Tipo de informacion que se le esta pidiendo.
// .then(function (data) {
//     console.log(data);
// }) // Extrae los datos que se le solicitaron anteriormente.
// .catch(function (err) {console.log(`hemos tenido un error: ${err}`);}); // Si se produce el error manda un mensaje informando del error


// fetch('data.txt')
// .then((response)=>{return response.text();})
// .then((data)=>{console.log(data)})
// .catch((err)=>{console.log(`hemos tenido un error: ${err}`)});

// let url = 'data.txt';

// fetch(url)
// .then(response=>response.text())
// .then(data=>{
//     let info = document.getElementById('datos'); //Se captura el id 
//     info.innerHTML = data; //Muestra los datos en el div id HTML
// })
// .catch(err=>console.log(`hemos tenido un error: ${err.message()}`));

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch((err)=>{console.log(`hemos tenido un error: ${err}`)});

let url = 'datos.json';
fetch(url)
.then(res=>res.json())
.then(data=>{
let imp = document.getElementById('datos');
    // imp.innerHTML = data[0].Nombre + '<br> ' + data[0].Apellido + ' <br>' + data[0].Telefone + '<br> ' + data[0].Cedula + '<br>' +data[1].Nombre + '<br> ' + data[1].Apellido + ' <br>' + data[1].Telefone + '<br> ' + data[1].Cedula;
let message = '';
    for (let i = 0; i < data.length; i++) { 
        message = message + data[i].Nombre + '<br> ' + data[i].Cedula + '<br>'
        message += data[i].Telefone + '<br>'
    }
        imp.innerHTML = message;
})
.catch(error => console.log(`Hemos tenido un error ${error}`));
