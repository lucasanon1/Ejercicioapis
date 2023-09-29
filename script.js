document.addEventListener("DOMContentLoaded", () => {
    const pokemonInfo = document.getElementById("pokemon-info");
    const pokemonInput = document.getElementById("pokemon-input");
    const buscarButton = document.getElementById("buscar-button");
    const nombrePokemonSpan = document.getElementById("nombre-pokemon");
    const idPokemonSpan = document.getElementById("id-pokemon");
    const tiposPokemonSpan = document.getElementById("tipos-pokemon");
    const imagenPokemon = document.getElementById("imagen-pokemon");

    function obtenerInformacionPokemon(nombrePokemon) {
        const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon.toLowerCase()}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("No se pudo obtener la información del Pokémon.");
                }
                return response.json();
            })
            .then(data => {
               
                nombrePokemonSpan.textContent = data.name;
                idPokemonSpan.textContent = data.id;
                tiposPokemonSpan.textContent = data.types.map(type => type.type.name).join(", ");

               
                const imagenUrl = data.sprites.front_default;

                
                imagenPokemon.src = imagenUrl;
                imagenPokemon.alt = `Imagen de ${data.name}`;
            })
            .catch(error => {
                console.error(error);
                pokemonInfo.textContent = "Error al obtener la información del Pokémon.";
            });
    }

    buscarButton.addEventListener("click", () => {
        const nombrePokemon = pokemonInput.value;
        obtenerInformacionPokemon(nombrePokemon);
    });
});
