<h1>Pokedex</h1>

<p>
Pokedex is a digital encyclopedia that catalogues information about all the different species of Pokemon. 
It contains details such as their type, abilities, and moves and is well know in the cannon as an essential
tool to be the very best pokemon triner in the world!
</p>

<span>
Link to the project can be found here: <a href="https://classicpokedex.netlify.app/">
https://classicpokedex.netlify.app/</a>
</span>

<p align="center">
     <img src="https://wallpaperaccess.com/full/418495.jpg" alt="">
</p>

<h2>
How It's Made:
</h2>

<p>
Tech Used: HTML, CSS, JavaScript, API

The concept behind this project is to have the user enter a name of a pokémon into the provided search bar.
Once entered, the naem will ue used as a stand in variable within the API fetch request, returning the data 
pretaining to that specific pokemon.  The pokedex will also have empty HTML objects within its search window
 that will be populated with related pokemon data including the type, id number moves and abilities related to the 
searched for pokemon.

To add detail to the pokedex, the background will change color based on the pokemon type.  This was done by
 using a if elas/if statement to loop through he multiple different types of pokemon and assign a specific 
color to the background of the pokedex.

The pokedex data can be cleared at the end of the users search and the pokedex will remove all data
previously searched for allowing the user to start the search again.

</p>

<h2>
Lessons Learned:
</h2>

<p>
The pokedex taught me to use a users data input as a variable within a fetch URL in order to retrieve 
specific information about a unique object within an API.  It also introduced the .appendChild() method,
allowing my to retroactively add HTML elements to the DOM based on a function rather than wasting
HTML space with empty objects and filling the innerText at a later point. This makes the code
more readable and keeps the markup less crowded, making a far more DRY application in the process.
</p>

<h2>
Examples:
</h2>

<p>
Projects I have worked on similar to this include:
</p>

<ul>
   <li> 
	<a href="https://github.com/leannekeenan/100Devs/tree/main/Pokemon%20App%20v1.0">Spell Vault X - the Great Tome</a>
   </li>
</ul>
