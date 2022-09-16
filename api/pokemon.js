let btn = document.getElementById('pokebtn');
btn.addEventListener('click', (e)=>{
    let url = 'https://pokeapi.co/api/v2/pokemon/'+ random(1,100);
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let tr = document.getElementById('poke');
        tr.innerHTML+=`<tr><td><img src='${data.sprites.front_default}'></td> 
        <td>Este pokemon es un ${data.species.name}</td></tr>`;
         
    })
    .catch(error =>  console.log(error));
});

function random(min, max) { return Math.round(Math.random() * (max - min) + min);}
