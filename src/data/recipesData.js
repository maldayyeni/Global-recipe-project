// src/data/recipesData.js

const recipesData = {
  Italy: [
    {
      name: "Pizza Margherita",
      image: "https://images.unsplash.com/photo-1604908177520-472e9a7b7c8b",
      time: "30 min",
      ingredients: ["Flour", "Tomatoes", "Cheese", "Basil"],
      instructions: [
        "Mix flour and water to create dough.",
        "Spread dough, add tomato sauce and cheese.",
        "Bake in a preheated oven at 220°C for 15 minutes.",
      ],
    },
    {
      name: "Pasta Carbonara",
      image: "https://images.unsplash.com/photo-1512058564366-c9a8f8c7df4e",
      time: "20 min",
      ingredients: ["Pasta", "Eggs", "Pancetta", "Parmesan cheese"],
      instructions: [
        "Boil pasta until al dente.",
        "Cook pancetta in a pan until crispy.",
        "Mix eggs and Parmesan, then combine with pasta and pancetta.",
      ],
    },
  ],
  India: [
    {
      name: "Butter Chicken",
      image: "https://images.unsplash.com/photo-1627332385566-9e6d56c76cd8",
      time: "40 min",
      ingredients: ["Chicken", "Butter", "Cream", "Spices"],
      instructions: [
        "Marinate chicken with spices.",
        "Cook marinated chicken in butter.",
        "Add cream and simmer for 20 minutes.",
      ],
    },
    {
      name: "Paneer Tikka",
      image: "https://images.unsplash.com/photo-1624699299300-8c68d9d027a4",
      time: "30 min",
      ingredients: ["Paneer", "Yogurt", "Spices", "Vegetables"],
      instructions: [
        "Marinate paneer and vegetables with yogurt and spices.",
        "Grill the marinated paneer and vegetables until golden brown.",
      ],
    },
  ],
  Japan: [
    {
      name: "Sushi",
      image: "https://images.unsplash.com/photo-1562967916-eb82221dfb36",
      time: "50 min",
      ingredients: ["Sushi rice", "Seaweed", "Fish", "Soy sauce"],
      instructions: [
        "Cook sushi rice and let it cool.",
        "Place seaweed on a bamboo mat and spread rice evenly.",
        "Add fish and roll tightly.",
        "Slice into pieces and serve with soy sauce.",
      ],
    },
    {
      name: "Ramen",
      image: "https://images.unsplash.com/photo-1568051243852-1e30c87aa4a0",
      time: "40 min",
      ingredients: ["Noodles", "Broth", "Eggs", "Pork"],
      instructions: [
        "Boil noodles until cooked.",
        "Prepare broth with spices and simmer.",
        "Serve noodles in broth with boiled eggs and pork slices.",
      ],
    },
  ],
  Mexico: [
    {
      name: "Tacos",
      image: "https://images.unsplash.com/photo-1625701629703-44f24f9e2f41",
      time: "30 min",
      ingredients: ["Tortillas", "Beef", "Lettuce", "Cheese", "Salsa"],
      instructions: [
        "Cook beef with spices.",
        "Fill tortillas with beef, lettuce, cheese, and salsa.",
        "Fold tortillas and serve.",
      ],
    },
    {
      name: "Guacamole",
      image: "https://images.unsplash.com/photo-1611078480648-fb9c0a7d7433",
      time: "10 min",
      ingredients: ["Avocado", "Tomatoes", "Onions", "Lime", "Cilantro"],
      instructions: [
        "Mash avocados.",
        "Mix with chopped tomatoes, onions, lime juice, and cilantro.",
        "Serve as a dip.",
      ],
    },
  ],
  Ireland: [
    {
      name: "Colcannon Potatoes",
      image: "https://images.unsplash.com/photo-1595502120916-dfefdd186f87",
      time: "40 min",
      ingredients: ["Potatoes", "Cabbage", "Butter", "Milk", "Salt"],
      instructions: [
        "Boil potatoes until tender.",
        "Mash potatoes with butter and milk, then mix with cooked cabbage.",
        "Season with salt and serve.",
      ],
    },
    {
      name: "Irish Spiced Beef",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
      time: "5 days (prep + cooking)",
      ingredients: ["Beef", "Salt", "Sugar", "Spices"],
      instructions: [
        "Rub beef with salt, sugar, and spices.",
        "Refrigerate for 5 days, turning occasionally.",
        "Cook in a preheated oven at 140°C for 4 hours.",
      ],
    },
  ],
  // More countries and recipes below (e.g., Scotland, England, Germany, France, China, etc.)
  // Add as needed, following the same structure.
};

export default recipesData;
