const recipesData = [
    {
      name: "Pizza Margherita",
      country: "Italy",
      image: "https://example.com/pizza-margherita.jpg",
      time: "30 min",
      ingredients: ["Flour", "Tomatoes", "Cheese", "Basil"],
      instructions: [
        "Mix flour and water to create dough.",
        "Spread dough, add tomato sauce and cheese.",
        "Bake in a preheated oven at 220°C for 15 minutes.",
      ],
      nutrition: {
        calories: 300,
        fat: "10g",
        protein: "12g",
        carbs: "36g",
      },
    },
    {
      name: "Butter Chicken",
      country: "India",
      image: "https://example.com/butter-chicken.jpg",
      time: "40 min",
      ingredients: ["Chicken", "Butter", "Cream", "Spices"],
      instructions: [
        "Marinate chicken with spices.",
        "Cook marinated chicken in butter.",
        "Add cream and simmer for 20 minutes.",
      ],
      nutrition: {
        calories: 450,
        fat: "25g",
        protein: "30g",
        carbs: "12g",
      },
    },
    // Add more recipes here...
  ];
  
  export default recipesData;
  