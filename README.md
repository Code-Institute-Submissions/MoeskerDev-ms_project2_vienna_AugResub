You can find [a live version of the project here](https://moeskerdev.github.io/ms_project2_vienna/).

# Vienna - MS2
---
![mockup home](/assets/images/mockups/mockup_ms2_1.png)
![mockup visit](/assets/images/mockups/mockup_ms2_2.png)
![mockup contact](/assets/images/mockups/mockup_ms2_3.png)

## Purpose of the project
---
The site is for users that think about or want to visit Vienna for the first time. This site wants to show users in a quick way, via some images, text and a few recommendations, how magical the city is and share options regarding sleep, eat and main sightings. This will save time for the user and choice stress instead of checking out many different websites yourself, but it is not necessary. They can read some more information about the recommendation in the infowindow of the map and click further to go to the website of that place to gain more information if wanted.  The user can decide by a click which recommendations to watch or none at all. Furthermore, the user can ask questions via the contactform. Besides that, the user can also follow the social media icons and find a great video about Vienna on Youtube and more travel information about Vienna on tripadvisor if wanted.

---
## UX
---
### User stories
1. As a user I want to get a quick visual idea about the city when scrolling the site so that I can decide if I want to know more or not.
2. As a user I want to get an overview of recommendations regarding where to eat so that I don't have to look for that myself.
3. As a user I want to be able to contact the business so that I can ask them the business inquiries that I have.
4. As a user I want to read more about the history of Vienna so that I can learn more about the city.
5. As a user I want to read some more specific information when clicking on a marker so that I get an idea if this recommendation is something for me or not.
6. As a user I would like to have a link to a website so that I can find out more about a recommendation that I really find interesting.


---
### Wireframes
*	The wireframes are in pdf and are added in the project itself - [link](https://github.com/MoeskerDev/ms_project2_vienna/tree/master/docs/wireframes).

---
## Features
---
### Navbar
* a navbar with 3 links - to the top of the page, to the following section and to the final section - that collapses into a burger menu on mobile devices. It also has a smooth scroll from one to the other section once clicking on the menu links.

### Vienna
* the top of the page which first shows an image .
* a header.
* a sub-header.
* a paragraph with text and a link to another website for more background information.
### Visit
* the second section which started with an image that I removed since it was not sharp enough.
* a header.
* a sub-header.
* a paragraph describing some of the recommendations.
* three buttons (sleep/eat/see) that change colour when clicked on and show different places on the map that are recommendations.
* the google map on page load shows only one marker focused on the centre of Vienna. After clicking each button the related markers appear and also disappear when another button is clicked. The markers on the map are clickable which shows an infowindow to provide some quick information and a link to their specific website if a user wants more information. The infowindow can be clicked away. 
### Contact
* first an image.
* a header. 
* two paragraph lines of text.
* a form which contains three fields which are all required in order to submit the form properly. Two different modals can appear when clicking on the submit button depending on if all fields are filled out, if one/more field(s) is/are still empty versus when all fields are filled out correctly.
### Footer
* a footer with a title.
* four social media links.
### 404 error page
* a header.
* subheader.
* image where users can click on to go back to the homepage.
---
## Typography
* The Crimson Text regular 400 from Google Fonts was used for the body.
---
## Colour-scheme
---
In line with the images colours:
1. #f8eef8 blue for body background.
2. #7bf0c9 green for footer background.
3. navbar and cards have a #FFFFFF white background.
3. #000000 black text for the overal text.
4. #FFFFFF white text in the green buttons.
5. #5cb85c green btn-succes colour for the buttons.
6. #5b5bfd blue for the text in the footer.
7. #0af1a4 green for the text in 404 error page.
---
## Languages, libraries and technologies used
---
### Languages
* HTML - to set up the skeleton of the site
* CSS - to style the HTML elements and adjust regarding responsiveness
* JavaScript - to add interaction for a user who visits your site, like clicking on buttons that change colour when clicked and at the same time show specific places on google maps or clicking a button to submit a form which creates different popups for different situations. The user experiences more control.
* jQuery - is a fast, small, and feature-rich JavaScript library which increases versatility and extensibility
### Framework
* [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/) - provides a basic structure and offers built-in responsiveness 
### Tools, libraries and technologies
* [Google Fonts](https://fonts.google.com/specimen/Crimson+Text?query=crimson+text) - to set the typography for the site
* [FontAwesome](https://fontawesome.com/) - to use icons for a more visual appealing effect, but also functional for the illiterate.
* [Google maps](https://developers.google.com/maps) - to show a map of the city and markers to show recommendations.
* [Favicon](https://favicon.io/) - to add an icon to the website visible in the tab section as a kind of logo.
* Polyfill - a shim that mimics a future API providing fallback functionality to older browsers

Features I would like to add in the future:
* [EmailJS](https://www.emailjs.com/)
* Drop-down menu
* A slide or fade effect
---
## Testing
---
### Supported screens and browsers
* Desktop: it is supported for desktop 1366x768 and others which I checked via DevTools.
* Ipad: via DevTools it supports the following screen sizes:
    * 768x1024 as in Ipad
    * 1024x1366 as in Ipad Pro
* Mobile: via DevTools it supports the following screen sizes: 
    * 360x640 as in Moto G4 and Galaxy S5
    * 411x731 as in Pixel 2
    * 411x823 as in Pixel 2 XL
    * 320x568 as in Iphone 5/SE
    * 375x667 as in Iphone 6/7/8
    * 414x736 as in Iphone 6/7/8 Plus
    * 375x812 as in Iphone X
    * 540x720 as in Surface Duo
    * 280x653 as in Galaxy Fold

* Chrome: created it in Chrome so it supports this site. All links and buttons are working.
* Firefox: the site looked the same as in Chrome, all the links and buttons are working.
* Edge: it was working very slow, but the site looked the same as in Chrome. The links and buttons work.

### Screenshots
A [pdf](https://github.com/MoeskerDev/ms_project2_vienna/tree/master/docs//screenshots/screenshots_ms2_total.pdf) is added in the project itself with several screenshots of the desktop, Ipad and mobile Iphone 6/7/8 sizes.

### Test cases
1. As a user I want to get a quick initial idea, feeling about the city when scrolling the site so that I can decide if I want to know more or not.

    * As a user, when I enter the site I see this large image, when scrolling down some more images and sub-headers which give me quick idea of the city is like.

2. As a user I want to get an overview of recommendations regarding where to eat so that I don't have to look for that myself.

    * As a user I go to the site and scroll down a bit to find some text that mention some places to eat dinner or pasty and on top of that there is a button called eat which (should show) recommendations to eat.

3. As a user I want to be able to contact the business so that I can ask them the business inquiries that I have.

    * As a user I can click on the navbar contact or scroll down to get to the contactform where I can ask questions. I have to fill out all fields otherwise I get a popup telling me to fill out all fields. After filling out every field and clicking on submit I get a confirmation on UI on the application when I submit my query, thanking me for my question.

4. As a user I want to read more about the history of Vienna so that I can learn more about the city.

    * As a user when I start to read the intro about Vienna I am able to click on history which takes me to an elaborate and detailed site from the Austrian government that shows the history of the city.

5. As a user I want to read some more specific information when clicking on a marker so that I get an idea if this recommendation is something for me or not.

    * As a user you are able to click on a marker, but for now only one infowindow will display.

6. As a user I would like to have a link to a website so that I can find out more about a recommendation that I really find interesting.

    * As a user I can go to the website, scroll down to the map, click a button to see markers that represent recommendations for that button. It should be possible to click on a marker and an infowindow with a link to the website appears. Clicking on the link takes the user to another tab and website where more information about that specific place can be read.

### Code validation
* HTML: checked with [W3C](https://validator.w3.org/), fixed errors and passed.
* CSS: checked with [Jigsaw](https://jigsaw.w3.org/css-validator/) and passed.
* JS: checked with [JSHint](https://jshint.com/); 
    - for main.js there is one warning: Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. ($). Also, one undefined variable: $. The $ is an alias for jQuery. 
    - for map.js there is the same warning: Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (closeOtherInfo, infoWindow, renderedMap, marker, infoObj). Also, three undefined variables from google maps; map, google and marker. I fixed the undefined variable map by placing it at the top of the file. Google is referring to google maps and marker is part of google maps as well. 

### Fixed bugs
* Gitpod workspace, in the beginning I had to change my workspace settings preferences to VS code. One morning, gitpod was not working but after that was fixed my workspace was still frozen in a loop. I had to create another workspace. Another time my workspace just froze while it was open, but I could solve this only by stopping my workspace on the dashboard. Another time I got the message that my workspace did not exist anymore, but this solved itself.
* At first my map was not showing even though I followed the Google maps tutorial. It turned out that removing defer and &callback=initMap from the script and instead calling the function in my map.js file worked after a hard-reload. Also, since I used a different name for the function in my map.js file.
* 501 error code regarding EmailJS was not fixed: tried to reload the page, clear my browser cache and via DevTools Application, Storage, Clear Site Data. However, it did solve my markers not displaying in my map! The errors said that I did not define my functions while I did. This is a huge help since I have had several times that I got confused because my updates were not showing in the browser after a reload. Instead of EmailJS I created alerts which later changed into modals.
* After rearranging my code for the map completely, solving all errors in the console and warnings in JSHint, my markers did not show when clicking on the buttons. This was fixed by creating another function renderMap() and to place in each find function at the top, like some other functions. At that point my markers showed but in a correct way. The first click on each button were always the sleep markers and after that, when changing buttons the markers were always one step behind the button click. This was fixed by placing the function gettingMarks() below myMarks in the function since otherwise, when calling this function, it would still contain the markers of the previous click.
* Another issue with the maps was that only the last myMark of each function would open in the map. This was solved by rearranging the code further.
* Fixing the unused variable in the main.js file for the refreshPage function was solved by adding an eventlistener and using the function in the main.js file, in that eventlistener. 

### Further testing
* The audit result of the [measure website](https://web.dev/measure/) can be found [here]().
---
## Deployment
---
### GitHub pages

This website was deployed to GitHub pages from the [GitHub repository](https://github.com/MoeskerDev?tab=repositories) by following these steps:

1. Login to [GitHub](https://github.com/).
2. Select, out of all the repositories on the screen, **ms_project2_vienna**.
3. From the menu items click on **Settings**.
4. Scroll down to the **GitHub Pages** area.
5. Under **Source** click on the drop-down menu and select **Master Branch** instead of **None**.
6. While selecting Master Branch, the page is automatically refreshed and is now deployed.
7. Scroll back down  to the **GitHub Pages** area and get the link to the deployed website.

At the moment of submitting this project the Development Branch and the Master Branch are identical.

### Gitpod
To clone this project in Gitpod you have to:

1. Have a GitHub account. [Create one here](https://github.com/).
2. Use the Chrome Browser.

Then:

1. Install the [Gitpod Browser Extension for Chrome](https://www.gitpod.io/docs/browser-extension/).
2. Then, restart the browser.
3. Log into Gitpod, with your gitpod account.
4. Go to the [Project GitHub repository](https://github.com/MoeskerDev/ms_project2_vienna).
5. Click on the green **Gitpod** button.
6. A new gitpod workspace will be created from the code in GitHub where you can work locally.
7. Replace the API key with your own API key in the script at the bottom of the html file https://maps.googleapis.com/maps/api/js?key=**YOUR-OWN-KEY-HERE**=places&libraries=&v=weekly
8. On the command line, type: **python3 -m http.server**.

### Local IDE
If you want to work on the project code within a local IDE:

1. Follow this link to the [Project GitHub repository](https://github.com/MoeskerDev/ms_project2_vienna).
2. Click on the **Code** button next to the green **Gitpod** button.
3. Choose the **Clone** option with HTTPs.
4. Copy the clone **URL** for the repository.
5. Open the terminal in your local IDE.
6. Change the current working directory to the location where you want the cloned directory to be made.
7. Type 'git clone', then paste the URL copied at step 4.

---
## Credits
---
### Content
* The first text is taken from [here](https://www.tripadvisor.com/Tourism-g190454-Vienna-Vacations.html).
* The rest of the text content I wrote myself.
### Media
* The [source of the images](https://wallpaperaccess.com/vienna) used in this site.
![overview from above of a garden in Vienna surrounded with architectual buildings](https://github.com/MoeskerDev/ms_project2_vienna/blob/master/assets/images/vienna_image1.webp "Garden in Vienna")
![](https://github.com/MoeskerDev/ms_project2_vienna/blob/master/assets/images/vienna_image2_404.webp "")
![majestic palace with steps to the garden with statues on each side of the lane](https://github.com/MoeskerDev/ms_project2_vienna/blob/master/assets/images/vienna_image3.webp "Schloss Schönbrunn")

* When needed I [resized the images](https://www.resizepixel.com/resize-image/) so that they would be equal.
* In the end I [converted the png images of the site to webp](https://onlineconvertfree.com/).
* To [create the mockups](http://ami.responsivedesign.is/).
### Code
* The navbar code was taken from Bootstrap.
* For the text, paragraphs I used cards from Bootstrap to make it naturally responsive to different screen sizes.
* The buttons are Bootstrap buttons.
* The icons are from FontAwesome.
* The changing colour when clicking a button came from the tutoral The importance of this, but with a twist.
* The code for the map came from the Google Maps tutorial, from [here](https://developers.google.com/maps/documentation/javascript/examples/marker-simple) and most in the end from a How to Google document, but then I  readjusted the code completely.
* The form is from Bootstrap and I adjusted it a bit.
* Most of the code is a combination of several tutorials; the 404 error page code came from CI as well and I adjusted it to my site. For setting up the custom 404 error page, I used this [page](https://medium.com/designer-recipes/how-to-make-a-custom-404-error-page-for-your-website-1af37a8b20d1).
* The smooth scroll code I copied from [here](https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section2).
* Solving the unused variable of refreshPage was solved by looking at [this](https://www.w3schools.com/js/js_htmldom_eventlistener.asp).
* [Colour only part of a string text](https://stackoverflow.com/questions/4622808/html-changing-colors-of-specific-words-in-a-string-of-text) in the 404 error page.
### Acknowledgements
* Thanks to my mentor for making me learn more and his flexibility.
* A big thank you to the tutors who support and are always trying to help even if it can take a long time.
