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



  https://farm1.staticflickr.com/2/1418878_1e92283336_m.jpg
  https://farm5.staticflickr.com/4610/39726650825_c161356d41.jpg
farm-id: 1
server-id: 2
photo-id: 1418878
secret: 1e92283336
size: m


{ "id": "39726650825", "owner": "136185422@N06", "secret": "c161356d41", "server": "4610", "farm": 5, "title": "Loarre", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
