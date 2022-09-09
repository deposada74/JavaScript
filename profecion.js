const profeciones = (posicion)=>{
    let pro = ['Interprete', 'Cantante', 'Piloto', 'Programador'];
    return pro[posicion];
}
const texto = () => {if(profeciones > 3)'Esta profecion no se encuentra actualmente'; texto = 1;}

// console.log(profeciones(2));
module.exports = {profeciones, texto};