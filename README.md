### Links

-   Live Site URL: [Click here to see webpage](https://eduardionescu.github.io/advice-generator-app-main/)

# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db).

## Table of contents

-   [Overview](#overview)

    -   [The challenge](#the-challenge)

-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the app depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Generate a new piece of advice by clicking the dice icon

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   Mobile-first workflow
-   JavaScript
-   Fetch

### What I learned

Using fetch and asynchronous js is extremely useful and fun.

```js
async function getQuote() {
	try {
		let res = await fetch(url).then((res) => res.json());
		return res;
	} catch (err) {
		console.log(err);
	}
}
```

### Continued development

I'd like to work further with API's to get interesting data and build projects and graphs with that.

### Useful resources

-   [Quote API](https://api.adviceslip.com/advice) - Welp, neeedless to say.

## Author

-   Website - [EduardIonescu](https://ionescueduard.netlify.app)
-   Frontend Mentor - [@EduardIonescu](https://www.frontendmentor.io/profile/EduardIonescu)
