//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.subclasses)
        //console.log(data.subclasses[0].name)
        //console.log(data.subclasses[1].name)

        //loop through sub classes
        data.subclasses.forEach(obj => {
            console.log(obj.name)

            //create li
            const li = document.createElement('li');
            
            //add text to li
            li.textContent = obj.name
            li.style.listStyle = "none";
            //append li to ul
            document.querySelector('ul').appendChild(li)

        })//logs all objects
        
               
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

document.querySelector('button').addEventListener('click', refresh)
 function refresh(data) {


 }