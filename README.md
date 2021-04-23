# Vienna - MS2
---
## Purpose of the project
---
The site is for users that think about or want to visit Vienna for the first time. This site wants to show users in a quick way, via some images, text and a few recommendations, how magical the city is and share options regarding sleep, eat and main sightings. This will save time for the user and choice stress instead of checking out many different websites yourself, but it is not necessary. They can read some more information about the recommendation in the infowindow of the map and click further to go to the website of that place to gain more information if wanted.  The user can decide by a click which recommendations to watch or none at all. Furthermore, the user can ask questions via the contactform. Besides that, the user can also follow the social media icons and find a great video about Vienna on Youtube and more travel information about Vienna on tripadvisor if wanted.

---
## UX
---
### User stories
1. As a user I want to get a quick visual idea about the city when scrolling the site so that I can decide if I want to visit it or not.
2. As a user I want to get an overview of recommendations regarding where to eat so that I don't have to look for that myself.
3. As a user I want to be able to contact someone so that I can ask any question(s) I might have regarding Vienna.
4. As a user I want to read more about the history of Vienna so that I understand the city better once I visit.
5. As a user I want to read some more specific information when clicking on a marker so that I get an idea if this recommendation is something for me or not.
6. As a user I would like to have a link to a website so that I can find out more about a recommendation that I really find interesting.


---
### Wireframes
*	The pdf versions are added in the project itself - link: 

---
## Features
---
### Navbar
* a navbar with 3 links - to the top of the page, to the following section and to the final section - that collapses into a burger menu on mobile devices

### Vienna
* the top of the page which first shows an image 
* a header
* a sub-header
* a paragraph with text and a link to another website
### Visit
* the second section which starts with an image 
* a header
* a sub-header
* a paragraph describing some of the recommendations
* three buttons (sleep/eat/see) that change colour when clicked on and show different places on the map that are recommendations
* the google map on page load shows only one marker focused on the centre of Vienna. After clicking each button the related markers appear and also disappear when another button is clicked. The markers on the map are clickable which shows an infowindow to provide some quick information and a link to their website if a user wants more information. The infowindow can be clicked away. 
### Contact
* first an image
* a header 
* two paragraph lines of text
* a form which contains three fields which are all required in order to submit the form properly. Three different popups (modals) can appear when clicking on the submit button depending on if all fields are filled out, if one field is still empty or in case some other error occurs.
### Footer
* a footer with a title
* four social media links
---
## Typography
* The Crimson Text regular 400 from Google Fonts was used for the body
---
## Color-scheme
---
In line with the images colours:
1. #f8eef8 blue for body background
2. #7bf0c9 green for footer background
3. #5b5bfd blue for the text in the footer
---
## Languages and technologies Used
---
* HTML - to set up the skeleton of the site
* CSS - to style the HTML elements and adjust regarding responsiveness
* JavaScript - to add interaction for a user who visits your site, like clicking on buttons that change colour when clicked and at the same time show specific places on google maps or clicking a button to submit a form which creates different popups for different situations. The user experiences more control.
* jQuery - is a fast, small, and feature-rich JavaScript library which increases versatility and extensibility
* Polyfill - a shim that mimics a future API providing fallback functionality to older browsers
### Framework
* [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/) - provides a basic structure and offers built-in responsiveness 
### Tools
* [Google Fonts](https://fonts.google.com/specimen/Crimson+Text?query=crimson+text) - to set the typography for the site
* [FontAwesome](https://fontawesome.com/) - to use icons for a more visual appealing effect, but also functional for the illiterate.
* [Google maps](https://developers.google.com/maps) - to show a map of the city and markers to show recommendations.

Features I would like to add in the future:
* [EmailJS](https://www.emailjs.com/)
---
## Testing
---
### Supported screens and browsers
* Desktop: 
* Ipad: 
* Mobile: 

* Chrome:
* Firefox:
* Edge: 

### Test cases
1. As a user I want to get a quick initial idea, feeling about the city when scrolling the site so that I can decide if I want to visit it or not.

2. As a user I want to get an overview of recommendations regarding where to eat so that I don't have to look for that myself.

3. As a user I want to be able to contact someone so that I can ask any question(s) I might have regarding Vienna.

4. As a user I want to read more about the history of Vienna so that I understand the city better once I visit.

5. As a user I want to read some more specific information when clicking on a marker so that I get an idea if this recommendation is something for me or not.

6. As a user I would like to have a link to a website so that I can find out more about a recommendation that I really find interesting.

### Code validation
* HTML: checked, fixed errors and passed.
* CSS: checked and passed.
* JS: checked, fixed warnings and passed.
### Fixed bugs
* Gitpod workspace, in the beginning I had to change my workspace settings preferences to VS code. One morning, gitpod was not working but after that was fixed my workspace was still frozen in a loop. I had to create another workspace. Another time my workspace just froze while it was open, but I could solve this only by stopping my workspace on the dashboard. Another time I got the message that my workspace did not exist anymore, but this solved itself.
* At first my map was not showing even though I followed the Google maps tutorial. It turned out that removing defer and &callback=initMap from the script and instead calling the function in my map.js file worked after a hard-reload. Also, since I used a different name for the function in my map.js file.
* 501 error code regarding EmailJS was not fixed: tried to reload the page, clear my browser cache and via DevTools Application, Storage, Clear Site Data. However, it did solve my markers not displaying in my map! The errors said that I did not define my functions while I did. This is a huge help since I have had several times that I got confused because my updates were not showing in the browser after a reload. Instead of EmailJS I created alerts which later changed into modals.

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

If you want to work on the project code within a local IDE:
    1. Follow this link to the [Project GitHub repository](https://github.com/MoeskerDev/ms_project2_vienna).
    2. Click on the **Code** button next to the green **Gitpod** button.
    3. Choose the **Clone** option with HTTPs.
    4. Copy the clone **URL** for the repository.
    5. Open the terminal in your local IDE.
    6. Change the current working directory to the location where you want the cloned directory to be made.
    7. Type 'git clone', then paste the URL copied at step 4.
## Credits
---
### Content
---
* The first text is taken from [here](https://www.tripadvisor.com/Tourism-g190454-Vienna-Vacations.html)
* The rest of the text content I wrote myself
### Media
* The images used in this site are from <https://wallpaperaccess.com/vienna>
* When needed I resized the images so that they would all be equal using <https://www.resizepixel.com/resize-image/>
---
### Code
---
* The navbar code was taken from Bootstrap
* For the text, paragraphs I used cards from Bootstrap to make it naturally responsive to different screen sizes
* The buttons are Bootstrap buttons
* The icons are from FontAwesome
* The changing colour when clicking a button came from the tutoral The importance of this, but with a twist
* The code for the map came from the Google Maps tutorial, from [here](https://developers.google.com/maps/documentation/javascript/examples/marker-simple) and most in the end from a How to Google document, but then I readjusted the code completely.
* The form is from Bootstrap and I adjusted it a bit
* Most of the code is a combination of several tutorials
### Acknowledgements
* Thanks to my mentor for making me learn more.
* A big thank you to the tutors who support and are always trying to help even if it can take a long time.
