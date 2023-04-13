/*Page Elements*/

//user_search [input]
//search button
//pokemon_data
    //pokemon_name
    //pokemon_id
    //pokemon_abilities
    //pokemon_moves


/*Concept*/
//1. user enters pokemon name in input
//2. on click event listener added to search button to run data retrevial function
//3. data retrevial function will "fetch" the following data from the provided URL
    //i. pokemon name that matches the user input
    //ii. pokemon type
    //iii. pokemon id number
    //iv. pokemon abilities list
    //v. pokemon moves list

    //event listener for the search button
    document.querySelector("button").addEventListener('click', getFetch);//will run getFetch function when clicked
    

    function getFetch() {
        const user_search = document.querySelector("input").value; //the pokemon name entered into the input object 
        const url = ` https://pokeapi.co/api/v2/pokemon/${user_search}`;//
        const errorMessage = "This is not a valid serch.  Please check the spelling of the Pokemon you are searching for and try again..";
        const abilities_title = "Abilities";
        const moves_title = "Moves";
        const window = document.querySelector('.window');

        
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                document.querySelector('.pokemon_image').src = data.sprites.front_shiny;
                document.querySelector('.pokemon_name').innerText = `name: ` + data.name;
                document.querySelector('.pokemon_id').innerText = `id: ` + data.id;
                document.querySelector('.pokemon_type').innerText = 'type: ' + data.types[0].type.name;
                document.querySelector('.window').style.border = "1px solid grey";
                document.querySelector('.window').style.backgroundColor = "#E1F7F7";
                document.querySelector('.window').style.borderRadius = "15px";
               

                data.abilities.forEach(ability => {
                    document.querySelector('.abilities').innerText = abilities_title;
                    console.log(ability.ability.name);
                    const li = document.createElement('li');//create li
                    li.textContent = ability.ability.name;//add text to li 
                    document.querySelector('.pokemon_abilities').appendChild(li);//append to ul
                });

                data.moves.forEach(move => {
                    document.querySelector('.moves').innerText = moves_title;
                    console.log(move.move.name);
                    const li = document.createElement('li');//create li
                    li.textContent = move.move.name;//add text to li
                    document.querySelector('.pokemon_moves').appendChild(li);//append to ul
                });

                if(data.types[0].type.name === "water") {
                    document.querySelector('.pokedex').style.backgroundColor = "#6890f0";
                }
                else if(data.types[0].type.name === "fire") {
                    document.querySelector('.pokedex').style.backgroundColor = "#f08030";
                }
                else if(data.types[0].type.name === "grass") {
                    document.querySelector('.pokedex').style.backgroundColor = "#78C850";
                }
                else if(data.types[0].type.name === "bug") {
                    document.querySelector('.pokedex').style.backgroundColor = "#A8b820";
                }
                else if(data.types[0].type.name === "electric") {
                    document.querySelector('.pokedex').style.backgroundColor = "#F8D030";
                }
                else if(data.types[0].type.name === "rock") {
                    document.querySelector('.pokedex').style.backgroundColor = "#b8A038";
                }
                else if(data.types[0].type.name === "poison") {
                    document.querySelector('.pokedex').style.backgroundColor = "#A040A0";
                }
                else if(data.types[0].type.name === "psychic") {
                    document.querySelector('.pokedex').style.backgroundColor = "#F85888";
                }
                else if(data.types[0].type.name === "ghost") {
                    document.querySelector('.pokedex').style.backgroundColor = "#705898";
                }
                else if(data.types[0].type.name === "normal") {
                    document.querySelector('.pokedex').style.backgroundColor = "#A8A878";
                }
                else if(data.types[0].type.name === "ice") {
                    document.querySelector('.pokedex').style.backgroundColor = "#98D6D6";
                }
                else if(data.types[0].type.name === "fighting") {
                    document.querySelector('.pokedex').style.backgroundColor = "#C03028";
                }
                else if(data.types[0].type.name === "ground") {
                    document.querySelector('.pokedex').style.backgroundColor = "#E0C068";
                }
                else if(data.types[0].type.name === "flying") {
                    document.querySelector('.pokedex').style.backgroundColor = "#A890F0";
                }
                else if(data.types[0].type.name === "dark") {
                    document.querySelector('.pokedex').style.backgroundColor = "#705848";
                }
                else if(data.types[0].type.name === "dragon") {
                    document.querySelector('.pokedex').style.backgroundColor = "#7038F8";
                }
                else if(data.types[0].type.name === "steel") {
                    document.querySelector('.pokedex').style.backgroundColor = "#FFFFFF";
                }
                else if(data.types[0].type.name === "fairy") {
                    document.querySelector('.pokedex').style.backgroundColor = "#F0B6BC";
                }

                
            })
            .catch(err => {
                alert(`${errorMessage}`);
            })
    }

    document.querySelector('.clear').addEventListener('click', clear);
    function clear() {
        document.querySelector('input').value = '';
        document.querySelector('.pokemon_image').src = 'assets\pokeball.png';
        document.querySelector('.pokemon_name').innerText = '';
        document.querySelector('.pokemon_id').innerText = '';
        document.querySelector('.pokemon_type').innerText = '';
        document.querySelector('.pokemon_abilities').innerText = '';
        document.querySelector('.pokemon_moves').innerText = '';
        document.querySelector('.pokedex').style.backgroundColor = "rgb(186, 72, 78)"
        
    }