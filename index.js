// Introduction to the DOM Lab - JavaScript Code

// This file contains JavaScript code for DOM manipulation
// The HTML structure is defined in index.html

// Example: Get the main heading element
const mainHeading = document.querySelector('h1');

// Example: Get all paragraph elements
const paragraphs = document.querySelectorAll('p');

// Example: Get the table element
const table = document.querySelector('table');

// Example: Add a click event listener to the main heading
if (mainHeading) {
  mainHeading.addEventListener('click', function() {
    console.log('Main heading was clicked!');
  });
}

// Example: Log all the elements we found
console.log('Main heading:', mainHeading);
console.log('Paragraphs:', paragraphs);
console.log('Table:', table);
