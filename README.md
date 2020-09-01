# Twitter Clone Challenge by Radix

> 💡 [Play directly via Netlify](https://twitter-copywork.netlify.app/)

### Features:

- Single Page Application (SPA) which is a clone of Twitter.
- Fake API using Promises (async JavaScript feature).
- API simulates random response time (currently set to respond between 200-600 ms)
- Loading state between API calls.
- 3 initial users and ability to view each user profile.
- Ability to post tweets and see them instantly on the page (without a page reload).
- Support for jpg, jpeg, png, webp and gif image formats and YouTube embedded videos.
- Routed navigation between pages.
- View Tweet feed content according to current user profile page.
- Retweet logic for preexisting tweets.
- 404 redirection in case of Page Not Found error.
- Accurate copy of the Twitter official website layout.

### How to use:

- On the Welcome page, click a user name to begin (eg. John Smith).
- Once in a user profile, you can view their tweet feed and check their profile.
- You can navigate between existing profiles by clicking on a user entry on the Who To Follow card on the right side of the page. You can also type their username directly on the page URL (try misspelling a username to see how the 404 is handled).
- You can click the Tweet button in the header of the page to compose a Tweet.
- Type any content inside the text area and click Tweet to post it as the current user.
- It is possible to attach images (jpg, jpeg, png, webp, gif) or videos (youtube or youtu.be) by simply pasting their link inside the content box. The link will be parsed and the Tweet will show the media accordingly once its posted. Examples are given in the preexisting Tweets.
- You can dismiss the Tweet modal by either clicking the Close icon or clicking the overlay behind the modal.
- You can click the Home button in the header of the page to go back to the beginning of the application (Welcome page).

### Technologies and Libraries (aka For Geeks):

- ReactJS ([create-react-app](https://github.com/facebook/create-react-app))
- React Router ([react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start))
- FontAwesome ([react-fontawesome](https://github.com/FortAwesome/react-fontawesome))
- JavaScript/ES6 features (ECMAScript 2015)
- SASS (CSS preprocessor)

### Notes:

- [Redux](https://github.com/reduxjs/redux) was considered but not adopted. It was thought of as an overkill solution to a relatively simple state management necessity.
- Component organization inside src/ was kept flat given a small number of files and no real necessity to split them into different directories.
- The same applies for organization of SCSS files inside the src/styles/ directory.
- SASS partials were used but Mixins and Extends features were not explored further.
- The pattern of creating a separate helper functions file was followed.
- React Fragments were used when it was considered that elements should be siblings of each other without the need for a parent element.
- I used a .todo file to guide me through the development of the app. Even though I didn't write every feature there, it proved useful as a guide for tasks that were thought of.
- I preferred using Functional Components (dumb/stateless components) over Class Components (smart/stateful components) whenever possible given their [benefits](https://programmingwithmosh.com/react/react-functional-components/) and [potential performance gain](https://reactjs.org/blog/2015/10/07/react-v0.14.html#stateless-function-components).

### Installation & Use:

#### 1. Build and run the project locally

- ```git clone git@github.com:fmaiabatista/twitter_copywork.git```
- ```npm install -g yarn```
- ```yarn install```
- ```yarn start```
- The project will be available at ```localhost:3000``` in your browser.

#### 2. [Play directly via Netlify](https://twitter-copywork.netlify.app/)

### Observations:

- The project works best in Chrome and screens with >1200px width.
- A suggested approach to file organization is:
```
src/
  api/
    userAPI.js
  components/
    elements/
        Button.js
        Footer.js
        Header.js
        Loading.js
    pages/
      profile/
        ProfileAbout.js
        ProfileAvatar.js
        ProfileContent.js
        ProfileCoverImage.js
        ProfileEngage.js
        ProfileFeed.js
        ProfileMiddleNav.js
        ProfileWhoToFollow.js
      Page.js
      PageProfile.js
      Welcome.js
    tweet/
      Tweet.js
      TweetForm.js
    App.js
  helpers/
    helpers.js
  styles/
    partials/
      _colors.scss
      _measures.scss
    components/
      elements/
          Button.scss
          Footer.scss
          Header.scss
          Loading.scss
      pages/
        profile/
          ProfileAbout.scss
          ProfileAvatar.scss
          ProfileContent.scss
          ProfileCoverImage.scss
          ProfileEngage.scss
          ProfileFeed.scss
          ProfileMiddleNav.scss
          ProfileWhoToFollow.scss
        Page.scss
        PageProfile.scss
        Welcome.scss
      tweet/
        Tweet.scss
        TweetForm.scss
      App.scss
  index.js
```
