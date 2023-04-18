document.querySelector('.search').addEventListener('click', getFetch)

function getFetch() {
    //defines the user input
    const choice = document.querySelector('input').value.split(' ').join('-')
    if(choice === "") {
        alert("Please enter a spell to search")
    }
    
     
    //fetches from API site content related to user input
    const spells = `https://www.dnd5eapi.co/api/spells/${choice}`

    //within the getFetch function, include a fetch request to the url
    fetch(spells)
     //the fetch then returns the API site content results as a json file
    .then(result => result.json())
     //with the .json files, an arrow function called data is run to preforms the following actions: 
    .then(data => {
            console.log(data);//logging all objects data to console
            document.querySelector('#obj_name').innerText = `Spell Name: ${data.name}`;//returns object name to DOM object "obj_name"
            document.querySelector('#obj_duration').innerText = `Casting Time: ${data.duration}`;//returns spell duration of obj to DOM object 'obj_duration'
            
            let damage = "";
            if(damage !== "") {
                document.querySelector('#obj_damage').innerText = `Damage Type: ${data.damage.damage_type.name}`;//returns spell damage type to DOM object "obj_damage_type"
            }
                     
            document.querySelector('#obj_attack_type').innerText = `Attack Type: ${data.damage.damage_type.name}`;//returns spell attack type to DOM object "obj_attack_type"
            document.querySelector('#obj_attack_range').innerText = `Spell Range: ${data.range}`;//returns spell range to DOM object "obj_attack_range"
            document.querySelector('#obj_description').innerText = data.desc[0];//returns object description to DOM object "obj_description"
            
        });


}


