# StarFox Squadron
A StarFox Themed, Rock Paper Scissors game created by Andrew O'Dwyer

![Image showing screenshots on different size screens](documentation/images/am-I-responsive.png)

## Project goals
To make a game based on the popular Rock, paper, scissors game. The concept around the game was to build the rock, paper, scissors game into a StarFox themed character selection game. I wanted the game to have multilayer of interest. A character selection page, where the player can choose between a number of characters. The characters information would be displayed beside them giving the player more insight into their chosen character. Those chosen characters would then be brought onto the following Rock, Paper, Scissors game area. The game should feel nostalgic for older players and fun and quick and easy to play for younger players.

## User Stories

- They want a game that is easy to navigate, from home/info section to game section and back again.
- A quick unterstanding of the concept of the game.
- The user want a natural flow in the game from intro to character select and the main game.
- They want to be able to go back and choose another pilot when they have completed the rock, paper, scissors game.
- They want to see their score, a visual reference id they won or lost and a conclusion to the game, ie, first to 5 wins.

### Site Owner Goals
- The owner wants to make sure the game isn't too complicated.
- A game that feel competitive so it will be shared and talked about
- A design that is visually appealing, that reflect the style of the origional StarFox game.


### Target Audience 
The target audience for this Rock Paper Scissors, Starfox themed game would be primarly be people with interest in starFox. Starfox Fans: This game would appeal to fans of the Starfox franchise, particularly those who enjoy the characters and their characteristics. They would likely be interested in any new game featuring their favourite characters. Fox, Falco, Wolf, Peppy and Slippy
Others might be:
- Casual Gamers: The simple gameplay mechanics of Rock Paper Scissors combined with the game idea of playing rock, paper, scissors to choose who takes command of the mission, could attract casual gamers looking for a quick and fun experience without a steep learning curve.
- Families: The easy to navigate design means it would be accessible to people of all ages. A fun activity to enjoy if you had a few minutes to spare.
-Nostalgia Seekers: People who have fond memories of playing older Starfox games might be drawn to this new iteration, especially if it incorporates elements that remind them of the classic titles.
- Designers: This is a very visually appealing design. The layout, colour, typography and UX of this game would appeal to creative people.
Overall, the game could have broad appeal, for anyone to engage with over multiple sessions due to it multi-layer aspect. The character selection & computer random selection and following this a rock paper scissor game that has a multitude of features. 

## UX & UI Design

### Wireframe and Prototype

The tool Figma was used for the Wireframe and Prototype. You can view my [figma page here](https://www.figma.com/file/1tfeavw7rxnhvLsKXqHWaR/StarFox?type=design&node-id=0-1&mode=design&t=xgaCVeO8ZfCMJny2-0)

![Figma Wireframe](documentation/images/Figma-wireframe-starfox.png)

### Responsive Design

- This website is a mobile-first design. At the planning stage, emphasis was put into the design of a mobile website, followed by up-scaling for larger devices.
- To achieve this, I used a component-based approach. Inside the rock paper scissors game I devided the game section up into 3 main areas.
  - Information section: The game name, conditions to win and the input area for the player name/codename
  - The Scoreboard: 
  - The 3 buttons for the player to choose from. Rock button, paper button and scissors button. This player choice section is flex-wrap so can more if needed on very small devices
These sections are designed to be realtive to the screen size so they would be visually appealing on any device.

### Mapping

- This is a three page design layout. The info page, the pilot selection page and the rock paper scissors game page.
- Page one index.html holds the information on what the game is about.
- Page two contains the pilot section. The player will make a choice between 5 pilots. The chosen pilot will be displayed in full when the headshot it selected.
There will be a button below for a random computer pilot and their full lenght display. Following this is a button to move to the next section. It gives a prompt to "Let's get going". A call to action.
- The rock paper scissors game page was separated to the pilot selection. It's a natural progression in most character selection games. Something the user will be expecting. This is a classic, well know game with little to no learning curve. 3 buttons to choose from and a indication of the reults. I decided to have a limit to the game. A conclusion of first to 5 wins.

### Colours & Font

- The colour palette is made up of dark blues, greens and complemented with gold and orange. A split complementary scheme, in mid-strength tones to give a fun energetic feeling that is pleasing to the eye.
- The use of white text on the darker values/tones and dark grey text on lighter values, means the text is easy is read.   
- The Font used is Inter with a weight of 200-400 and a websafe sans-serif font.
- A Dark grey colour (#363737) was used on the majority of the text over white background. The pilot section uses white for the pilots name and pilot info to help it stand out from the other text. By using this 2 tone approach in the pilot section, the text ties in with the lighter blueprint background. 

## Features 

### Navigation Bar

- The full responsive navigation bar includes links to the Home page, and the game page. and is identical on both pages to allow for easy navigation. The red fox logo will also take the user back to the Home page.
- This navigation bar will allow users to move between sections and pages without using the back button.

### Button & links

- The button was designed to stand out, to be easily visible from the rest of the page. The yellow to orange buttons in the "home and pilot selection" pages have an "affordance"(Don Norman) with their text. Affordance in these cases have text of "start" and "push"
- The yellow to orange colour is in contrast as it is a complementary colour to the blue and green on the page. 
- The image below shows the button without hover on the left and with hover on the right. As you can see, the colour changes from yellow to orange.
- This distinct colour change is a visual cue to the user.

![buttons for start and pilot page](documentation/images/yellow-to-orange-button.png)

- The nav links in the menu change colour to silver on hover. Giving a visual Feedback to the player.

### The landing page image

-On the home page, is a hero or background image of a classic starfox scene. Infront of this to the bottom of the screen is the information section. A short outline of the games concept. A call to action button "start" is lighlighted in yellow/orange under the game information. The header of the game is a h3 and the information is in a p block of text. The information text will provide the user with a story, the concept and how the game will progress. The background image will appeal to both young and old. Fox in a spaceship comidy aspect for the kids and nostalgia aspect for the adults.

![Landing page](documentation/images/Landing-page-and-info.png)

- A light white transparent div holding the information text make this section flow easyly with the image.

### Pilot Selection page

- The second page is the character/pilot selection page. When planning out this page on the figma wireframe, I knew I needed the following:
  - A long layout design to hold all sections. 
  - A large highlighted pilot image and information beside them. 
  - A selection bar containing the headshots of the pilots to choose from (5 choices).
  - A random computer selected image of your opponent. 
- To achive this layout I went with a scroll design. This scroll layout will be intuitive to the user and will make them feel at ease. At the end of the page after making your choice and seeing the computer pilot, the user sees a call to action, a “Let's get going” button. 
As described earlier in the mapping paragraph, this button empowers the user. Moving them forward.

![Pilot Section](documentation/images/pilot-select-mobile.png)

### Rock paper Scissors game page

- The name of the game immediately focuses the player, following this is the iput area for the players name.
- The gameboard was comprised of the players pilot, their selection in words ("I choose Rock") and their score. Between the 2 character block are the results. The results section holds the players choice as an image, the win, loose, draw result as text and lastly the computers random choice image.
  - The chosen hand image changes with relation to their selection, Rock Paper or Scissors.
  - The backgrounds of the hand images changes colour to highlight the winner, green for win, red for loose.

![ Gameboard and Rock Paper Scissors button location](documentation/images/position-of-buttons.png)

- Rock Paper Scissors Buttons. I placed the 3 button choices at the bottom of the page. This was done in part for quick selection on mobile devices and Secondly if the buttons where in the middle of the screen, it would be challanging to see what the computer choose.


### The Footer

- The footer contains the game copyright. Text in white over the games dark blue color.


### Features Left to Implement

- I'd like to introduce a hover page. It will display after clicking the form submit button, to indicate the form was sent successfully.

## Testing 

- HTML
  - No errors were returned when passing through the official [W3C Validator] ![index page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fandrewodwyer.github.io%2FStar-academy%2Findex.html) ![pilot page] (https://validator.w3.org/nu/?doc=https%3A%2F%2Fandrewodwyer.github.io%2FStar-academy%2Fpilot.html) ![game page] (https://validator.w3.org/nu/?doc=https%3A%2F%2Fandrewodwyer.github.io%2FStar-academy%2Fgame.html)
- CSS
  - No errors were found when passing through the official [(Jigsaw) Validator] (https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fandrewodwyer.github.io%2FStar-academy%2Fpilot.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JS
  - No errors were found ![jshint] (https://jshint.com/)
- Accessibility
  - The colour and font used make it very easy to read the text while still pleasing to the eye.
  - I used Lighthouse in DevTools to confirm that every page scores well.
  - The left image in the picture below is the lighthouse score given for desktop. The right image is the score given for mobile.

![lighthouse score](documentation/images/Lighthouse-score.png)

### Browser Testing

- The site has been tested on the following browsers: Chrome, Safari, firefox & Edge. The layout and functionality was consistent throughout the testing. links, navigation and form submit all work as intended.

### Manual testing

Actions and results. 
- On click, CC Ghost Tour text/logo brings you to the home page.
- Navbar buttons: when clicked, they take you to different sections or pages. 
- Book/submit button: when clicked, it will show the code institute form submitted
- Name, email, phone, date & your message inputs are all required on the form in booking page: If not filled out correctly, it prompt user to do so before allowing them to submit the form. 
- Social link icons (X, instagram, facebook, you-tube): when clicked, opens pages for those particular social networks.
All work correctly.

### Fixed Bugs

- Input field height in contact section. I wanted one row input field for the name and email boxes but I wanted 4 row for the message. This was done by adding  textarea instead of input element. textarea is not self closing and this took me a few tries to work out. Secondly I wanted each of the first 4 fields to be the same height. The auto height I felt was too small so I added a class to make the input fields 25px high and another css rule to make the textarea field 150px high. 
- Centre Form. I was having trouble making the form in the contact page centred on the page. The resolve was to add margin:auto; to the booking-form and also padding:5% to the outer div class=“transparent-colour”. The padding gave breathing space around the booking form.
- I wanted to stack the sections and divs on mobile, so the images showed first and then the text box. This was for devices with screen width less than 769, so the text could be easily read. 
When the screen went over 769px, the divs would be placed side by side in the section (container/card). The image div on left and text div on right. This was the design for the hero section and the “our tours” section. 
The div that followed, named “meet your guides” has two “our-guides” divs. These are stacked like the first two for mobile. However on larger screens, they would move to be in a row. The “our-guide” divs would be side by side.
This was solved using flex-direction:column in the “guide-section” section and flex-direction:row as a media query in the “our-guides” div.
Two containers (both having a class=“our-guides”) with an attribute of flex-direction: row. 
I added a class=“image-and-text” to these divs containing the image and text cards. The outer “meet your guides” container had a flex property of column, so the “our-guides” section showed side by side.

### Unfixed Bugs

There are no unfixed bus.

## Deployment

- Log in to GitHub and select CC ghost tour repository.
- From this repository, navigate to "Settings" (This is at the top of the page).
- when in settings, navigate to pages from the left-hand menu.
- In source select “Deploy from a Branch” in the drop down menu.
- In branch select “main”. The folder next to it will be “/(root)”
- At this point you click “Save”
- Your site is now being deployed.
- After several minutes the site was deployed.
- A link to the deployed site is at the top of this page, click “Visit site”
- Alternatively, To get access to the deployed site, click on the “Code” tab of the repository.
- On the right-hand side under “environments” click on “GitHub-pages”
- In the newly opened pages, click on “view deployment”
[live site](https://andrewodwyer.github.io/Cork-City-Ghost-Tours/)


## Credits 

- Code-institute:
  - The navigation bar and footer originally code was originally sourced from the Love Running Project at Code Institute. The form on the booking Page was also inspired by the Love Running project. However, none of these remain in their original form. Additional code was added to css and html.
- Montor Support: Spencer Barriball
- Tutor Support: Tutors at Code institute
- Don Norman's book "The design of everyday things"
- W3schools: 
  - I used w3schools to plan the button and button:hover css layout & colour.
[button css](https://www.w3schools.com/css/tryit.asp?filename=trycss_buttons_hover)
  - Semantic elements like section, div etc
[Semantic](https://www.w3schools.com/html/html5_semantic_elements.asp)
- HubSpot:
[Tutorial on Git & Github](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)
- Stackoverflow:
  - I got a better understanding of flexbox from stackoverflow.
[setting distance in flex](https://stackoverflow.com/questions/20626685/how-do-i-set-distance-between-flexbox-items)
  - Setting alt text in background images in CSS
[using title instead of alt](https://stackoverflow.com/questions/4216035/css-background-image-alt-attribute)  
### Content 

- The text for the Home page was written by the developer, Andrew O'Dwyer.
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)
- Favicon: from icons8.com https://icons8.com/icons/set/favicon-ghost I was able to get a stock ghost icon and change the colours to suit my colour palette.
- Photoshop was used for cropping and resizing

### Media

- The images used on the home page are AI generated in bing, powered by chatgpt Dall-e. https://www.bing.com/images/create/?ref=hn
- The 18th century map used for the booking page was taken from https://www.linkedin.com/pulse/corporation-cork-city-ireland-agreed-make-provision-scheme-holohan
- These images were then resized using https://imageresizer.com/