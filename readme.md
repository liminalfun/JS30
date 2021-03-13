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

### 06 - Ajax Type Ahead

fetch() is a browser api for calling data from a different source. It can also be done with jquery or a library like axios. Fetch returns a "promise". Promise isn't the data itself, but it's saying that something will eventually come back from the data that has been fetched. 

Work with promises by using .then(), for example fetch(dataset).then(blob). Blob is literally a blob, because the browser doesn't know what kind of data has been fetched. The blob has to be converted from the raw data into whatever kind of data it is first (i.e. JSON).

ES6 Spreading to push an array into a variable (i.e. ciites.push(...data))

How to put a variable into a regular expression using RegExp()!! 'g' means global, 'i' means insensitive to case. 

`const regex = new RegExp(wordToMatch, 'gi');`

Get your data first, get those functionalities, and then connect it to event listeners.

Adding .join('') after map() will turn an array with multiple items into one string.

### 07 - Array Cardio Day 2

- Array.prototype.some() will check if at least one thing in the array meets what you're looking for.

- Array.prototype.every() will check if all things in the array meet your criteria.

- Array.prototype.find() will return to you the first item that it finds in the array.

- Array.prototype.findIndex() will find where something is inside of the array. For example, finding a location to delete it.

- Putting curly brackets around your variable in console.log will give you the value of that variable. e.g. console.log({isAdult})

I did the last two exercises correctly on my own (except for the delete part), and it felt really good!

### 08 – Fun with HTML Canvas

Learned about canvases! All new things! Context was new, and I can learn about it on MDN. All of the other new bits (attributes?) are a part of the object and can be found in the console.

#### ES6 trick, 'structuring an array' or declaring two variables at once:

Without structuring an array:
`lastX = e.offsetX;
lastY = e.offsetY;`

With structuring an array:
`[lastX, lastY] = [e.offsetX, e.offsetY]`

This is something I've wanted to know for a long time, but couldn't figure out what to search for!

- [Mother-effing hsl()](https://mothereffinghsl.com/) - Hue, Saturation, Lightness, Alpha

- [Global Composite Operator](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation) for blend modes

- Flag thing for making something false and then true and then false.

Also added some things on my own for fun! Like the background color, more hsl specificity, and a refresh button.

### 09 - Dev Tools Domination

- There is no difference between putting `onClick=function()`in the HTML element versus `element.addEventListener('click', function)`.

- Learned lots of helpful console.methods(). I think console.groupCollapsed() will be really helpful for me.

- *In Chrome Dev Tools*

    - Right click element in inspector. Select 'Break On' > 'Attribute Modification'. This will open debug mode and show you exactly what's happening.

### 10 - Hold Shift and Check Checkboxes

I repeated this exercise three times to remember how to do it, and I made it work for unchecking boxes as well.

- 'click' event will fire even if you use your keyboard

- 'let' rather than 'const' for variables that need to be reassigned (constantly)

- Learned more about how to use Array.prototype.forEach() method

- Learned about flags

- Learned about checkboxes

### 11 - Custom HTML5 Video Player

Hahahaha. I have been doing this for the past three months and feeling so overwhelmed. This will be a treat ;)

Wrapping a string in parseFloat() converts it to a true number.

+= for adding to something

Was really fun and helpful! I figured out the ~challenge~ of fullScreen mode, and also challenged myself to figure out keyboard controls (space + arrow keys) and it was really fun! By figuring it out, I mean referencing other tutorials lol, but it went really well!

### 12 - Key Sequence Detection

Best part about this lesson was cornify_add(). Amazing.

Learning key sequence detection was also really cool.

### 13 - 