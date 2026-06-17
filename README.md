# Odin Shopping Cart

A modern and responsive shopping cart application built with React, Vite, React Router, Context API, and Tailwind CSS.

## Features

* Browse products from an external API
* Add products to cart
* Increase and decrease product quantity
* Remove products from cart
* Dynamic cart item counter in the navbar
* Cart total calculation
* Responsive design for desktop and mobile devices
* Add-to-cart success feedback animation
* Persistent cart using Local Storage
* Client-side routing with React Router

## Tech Stack

* React
* Vite
* JavaScript (ES6+)
* React Router
* Context API
* Tailwind CSS
* Fake Store API

## Installation

Clone the repository:

```bash
git clone https://github.com/Fakecloak/odin-shopping-cart.git
```

Navigate to the project directory:

```bash
cd odin-shopping-cart
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── CartItem.jsx
│   └── CartSummary.jsx
│
├── context/
│   └── CartContext.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   └── Cart.jsx
│
├── router/
│   └── routes.jsx
│
├── assets/
│
└── main.jsx
```

## Learning Outcomes

This project helped reinforce:

* React component architecture
* State management with Context API
* React Router navigation
* Working with external APIs
* Local Storage persistence
* Responsive UI design using Tailwind CSS
* Managing derived state using array methods such as map, filter, and reduce

## Live Demo

Add your deployed application link here.

## Acknowledgements

* The Odin Project
* Fake Store API
* React Documentation
* Tailwind CSS Documentation
