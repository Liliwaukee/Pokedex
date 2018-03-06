$('.modal').modal();

const pokemonGallery = document.getElementById('pokemon-gallery');

  fetch('https://pokeapi.co/api/v2/pokedex/1') // Call the fetch function passing the url of the API as a parameter

  .then((resp) => resp.json()) // Transform the data into json

  .then(function(data) {

    const allPokemon = data.pokemon_entries;

    allPokemon.forEach( pokemon =>{
      const numberSpecies = pokemon.entry_number;
      const species = pokemon.pokemon_species;
      const eachPokemon = `

        <div class="card">
          <div class="card-image">
            <img src = "https://dummyimage.com/150x200/000000/fff"/>
          </div>
          <div class="card-content">
      	     <h6 class="pokemon-name">${species.name}</h6>
             <a id="link" href="${species.url}">+info</a>

             <a id="modalPokemon" class="waves-effect waves-light btn modal-trigger" href="#modal1">modal</a>
          </div>
        </div>

    	`;
    	const containerPokemon = document.createElement("div");
      containerPokemon.classList.add("col");
      containerPokemon.classList.add("m3");
    	containerPokemon.innerHTML = eachPokemon;
    	pokemonGallery.appendChild(containerPokemon);
      const url = species.url; //url de cada pokemon


    })

    })

  .catch(function() {
      // This is where you run code if the server returns any errors
      console.log("adios");
  });
