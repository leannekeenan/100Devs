fetch("https://official-joke-api.appspot.com/random_joke")

.then(res => res.json())//parse response as JSON
.then(data => {
    console.log(data)//message and status are the available methods
    //data = response from
    document.querySelector('h1').innerText = data.setup

    document.querySelector('button').addEventListener('click', returnPunchline);

    function returnPunchline() {
        document.querySelector('h2').innerText = data.punchline
    }
})
.catch(err => {
console.log(`error ${err}`)
});



