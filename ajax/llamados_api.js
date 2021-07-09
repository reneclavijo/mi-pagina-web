
function buscarPokemon(){

    nombre_pokemon = $("#txt-busqueda").val()

    fetch("https://pokeapi.co/api/v2/pokemon/" + nombre_pokemon)
    .then(respuesta => respuesta.json())
    .then(datos => {

    console.log(datos)

        nueva_etiqueta = `
        <div class="card" style="width: 18rem;">
            <img src="${datos.sprites.front_default}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${datos.name}</h5>
                <p class="card-text">${datos.abilities[0].ability.name}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
        $("#contenedor-pokemones").after(nueva_etiqueta)
        //document.getElementById("btn-buscar").innerHTML += nueva_etiqueta
    })
    .catch(error => console.log(error))

}