# Welcome to the Anime Hunter's Readme.
**Here, we'll discuss issues that I couldn't (yet) overcome, technologies used and how I installed the non-standard ones, the approach taken, a "User Story" and cap it all off with my stretch goals for this app. I'll also provide the link to my site, within.**

---

## App Description
**Anime Hunter is an app with a "Hunter's Guild" theme and is used to search for anime and get a few details. There's an "easy search" feature to get a few titles without having to input search parameters, for those new to anime. There's also a notes-feature to save the anime from a search that the user finds interesting. Finally, there's a "Poster Page" feature for users who would like to take a better look at the random fan art in the background or a poster associated with an anime they found through the search feature.**

---

## Issues I couldn't resolve:

- **Getting my API key to work on netlify!**

---

## Technologies Used:

- React Router
- Axios
- API
- React/JSX
- JavaScript
- HTML
- CSS

---

## Installation of Non-Standard Technologies:

- React: created app template by typing "npx create-react-app ." in the terminal for my project's folder.

- React Router: type "npm i react-router-dom" in my project's terminal.

- Axios: type "npm i axios" in my project's terminal.

- Anime-DB API: aquired the API key by subscribing to Anime-DB on [rapidapi.com](https://rapidapi.com/hub) and then added it to my files to use in a fetch-call, within.

---

## Live Site Link:
- [Anime Hunter](https://animehunterguild.netlify.app/)

---

## Approach Taken:

**I decided to split this app into multiple pages since there will be a lot of information to be displayed, once a search is executed. Also because there will be items that would take a decent amount of screen space on a page, (like the watchlist and the About Page's introduction text). Shortly after making multiple pages, I figured I should make one that is mostly blank to show off the fan-art (background images) I found on the internet. After implementing that, I thought it would be nice to also see the posters that are returned from a particular search item, as well. I then turned the poster display into a button that would set that poster as the background image so that it may be viewed on the "Poster Page".**
**Since this is an app to find new anime, I decided to make a watch-list page ("Bingo Book") to save any particular titles the user may fancy. That being the case, I knew I would have to use local storage so that their saved titles would still be there when they return.**

---

## User Story:

1. As a user, I expect there to be a simple and intuitive user interface.

2. As a new user, I expect their to be a page that will give me a quick rundown of the app's features and how to use the less-intuitive ones (if any).

3. As a user, after reading the "About" page, I expect to instantly see a list of anime after pressing the "Beginner's Bounty" button without having to manually type in search terms.

4. As a user, I expect to be brought to a more specific list of anime after I type in search terms on the "hunt" page and submit.

5. As a user, after reading the "About" page, I expect to be able to find and press a button on particular anime's info-sheet to add it to my watch list (Bingo Book").

6. As a user, after reading the "About" page, I expect to be able to view my watch list by pressing the "Bingo Book" button.

7. As a user, after reading the "About" page, I expect to be able to cross-off (or un-cross) a title(s) in my watch list.

8. As a user, after reading the "About" page, I expect to be able to completely erase a title(s) in my watch list.

9. As a user, after reading the "About" page, I expect my watch list to retain the titles and their state even if I refresh my page or don't revisit the website for a while.

10. As a user, after reading the "About" page, I expect to be able to press the poster image of a particular anime on the search display page ("bounty" page) to set it as a background to be viewed on the "Poster Page".

11. As a user, after reading the "About" page, I expect to see a less cluttered view of the background picture once I press the "View Poster" button.

---

## Stretch Goals:

1. **Make app responsive for mobile.**

2. **Add my personal rating to "Bounty" (search) items.**

8. **Create "Bingo Book" with buttons and turn-page animations.**

10. **Change fonts on particular elements (like on the "bounty sheets").**

11. **Get a lot more clear big-size fan art for random backgrounds.**
