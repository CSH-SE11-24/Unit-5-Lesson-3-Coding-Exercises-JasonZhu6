// CODE ALONG
// Console log script running
console.log("script running")

// Console log the document
console.log(document)

// Console log the innerHTML of the the document's head.
console.log(document.head.innerHTML)

// Select the img tag for the vanilla ice cream and save it in a variable
let vanillaIceCream = document.querySelector("#vanillaImage")

// Console log the variable to confirm you selected it correctly!
console.log(vanillaIceCream)

// CODING EXERCISES
// Task 1: 
// Console log the title of the document.
console.log(document.title)

// Task 2: 
// Console log the className of the the document's body.
console.log(document.body.className)

// Task 3: 
// Select the img tag for the chocolate ice cream and save it in a variable
let chocolateIceCream = document.querySelector("#chocolateImage")

// Console log the variable to confirm you selected it correctly!
console.log(chocolateIceCream)

// Console log the src of the variable to see the image image address
console.log(chocolateIceCream.src)

// Task 4: 
// Select the h1 tag and save it in a variable
let h1 = document.querySelector(".title")

// Console log the variable to confirm you selected it correctly!
console.log(h1)

// Task 5: Add an ID to the mint chocolate chip price in HTML
// Select the price and save it in a vairable
let mintPrice = document.querySelector("#mintPrice")

// Console log the variable to confirm you selected it correctly!
console.log(mintPrice)

// STRETCH: 
// So far we have only selected one element at a time. Use Google and try to select all the images at once and save it in a variable.
let allImg = document.querySelectorAll("img")

// Console log the output to see what is returned!
console.log(allImg)
