document.querySelector('.search').addEventListener('click', getFetch)

function getFetch() {
     //defines the user input
    const choice = document.querySelector('input').value;
    
     
    //fetches from API site content related to user input
    const url = `https://www.dnd5eapi.co/api/spells/${choice}`

    //within the getFetch function, include a fetch request to the url
    fetch(url)
    .then(result => result.json())
    .then(data => {
            console.log(data);
        })
}
 //the fetch then returns the API site content results as a json file

 //with the .json files, an arrow function called data is run to preforms teh following actions:
        //console loggin all of the API data to the dev tools console