# JavaScript30

WIP kit including the Starter Files + Completed solutions for the [JavaScript 30 Day Challenge](https://JavaScript30.com) course from Wes Bos.

## Reflections

Short reflections on what I've learned each day.

### 01 - JavaScript Drum Kit
*March 3, 2021*

Learned about key events, playing audio, and listening for the transition end event. I also learned the => shortcut for function and saw an example of cleaning up functions to be a bit more modular/reusable.

### 02 - JS and CSS Clock
*March 4, 2021*

Learned about setDate, setInterval, and ES6 template literals (backtick). I wanted to know more, so I read Stanley Ulili's article (Template Literals in Javascript Explained Like You're Twelve)[https://www.stanleyulili.com/javascript/template-literals-in-javascript-explained-like-your-twelve/].

Questions I have after this exercise are:
1. How could I write if statements to temporarily turn off the transition at 90deg so that it doesn't go all the way back?
2. How would I make each hand be a different length, but still start at the center?
3. How could I add a circle to the center, so that the line intersection point does not appear jagged?

### 03 – CSS Variables

Learned about how to use CSS variables, and how they are different than SASS and PostCSS. Learned the difference between 'node lists' and 'arrays'. Arrays have different methods for dealing with arrays (i.e. map, reduce). Node lists only have a few methods (i.e. forEach, keys, etc). This can be viewed in the console by expanding '__ proto __:'.

Also learned to use the arrow function, =>,  in forEach to keep things clean.

A data-attribute is an HTML attribute that you have made up. You just have to prefix it with 'data-'. 'this.dataset' will contain all the data attributes from that specific element. It's an object already, nothing required. It will take anything with 'data-' and put it into a nice package for you.

For fallbacks, you can use || '' meaning 'or nothing'. || = or, empty quotes = nothing.

You can scope variables in CSS by defining them below the root.
