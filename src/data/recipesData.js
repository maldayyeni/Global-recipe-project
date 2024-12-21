const recipesData = [
    {
      name: "Pizza Margherita",
      country: "Italy",
      image: "https://images.unsplash.com/photo-1604908177520-472e9a7b7c8b",
      time: "30 min",
      ingredients: ["Flour", "Tomatoes", "Cheese", "Basil"],
      instructions: [
        "Mix flour and water to create dough.",
        "Spread dough, add tomato sauce and cheese.",
        "Bake in a preheated oven at 220°C for 15 minutes.",
      ],
      nutrition: {
        calories: 285,
        fat: "10g",
        protein: "12g",
        carbs: "36g",
      },
    },
    {
      name: "Pasta Carbonara",
      country: "Italy",
      image: "https://images.unsplash.com/photo-1512058564366-c9a8f8c7df4e",
      time: "20 min",
      ingredients: ["Pasta", "Eggs", "Pancetta", "Parmesan cheese"],
      instructions: [
        "Boil pasta until al dente.",
        "Cook pancetta in a pan until crispy.",
        "Mix eggs and Parmesan, then combine with pasta and pancetta.",
      ],
      nutrition: {
        calories: 310,
        fat: "12g",
        protein: "14g",
        carbs: "40g",
      },
    },
    {
      name: "Butter Chicken",
      country: "India",
      image: "https://images.unsplash.com/photo-1627332385566-9e6d56c76cd8",
      time: "40 min",
      ingredients: ["Chicken", "Butter", "Cream", "Spices"],
      instructions: [
        "Marinate chicken with spices.",
        "Cook marinated chicken in butter.",
        "Add cream and simmer for 20 minutes.",
      ],
      nutrition: {
        calories: 320,
        fat: "20g",
        protein: "28g",
        carbs: "5g",
      },
    },
    {
      name: "Paneer Tikka",
      country: "India",
      image: "https://images.unsplash.com/photo-1624699299300-8c68d9d027a4",
      time: "30 min",
      ingredients: ["Paneer", "Yogurt", "Spices", "Vegetables"],
      instructions: [
        "Marinate paneer and vegetables with yogurt and spices.",
        "Grill the marinated paneer and vegetables until golden brown.",
      ],
      nutrition: {
        calories: 220,
        fat: "14g",
        protein: "10g",
        carbs: "12g",
      },
    },
    {
      name: "Sushi",
      country: "Japan",
      image: "https://images.unsplash.com/photo-1562967916-eb82221dfb36",
      time: "50 min",
      ingredients: ["Sushi rice", "Seaweed", "Fish", "Soy sauce"],
      instructions: [
        "Cook sushi rice and let it cool.",
        "Place seaweed on a bamboo mat and spread rice evenly.",
        "Add fish and roll tightly.",
        "Slice into pieces and serve with soy sauce.",
      ],
      nutrition: {
        calories: 200,
        fat: "2g",
        protein: "14g",
        carbs: "36g",
      },
    },
    {
      name: "Ramen",
      country: "Japan",
      image: "https://images.unsplash.com/photo-1568051243852-1e30c87aa4a0",
      time: "40 min",
      ingredients: ["Noodles", "Broth", "Eggs", "Pork"],
      instructions: [
        "Boil noodles until cooked.",
        "Prepare broth with spices and simmer.",
        "Serve noodles in broth with boiled eggs and pork slices.",
      ],
      nutrition: {
        calories: 400,
        fat: "15g",
        protein: "25g",
        carbs: "45g",
      },
    },
    {
      name: "Colcannon Potatoes",
      country: "Ireland",
      ingredients: [
        "4 large potatoes, peeled and cubed",
        "1/2 head of cabbage, chopped",
        "1/4 cup butter",
        "1/4 cup milk",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Boil the potatoes until tender, about 15 minutes.",
        "In another pot, cook the chopped cabbage until soft.",
        "Mash the potatoes with butter and milk, then mix in the cooked cabbage.",
        "Season with salt and pepper and serve warm.",
      ],
      nutrition: {
        calories: 200,
        fat: "8g",
        protein: "4g",
        carbs: "30g",
      },
    },
    {
      name: "Irish Spiced Beef",
      country: "Ireland",
      ingredients: [
        "4 lbs beef brisket",
        "1/4 cup brown sugar",
        "1/4 cup salt",
        "1 tbsp ground cloves",
        "1 tbsp black pepper",
        "1 tsp ground nutmeg",
      ],
      instructions: [
        "Rub the beef with the spice mixture and refrigerate for 5 days.",
        "Preheat oven to 300°F (150°C).",
        "Bake the beef covered for 3 hours, then slice and serve.",
      ],
      nutrition: {
        calories: 268,
        fat: "8g",
        protein: "40g",
        carbs: "6g",
      },
    },
    // Add all remaining recipes here
  ];
  
  export default recipesData;
  