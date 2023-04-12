<h1>Activity Genie</h1>

<p>
Introducing "Activity Genie," the ultimate app for anyone who wants to add some excitement to their daily routine! With 
just a click of a button, Activity Genie generates a unique activity for you to try.
</p>

<span>
Link to the project can be found here: 
<a href="https://activitygenie.netlify.app/">
https://activitygenie.netlify.app/</a>
</span>

<p align="center">
     <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1138&q=80" alt="">
</p>

<h2>
How It's Made:
</h2>

<p>
Using an API provided by boredapi.com, a unique activity is populated into an empty h3 tag within the HTML, displaying a 
random activity to the user when the blue button on the page is clicked. Using the data from the API, the type of 
activity is fetched and used within an if/else statement to populate a corresponding image with the activity type 
presented to the user.  This is done using a .includes() method on an object named "activityType" to illustrate a 
different image based on the type of activity.
</p>

<h2>
Lessons Learned:
</h2>

<p>
This project ilustrates the use of if/else statements, API fetch requests, object method usage, and semantic HTML. 
</p>
