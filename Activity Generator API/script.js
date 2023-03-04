document.querySelector('button').addEventListener('click', showActivity);
function showActivity() {
    fetch("https://www.boredapi.com/api/activity")

    .then(res => res.json())//parse response as JSON
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.activity
        document.querySelector('h3').innerText = data.type
    })
    .catch(err => {
    console.log(`error ${err}`)
    });
    
}
