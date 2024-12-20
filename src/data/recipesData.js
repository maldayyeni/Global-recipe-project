// src/data/recipesData.js

const recipesData = {
    Italy: [
        {
            id: 1,
            name: 'Margherita Pizza',
            image: 'https://images.unsplash.com/photo-1601924582975-0f7e2983ab9c?auto=format&fit=crop&w=400&q=80',
            time: '30 minutes',
            ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella cheese', 'Basil leaves', 'Olive oil', 'Salt'],
            instructions: [
                'Preheat the oven to 475°F (245°C).',
                'Spread tomato sauce over the pizza dough.',
                'Add mozzarella cheese evenly on top.',
                'Bake for 15-20 minutes until the crust is golden.',
                'Garnish with fresh basil leaves and a drizzle of olive oil.',
            ],
            nutrition: {
                calories: 300,
                protein: '12g',
                fat: '10g',
                carbohydrates: '35g',
            },
        },
        // Add more Italian recipes
    ],
    Japan: [
        {
            id: 1,
            name: 'Salmon Sushi',
            image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=400&q=80',
            time: '20 minutes',
            ingredients: ['Sushi rice', 'Salmon slices', 'Nori sheets', 'Soy sauce', 'Wasabi', 'Pickled ginger'],
            instructions: [
                'Prepare sushi rice and let it cool.',
                'Place a nori sheet on a bamboo mat.',
                'Spread a thin layer of rice over the nori.',
                'Place salmon slices on top of the rice.',
                'Roll the sushi tightly using the mat.',
                'Slice into bite-sized pieces and serve with soy sauce, wasabi, and pickled ginger.',
            ],
            nutrition: {
                calories: 200,
                protein: '10g',
                fat: '5g',
                carbohydrates: '30g',
            },
        },
        // Add more Japanese recipes
    ],
    Mexico: [
        {
            id: 1,
            name: 'Beef Tacos',
            image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80',
            time: '25 minutes',
            ingredients: ['Taco shells', 'Ground beef', 'Taco seasoning', 'Lettuce', 'Cheddar cheese', 'Salsa'],
            instructions: [
                'Cook ground beef in a skillet over medium heat until browned.',
                'Add taco seasoning and water, simmer until thickened.',
                'Warm taco shells in the oven.',
                'Fill shells with seasoned beef, shredded lettuce, cheese, and salsa.',
            ],
            nutrition: {
                calories: 250,
                protein: '15g',
                fat: '12g',
                carbohydrates: '20g',
            },
        },
        // Add more Mexican recipes
    ],
    France: [
        {
            id: 1,
            name: 'Croissant',
            image: 'https://images.unsplash.com/photo-1548365328-5f6d7c7c1f0d?auto=format&fit=crop&w=400&q=80',
            time: '2 hours',
            ingredients: ['Flour', 'Butter', 'Milk', 'Yeast', 'Sugar', 'Salt', 'Egg'],
            instructions: [
                'Prepare the dough by mixing flour, milk, yeast, sugar, and salt.',
                'Incorporate butter into the dough through laminating folds.',
                'Chill the dough for at least 1 hour.',
                'Roll and shape the dough into croissants.',
                'Let them rise for 1 hour.',
                'Bake at 375°F (190°C) for 15-20 minutes until golden brown.',
            ],
            nutrition: {
                calories: 250,
                protein: '6g',
                fat: '12g',
                carbohydrates: '30g',
            },
        },
        // Add more French recipes
    ],
    India: [
        {
            id: 1,
            name: 'Butter Chicken',
            image: 'https://images.unsplash.com/photo-1604908177524-63b3c3b4c41c?auto=format&fit=crop&w=400&q=80',
            time: '45 minutes',
            ingredients: ['Chicken', 'Butter', 'Tomato puree', 'Cream', 'Garam masala', 'Garlic', 'Ginger'],
            instructions: [
                'Marinate chicken with yogurt and spices for 30 minutes.',
                'Cook chicken in butter until tender.',
                'Add tomato puree, garlic, and ginger, simmer for 15 minutes.',
                'Stir in cream and garam masala, cook for another 5 minutes.',
                'Serve with naan or rice.',
            ],
            nutrition: {
                calories: 400,
                protein: '25g',
                fat: '25g',
                carbohydrates: '20g',
            },
        },
        // Add more Indian recipes
    ],
    China: [
        {
            id: 1,
            name: 'Vegetable Dumplings',
            image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=400&q=80',
            time: '30 minutes',
            ingredients: ['Dumpling wrappers', 'Cabbage', 'Carrots', 'Green onions', 'Soy sauce', 'Ginger', 'Garlic'],
            instructions: [
                'Finely chop cabbage, carrots, and green onions.',
                'Mix vegetables with soy sauce, minced ginger, and garlic.',
                'Place a spoonful of filling in each dumpling wrapper.',
                'Fold and seal the dumplings.',
                'Steam or pan-fry the dumplings until cooked.',
            ],
            nutrition: {
                calories: 100,
                protein: '4g',
                fat: '2g',
                carbohydrates: '18g',
            },
        },
        // Add more Chinese recipes
    ],
    Spain: [
        {
            id: 1,
            name: 'Paella',
            image: 'https://images.unsplash.com/photo-1576795620014-32046bdfac3d?auto=format&fit=crop&w=400&q=80',
            time: '1 hour',
            ingredients: ['Rice', 'Saffron', 'Chicken', 'Seafood', 'Vegetables', 'Olive oil', 'Garlic'],
            instructions: [
                'Heat olive oil in a large pan and sauté garlic and vegetables.',
                'Add chicken and cook until browned.',
                'Add rice and saffron, stirring to coat.',
                'Pour in broth and bring to a simmer.',
                'Add seafood and cook until rice is tender and liquid is absorbed.',
                'Garnish with parsley and lemon wedges before serving.',
            ],
            nutrition: {
                calories: 450,
                protein: '20g',
                fat: '15g',
                carbohydrates: '50g',
            },
        },
        // Add more Spanish recipes
    ],
    Thailand: [
        {
            id: 1,
            name: 'Pad Thai',
            image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80',
            time: '25 minutes',
            ingredients: ['Rice noodles', 'Shrimp', 'Tofu', 'Bean sprouts', 'Eggs', 'Peanuts', 'Pad Thai sauce'],
            instructions: [
                'Soak rice noodles in warm water until soft.',
                'Heat oil in a wok and scramble the eggs.',
                'Add tofu and shrimp, cooking until shrimp turns pink.',
                'Add noodles and Pad Thai sauce, stirring to combine.',
                'Mix in bean sprouts and green onions.',
                'Serve garnished with crushed peanuts and lime wedges.',
            ],
            nutrition: {
                calories: 350,
                protein: '15g',
                fat: '12g',
                carbohydrates: '45g',
            },
        },
        // Add more Thai recipes
    ],
    Greece: [
        {
            id: 1,
            name: 'Moussaka',
            image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80',
            time: '1 hour 30 minutes',
            ingredients: ['Eggplant', 'Ground lamb', 'Tomato sauce', 'Potatoes', 'Bechamel sauce', 'Olive oil', 'Garlic'],
            instructions: [
                'Slice and roast eggplants and potatoes until tender.',
                'Cook ground lamb with garlic and tomato sauce.',
                'Layer potatoes, eggplants, and meat sauce in a baking dish.',
                'Pour bechamel sauce over the top.',
                'Bake at 375°F (190°C) for 45 minutes until golden brown.',
                'Let it rest before serving.',
            ],
            nutrition: {
                calories: 500,
                protein: '25g',
                fat: '30g',
                carbohydrates: '35g',
            },
        },
        // Add more Greek recipes
    ],
    Lebanon: [
        {
            id: 1,
            name: 'Hummus',
            image: 'https://images.unsplash.com/photo-1598514982304-5af3b2ad3e5e?auto=format&fit=crop&w=400&q=80',
            time: '15 minutes',
            ingredients: ['Chickpeas', 'Tahini', 'Lemon juice', 'Garlic', 'Olive oil', 'Salt', 'Paprika'],
            instructions: [
                'Blend chickpeas, tahini, lemon juice, garlic, and salt until smooth.',
                'Gradually add olive oil while blending to achieve creamy consistency.',
                'Transfer to a serving bowl and drizzle with olive oil.',
                'Sprinkle paprika on top for garnish.',
                'Serve with pita bread or vegetable sticks.',
            ],
            nutrition: {
                calories: 180,
                protein: '6g',
                fat: '14g',
                carbohydrates: '15g',
            },
        },
        // Add more Lebanese recipes
    ],
    Brazil: [
        {
            id: 1,
            name: 'Feijoada',
            image: 'https://images.unsplash.com/photo-1601924582975-0f7e2983ab9c?auto=format&fit=crop&w=400&q=80',
            time: '2 hours',
            ingredients: ['Black beans', 'Pork', 'Sausage', 'Onions', 'Garlic', 'Bay leaves', 'Orange'],
            instructions: [
                'Soak black beans overnight.',
                'Cook beans with pork, sausage, onions, garlic, and bay leaves until tender.',
                'Season with salt and pepper to taste.',
                'Serve with orange slices, rice, and collard greens.',
            ],
            nutrition: {
                calories: 600,
                protein: '35g',
                fat: '25g',
                carbohydrates: '55g',
            },
        },
        // Add more Brazilian recipes
    ],
    Morocco: [
        {
            id: 1,
            name: 'Tagine',
            image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80',
            time: '1 hour',
            ingredients: ['Chicken', 'Apricots', 'Almonds', 'Onions', 'Garlic', 'Cinnamon', 'Saffron'],
            instructions: [
                'Brown the chicken pieces in a tagine or heavy pot.',
                'Add onions and garlic, sauté until translucent.',
                'Stir in spices: cinnamon, saffron, salt, and pepper.',
                'Add apricots and a bit of water, cover, and simmer for 45 minutes.',
                'Garnish with toasted almonds before serving.',
                'Serve with couscous or bread.',
            ],
            nutrition: {
                calories: 400,
                protein: '30g',
                fat: '20g',
                carbohydrates: '25g',
            },
        },
        // Add more Moroccan recipes
    ],
    Turkey: [
        {
            id: 1,
            name: 'Kebab',
            image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80',
            time: '30 minutes',
            ingredients: ['Lamb', 'Onions', 'Garlic', 'Yogurt', 'Paprika', 'Cumin', 'Salt', 'Pepper'],
            instructions: [
                'Marinate lamb chunks with yogurt, minced garlic, paprika, cumin, salt, and pepper for at least 1 hour.',
                'Skewer the marinated lamb pieces alternately with onions.',
                'Grill the kebabs on medium heat until cooked through.',
                'Serve with flatbread, rice, or salad.',
            ],
            nutrition: {
                calories: 350,
                protein: '25g',
                fat: '20g',
                carbohydrates: '10g',
            },
        },
        // Add more Turkish recipes
    ],
    Vietnam: [
        {
            id: 1,
            name: 'Pho',
            image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80',
            time: '1 hour',
            ingredients: ['Beef bones', 'Rice noodles', 'Beef slices', 'Onions', 'Ginger', 'Spices', 'Basil', 'Lime'],
            instructions: [
                'Prepare the broth by simmering beef bones with onions, ginger, and spices for several hours.',
                'Strain the broth and season to taste.',
                'Cook rice noodles according to package instructions.',
                'Place cooked noodles in bowls, add raw beef slices on top.',
                'Pour hot broth over the beef to cook it.',
                'Garnish with fresh basil, lime wedges, and other toppings as desired.',
            ],
            nutrition: {
                calories: 350,
                protein: '20g',
                fat: '10g',
                carbohydrates: '45g',
            },
        },
        // Add more Vietnamese recipes
    ],
    Russia: [
        {
            id: 1,
            name: 'Borscht',
            image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80',
            time: '1 hour',
            ingredients: ['Beets', 'Cabbage', 'Carrots', 'Potatoes', 'Onions', 'Tomato paste', 'Beef broth', 'Sour cream'],
            instructions: [
                'Sauté onions, carrots, and beets in a pot until softened.',
                'Add tomato paste and cook for a few minutes.',
                'Pour in beef broth and add potatoes and cabbage.',
                'Simmer until all vegetables are tender.',
                'Season with salt, pepper, and herbs.',
                'Serve hot with a dollop of sour cream.',
            ],
            nutrition: {
                calories: 180,
                protein: '5g',
                fat: '8g',
                carbohydrates: '25g',
            },
        },
        // Add more Russian recipes
    ],
    SouthKorea: [
        {
            id: 1,
            name: 'Bibimbap',
            image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80',
            time: '30 minutes',
            ingredients: ['Rice', 'Vegetables', 'Beef', 'Eggs', 'Gochujang', 'Sesame oil', 'Garlic'],
            instructions: [
                'Cook rice and set aside.',
                'Sauté assorted vegetables separately with garlic and sesame oil.',
                'Cook beef strips with soy sauce and sugar.',
                'Fry eggs sunny-side up.',
                'Assemble the bowl by placing rice at the bottom, arranging vegetables and beef on top.',
                'Place the fried egg in the center.',
                'Serve with gochujang sauce and mix before eating.',
            ],
            nutrition: {
                calories: 400,
                protein: '15g',
                fat: '12g',
                carbohydrates: '55g',
            },
        },
        // Add more South Korean recipes
    ],
    Germany: [
        {
            id: 1,
            name: 'Sauerbraten',
            image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80',
            time: '3 hours',
            ingredients: ['Beef roast', 'Vinegar', 'Water', 'Onions', 'Carrots', 'Celery', 'Cloves', 'Bay leaves'],
            instructions: [
                'Marinate the beef roast in a mixture of vinegar, water, onions, carrots, celery, cloves, and bay leaves for 24 hours.',
                'Remove the beef from the marinade and pat dry.',
                'Brown the roast in a pot.',
                'Add the marinade liquid and vegetables to the pot.',
                'Simmer for 2-3 hours until the beef is tender.',
                'Serve with gravy, red cabbage, and dumplings.',
            ],
            nutrition: {
                calories: 500,
                protein: '40g',
                fat: '25g',
                carbohydrates: '20g',
            },
        },
        // Add more German recipes
    ],
    Canada: [
        {
            id: 1,
            name: 'Poutine',
            image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80',
            time: '20 minutes',
            ingredients: ['French fries', 'Cheese curds', 'Gravy'],
            instructions: [
                'Prepare French fries by baking or frying until crispy.',
                'Place fries on a serving plate.',
                'Top with cheese curds while fries are still hot.',
                'Pour hot gravy over the fries and cheese curds.',
                'Serve immediately.',
            ],
            nutrition: {
                calories: 450,
                protein: '10g',
                fat: '25g',
                carbohydrates: '45g',
            },
        },
        // Add more Canadian recipes
    ],
    USA: [
        {
            id: 1,
            name: 'Burger',
            image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80',
            time: '15 minutes',
            ingredients: ['Ground beef', 'Burger buns', 'Lettuce', 'Tomato', 'Onions', 'Cheddar cheese', 'Ketchup', 'Mustard'],
            instructions: [
                'Form ground beef into patties and season with salt and pepper.',
                'Grill or pan-fry the patties to desired doneness.',
                'Toast the burger buns lightly.',
                'Assemble the burger by placing the patty on the bun, adding cheese, lettuce, tomato, onions, and condiments.',
                'Serve with fries or your favorite side.',
            ],
            nutrition: {
                calories: 500,
                protein: '25g',
                fat: '30g',
                carbohydrates: '40g',
            },
        },
        // Add more USA recipes
    ],
    Australia: [
        {
            id: 1,
            name: 'Meat Pie',
            image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80',
            time: '1 hour',
            ingredients: ['Pie crust', 'Ground beef', 'Onions', 'Garlic', 'Beef broth', 'Worcestershire sauce', 'Flour'],
            instructions: [
                'Preheat the oven to 400°F (200°C).',
                'Mix ground beef with onions and garlic until browned.',
                'Stir in flour and cook for 1 minute.',
                'Add beef broth and Worcestershire sauce, simmer until thickened.',
                'Fill pie crust with the beef mixture.',
                'Cover with top crust and seal the edges.',
                'Bake for 30-35 minutes until golden brown.',
            ],
            nutrition: {
                calories: 450,
                protein: '20g',
                fat: '25g',
                carbohydrates: '35g',
            },
        },
        // Add more Australian recipes
    ],
    Netherlands: [
        {
            id: 1,
            name: 'Stroopwafel',
            image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80',
            time: '1 hour',
            ingredients: ['Flour', 'Butter', 'Sugar', 'Yeast', 'Milk', 'Cinnamon', 'Caramel syrup'],
            instructions: [
                'Prepare the dough by mixing flour, butter, sugar, yeast, and milk.',
                'Let the dough rise for 30 minutes.',
                'Divide the dough into small balls and flatten them in a waffle iron.',
                'Cook until golden brown.',
                'Cut the waffles horizontally and spread caramel syrup between the layers.',
                'Press the layers together and let cool.',
            ],
            nutrition: {
                calories: 250,
                protein: '4g',
                fat: '12g',
                carbohydrates: '30g',
            },
        },
        // Add more Dutch recipes
    ],
    Sweden: [
        {
            id: 1,
            name: 'Meatballs',
            image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80',
            time: '40 minutes',
            ingredients: ['Ground beef', 'Breadcrumbs', 'Onion', 'Egg', 'Milk', 'Salt', 'Pepper', 'Nutmeg'],
            instructions: [
                'Mix ground beef with breadcrumbs, finely chopped onion, egg, and milk.',
                'Season with salt, pepper, and nutmeg.',
                'Form the mixture into small meatballs.',
                'Pan-fry the meatballs until browned and cooked through.',
                'Serve with gravy, mashed potatoes, and lingonberry jam.',
            ],
            nutrition: {
                calories: 300,
                protein: '20g',
                fat: '18g',
                carbohydrates: '15g',
            },
        },
        // Add more Swedish recipes
    ],
    Egypt: [
        {
            id: 1,
            name: 'Koshari',
            image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80',
            time: '45 minutes',
            ingredients: ['Rice', 'Lentils', 'Macaroni', 'Tomato sauce', 'Onions', 'Garlic', 'Vinegar', 'Cumin'],
            instructions: [
                'Cook rice, lentils, and macaroni separately.',
                'Prepare the tomato sauce by sautéing onions and garlic, then adding tomato paste and spices.',
                'Mix rice, lentils, and macaroni in a large bowl.',
                'Pour the tomato sauce over the mixture.',
                'Top with crispy fried onions and a splash of vinegar.',
                'Serve warm.',
            ],
            nutrition: {
                calories: 400,
                protein: '15g',
                fat: '10g',
                carbohydrates: '60g',
            },
        },
        // Add more Egyptian recipes
    ],
    Portugal: [
        {
            id: 1,
            name: 'Bacalhau',
            image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80',
            time: '1 hour',
            ingredients: ['Salted cod', 'Potatoes', 'Onions', 'Olive oil', 'Garlic', 'Black olives', 'Parsley'],
            instructions: [
                'Soak salted cod overnight to remove excess salt.',
                'Boil potatoes until tender, then slice.',
                'Sauté onions and garlic in olive oil until translucent.',
                'Layer potatoes, cod, and onions in a baking dish.',
                'Drizzle with more olive oil and top with black olives.',
                'Bake at 375°F (190°C) for 30 minutes.',
                'Garnish with fresh parsley before serving.',
            ],
            nutrition: {
                calories: 350,
                protein: '25g',
                fat: '15g',
                carbohydrates: '30g',
            },
        },
        // Add more Portuguese recipes
    ],
    Argentina: [
        {
            id: 1,
            name: 'Asado',
            image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80',
            time: '2 hours',
            ingredients: ['Beef ribs', 'Sausages', 'Chorizo', 'Salt', 'Garlic', 'Rosemary'],
            instructions: [
                'Season beef ribs with salt, garlic, and rosemary.',
                'Preheat the grill to medium-high heat.',
                'Grill the beef ribs for about 1.5 hours, turning occasionally.',
                'Add sausages and chorizo during the last 30 minutes of grilling.',
                'Serve hot with chimichurri sauce and side dishes.',
            ],
            nutrition: {
                calories: 600,
                protein: '40g',
                fat: '40g',
                carbohydrates: '10g',
            },
        },
        // Add more Argentine recipes
    ],
    Nigeria: [
        {
            id: 1,
            name: 'Jollof Rice',
            image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80',
            time: '35 minutes',
            ingredients: ['Rice', 'Tomatoes', 'Onions', 'Bell peppers', 'Chicken', 'Tomato paste', 'Spices'],
            instructions: [
                'Blend tomatoes, bell peppers, and onions into a smooth puree.',
                'Sauté onions in oil, then add tomato paste and cook for a few minutes.',
                'Add the tomato and pepper puree and cook until the oil separates.',
                'Add spices and stir well.',
                'Add rice and stir to coat with the sauce.',
                'Pour in water or broth, bring to a boil, then simmer until rice is cooked.',
                'Add cooked chicken pieces and mix gently.',
                'Serve with fried plantains or salad.',
            ],
            nutrition: {
                calories: 450,
                protein: '20g',
                fat: '15g',
                carbohydrates: '60g',
            },
        },
        // Add more Nigerian recipes
    ],
    Switzerland: [
        {
            id: 1,
            name: 'Fondue',
            image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80',
            time: '30 minutes',
            ingredients: ['Gruyère cheese', 'Emmental cheese', 'Garlic', 'White wine', 'Kirsch', 'Nutmeg', 'Black pepper'],
            instructions: [
                'Rub a fondue pot with a cut garlic clove.',
                'Heat white wine in the pot until hot but not boiling.',
                'Gradually add shredded Gruyère and Emmental cheese, stirring until melted.',
                'Stir in kirsch, nutmeg, and black pepper.',
                'Keep the fondue warm over a low flame.',
                'Serve with cubes of crusty bread for dipping.',
            ],
            nutrition: {
                calories: 500,
                protein: '25g',
                fat: '35g',
                carbohydrates: '20g',
            },
        },
        // Add more Swiss recipes
    ],
    Belgium: [
        {
            id: 1,
            name: 'Belgian Waffles',
            image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80',
            time: '20 minutes',
            ingredients: ['Flour', 'Milk', 'Eggs', 'Sugar', 'Butter', 'Baking powder', 'Vanilla extract'],
            instructions: [
                'Preheat the waffle iron.',
                'Mix flour, sugar, and baking powder in a bowl.',
                'In another bowl, whisk milk, eggs, melted butter, and vanilla extract.',
                'Combine wet and dry ingredients until smooth.',
                'Pour batter onto the hot waffle iron and cook until golden brown.',
                'Serve with syrup, whipped cream, or fresh fruits.',
            ],
            nutrition: {
                calories: 350,
                protein: '8g',
                fat: '18g',
                carbohydrates: '40g',
            },
        },
        // Add more Belgian recipes
    ],
    Denmark: [
        {
            id: 1,
            name: 'Smørrebrød',
            image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80',
            time: '15 minutes',
            ingredients: ['Rye bread', 'Butter', 'Cold cuts', 'Cheese', 'Pickles', 'Onions', 'Herbs'],
            instructions: [
                'Spread a thin layer of butter on slices of rye bread.',
                'Arrange cold cuts or fish on top of the buttered bread.',
                'Add slices of cheese as desired.',
                'Garnish with pickles, onions, and fresh herbs.',
                'Serve open-faced as appetizers or snacks.',
            ],
            nutrition: {
                calories: 250,
                protein: '10g',
                fat: '15g',
                carbohydrates: '20g',
            },
        },
        // Add more Danish recipes
    ],
    Peru: [
        {
            id: 1,
            name: 'Ceviche',
            image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80',
            time: '25 minutes',
            ingredients: ['Fresh fish', 'Lime juice', 'Red onions', 'Chili peppers', 'Cilantro', 'Salt'],
            instructions: [
                'Cut fresh fish into bite-sized pieces.',
                'Marinate the fish in fresh lime juice for 15 minutes until it turns opaque.',
                'Slice red onions thinly and soak in cold water to reduce bitterness.',
                'Mix the marinated fish with onions, chopped chili peppers, cilantro, and salt.',
                'Serve chilled with sweet potato or corn on the side.',
            ],
            nutrition: {
                calories: 200,
                protein: '25g',
                fat: '5g',
                carbohydrates: '10g',
            },
        },
        // Add more Peruvian recipes
    ],
};

export default recipesData;
