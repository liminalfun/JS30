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

### 04  - Array Cardio Day 1

Really learned a lot in this lesson! I've felt uncertain when I've encountered these in past projects, and will need to practice each of these concepts a few more times until I feel like get them enough to use in my own projects.

Console.table() for showing a table.

Array.prototype.filter() can bring in a full array (i.e. 10 objects) and return only certain items (i.e. 2 objects). 

Array.prototype.map() always returns the same number of items called, but rearranges them (i.e first and last names).

Array.prototype.sort() works by repeatedly sorting two items and bubbling them by giving each pair binary values.

[Ternary operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) use ? :  as shorthand for conditional logic

Array.prototype.reduce() adds things up, kinda. It starts with a blank object, sees if there is a value for it (sometimes requires to be defined as zero), and increments when looped over.

 It was used in this exercise to calculate the number of years each inventor lived, and then sort them by age. It was also used to calculate the sums of each type of transportation listed in an array.

querySelectorAll() can be used for any DOM element. It doesn't have to be document, it can be used to look inside any existing element. It returns a NodeList, not an array. 

++ increment operator increases an integer value by one.

[] square brackets refer to object properties.

! means 'no'. Like !obj[item] means 'no object item'.

### 05 - Flex Panel Gallery

[CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors), in particular the child combinator >. I want more practice using combinators.

[CSS Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes), in particular :first-child and :last-child. I've seen these before, but I've never written them myself.

Flex numbers. {flex: 1} on child elements means that all flex children will take up the same amount of space. Equal distribution. {flex: 5} on a particular child will make that element grow bigger.

Learned about setting events to trigger after transitionend in Javascript, and how to use includes() to handle browser differences. For example, Safari will note that {flex} transitioned whereas other browsers will say that {flex-grow} was transitioned. 

Also learned that referencing functions with () means they will be triggered on page load, whereas functions referenced without () means that they will be triggered when the particular event they are referenced in is triggered. For example, use element.addEventListener('click', function) rather element.addEventListener('click', function()).