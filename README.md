Project submission for the Framework Software Engineering Co-op take-home coding challenge. The project was built in React using [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html), and styled with [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/). 

## Explore app
The app is temporarily hosted using github pages at http://isabeltripp.me/current-weather-lookup/.

## Set up locally 
Requirements: npm installation on local machine. See: [Get npm](https://www.npmjs.com/get-npm).

Start by cloning the repo: `git clone https://github.com/tahitihat/current-weather-lookup.git`

Run `npm install` to install dependencies and then `npm start` to start a local development server. Open http://localhost:3000 to view it in the browser.

## Comments 

There are several features/development tasks that I did not have time to address, so I would like to list them here.

### Validation 
There is little form validation in this implementation: state choices are limited to a selection from a dropdown menu and the submit button is disabled until the user inputs a city or state. This still enables users to input invalid city names or invalid zip codes (after which the erroneous request is made, and an error message is displayed: '        There was an error processing your request. Please ensure that you have entered a valid city/state combination or zip code.'). Stronger validation would help with this (e.g. ensure that the zip code is a 5-number string). In the past I have used the [yup validation library](https://github.com/jquense/yup), so if I had more time, I would implement that.  

### U.S. Territories 
Puerto Rico, Guam, and the U.S. Virgin Islands are territories of the United States. This weather app does not allow users to search for the weather in these territories. Although I didn't have time to include them in this application, I do believe that these territories deserve greater self-determination, whether that be through statehood, independence, or whatever else the consensus of citizen desires!

### Browser compatibility 
I conducted all development and browser testing on Brave (wrapper for Google Chrome). It's likely that the app needs [react-app-polyfill](https://www.npmjs.com/package/react-app-polyfill) to function correctly on Internet Explorer. 

### Extra Credit 
Again, my busy schedule this weekend limited the amount of time I could work on this challenge, but I would approach the extra credit using the geolocation API and localstorage. 
