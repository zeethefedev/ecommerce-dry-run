export const BEANS = ["Arabica", "Robusta", "Liberica", "Excelsa"];
export const ORIGINS = ["Son La", "Kona", "Ethiopian", "Colombian"];
export const ROAST = ["light", "medium", "dark"];

export const PRODUCTS = [
  {
    id: 0,
    stock: 88,
    price: 11,
    sale: 0,
    description: "A delicious coffee product with a rich flavor and aroma.",
    name: "Robusta",
    roast: "dark",
    displayName: "Coffee 2",
    featureProduct: true,
  },
  {
    id: 1,
    description: "A delicious coffee product with a rich flavor and aroma.",
    name: "Robusta",
    stock: 98,
    sale: 2,
    roast: "dark",
    price: 11,
    displayName: "Coffee 2 Robusta Son la",
    featureProduct: true,
  },
  {
    id: 2,
    stock: 77,
    name: "Excelsa",
    description: "A delicious coffee product with a rich flavor and aroma.",
    roast: "medium",
    sale: 4,
    displayName: "Son La",
    price: 11,
    featureProduct: false,
  },
  {
    id: 3,
    displayName: "Ethiopian",
    roast: "medium",
    sale: 3,
    stock: 98,
    price: 5,
    name: "Liberica",
    description: "A delicious coffee product with a rich flavor and aroma.",
    featureProduct: true,
  },
  {
    id: 4,
    roast: "dark",
    sale: 2,
    name: "Excelsa",
    price: 7,
    description: "A delicious coffee product with a rich flavor and aroma.",
    displayName: "Kona",
    stock: 21,
    featureProduct: false,
  },
];

export const POSTS = [
  {
    id: 1,
    title: "Post 1: Introduction to JavaScript",
    heading: "Getting started with JavaScript",
    preview:
      "Learn the basics of JavaScript and start building your own projects",
    content: `JavaScript is a high-level, dynamic, and interpreted programming language. It's primarily used for client-side scripting on the web, allowing developers to create interactive web pages.

In this post, we'll cover the basics of JavaScript, including variables, data types, and functions. We'll also explore some of the most common use cases for JavaScript and provide resources for further learning.`,
  },
  {
    id: 2,
    title: "Post 2: Advanced JavaScript Concepts",
    heading: "Taking your JavaScript skills to the next level",
    preview:
      "Dive deeper into JavaScript and learn about advanced concepts like closures and the this keyword",
    content: `In this post, we'll explore some of the more advanced concepts in JavaScript, including closures, the this keyword, and prototype chains.

We'll also cover some of the latest features in JavaScript, including async/await and destructuring. By the end of this post, you'll have a solid understanding of advanced JavaScript concepts and be ready to tackle more complex projects.`,
  },
  {
    id: 3,
    title: "Post 3: JavaScript Frameworks",
    heading: "A guide to popular JavaScript frameworks",
    preview:
      "Learn about the most popular JavaScript frameworks and how to choose the right one for your project",
    content: `In this post, we'll explore some of the most popular JavaScript frameworks, including React, Angular, and Vue.js.

We'll cover the pros and cons of each framework, as well as some of the most common use cases. By the end of this post, you'll have a solid understanding of the JavaScript framework landscape and be able to choose the right framework for your next project.`,
  },
  {
    id: 4,
    title: "Post 4: JavaScript Best Practices",
    heading: "Writing clean, efficient, and scalable JavaScript code",
    preview:
      "Learn about best practices for writing JavaScript code, including code organization and performance optimization",
    content: `In this post, we'll cover some of the most important best practices for writing JavaScript code, including code organization, performance optimization, and error handling.

We'll also explore some of the most common pitfalls to avoid when writing JavaScript code and provide tips for writing clean, efficient, and scalable code.`,
  },
  {
    id: 5,
    title: "Post 5: JavaScript Tools and Resources",
    heading: "A guide to the best JavaScript tools and resources",
    preview:
      "Discover the best tools and resources for JavaScript development, including code editors and debugging tools",
    content: `In this post, we'll explore some of the best tools and resources for JavaScript development, including code editors, debugging tools, and project management tools.

We'll cover some of the most popular tools and resources, as well as some hidden gems that can help take your JavaScript development to the next level.`,
  },
];
