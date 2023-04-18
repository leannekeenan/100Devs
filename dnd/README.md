<h1>Spell Vault X - The Great Tome</h1>

<p>
The Great Tome holds a database of spells used within the beloved tabletop game
Dungeons & Dragons. The tome returns information such as the range of the spell, 
its damage type and a simple description of the spells effects.  A user enters
a spell of their choice into the provided search bar and clicks 'search' to
execute a search.
</p>

<span>
Link to the project can be found here: <a href="https://spellvaultx-the-great-tome.netlify.app/">
https://spellvaultx-the-great-tome.netlify.app/</a>
</span>

<p align="center">
     <img src="https://cdna.artstation.com/p/assets/covers/images/016/818/064/large/bogomil-urukov-00.jpg?1553597886" alt="">
</p>

<h2>
How It's Made:
</h2>

<p>
Tech Used: HTML, CSS, JavaScript, API

HMTL holds a container which in turn holds an image used as the tome.  using
relative and absolute positioning the content of the DOM is placed atop the tome image to give 
the appearance of text in a book.

Using JavaScript, an API fetch was created to retrieve information from 
https://www.dnd5api.co/api/spells page and fill the DOM elements with data such
as damage type, spell range, and spell description.  Since this API site uses 
hyphens in their object keys, a '.split()' and a '.join()' were used to allow the user to complete 
a search using spaces instead of hyphens.  Images sourced from Google.
</p>

<h2>
Lessons Learned:
</h2>

<ol>
   <li>Use of static & relative positioning</li>
   <li>Use of .split() and .join() methods</li>
   <li>API integration</li>
   <li>HTML tables</li>
</ol>

<h2>
Examples:
</h2>

<p>
Projects I have worked on similar to this include:
</p>

<ul>
   <li> 
	Pokemon Pokedex: <a href="https://github.com/leannekeenan/100Devs/blob/main/Pokemon%20App%20v1.0/README.md">https://github.com/leannekeenan/spellvaultx-the-great-tome</a>
   </li>
</ul>
