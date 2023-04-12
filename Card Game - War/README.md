<h1>WAR! - The Card Game</h1>

<p>
Are you looking for a fun and easy-to-play card game that can be enjoyed by all ages? his classic game has been a 
favorite for generations. But don't let the simplicity of the game fool you - there's still plenty of tension and 
excitement as each round is played!

Click the draw button each round to play a card and see if you or the computer has the higher hand!
</p>

<span>
Link to the project can be found here: <a href="https://lumenentertainment-war.netlify.app">
https://lumenentertainment-war.netlify.app
</a>
</span>

<p align="center">
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gGPGiecpG0-7PrLd5qyxizj_fBsFxQaJw&usqp=CAU" 
alt="War Card Game">
</p>

<h2>
How It's Made:
</h2>

<p>
Tech Used: HTML, CSS, JavaScript, API


The project uses semantic HTML encapsulating player cards and h2 identifying markers as singular objects 
that in turn were set to be flex items, allowing them to be placed center screen and directly across from 
each other.  the draw button was placed directly center for ease of access and to reduce distraction from
the card being played, reducing attention redirection during game play. The game was also provided a "how 
to play' tutorial alert to provide simple game instructions for first time players.

The game play function allows for the game to begin with a blank deckId object which gets a random deck entered 
into it at the start of each new game.  this is accomplished with an API fetch request that searches the 
'deckofcardsapi' website for a random shuffle of a 52 card deck.   

A getFetch function is then created and used to hold another fetch request from a url that now holds the 
deckId of teh random deck that was fetched in teh first request.  From that data, two values are declared to 
represent the value of the played card for both the user and the computer. The value is then used to
pull the matching card image, which is seen during game play. 

Within the getFetch function following the fetch request, a if / else / if statement is used to determine
the game winner using the aforementioned card values. In the event of an error, a catch clause has been included
 with each fetch function in case of a missing value or incomplete fetch request.

Lastly, a card value function was implemented to assist in determining value outcome for face value cards.
each card was given a value between 11 - 14 to represent Jacks through Aces.  This ensures that if a player draws 
a face card, it will not be disreguarded by the previous if / else if statement, and can have a 
numerical for winner determination and text value for the fetch request reference.


</p>

<h2>
Lessons Learned:
</h2>

<p>
This project was a unique example of how fetch requests can be used.  Previous projects used fetch requests
directly on the content of the API, but this project took it a step further and added another fetch
request based on the data pulled from another fetch request.  Seeing the interpolation of the data between
the fetch requests shows their extreme power within a program, illustrating how they can be much more 
complex than just being used to copy/paste of data from another source to your site.  
</p>

