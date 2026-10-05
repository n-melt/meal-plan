// estimatedCost values updated 05/10/2026 from current retailer website pricing.
// Values are approximate per-recipe ingredient-use estimates, not consolidated checkout totals.
// Shared ingredients, package sizes, branch-specific pricing, taxes, and promotions can change actual spend.

window.WEEKLY_PLAN_META = {
  id: "12/10/2026",
  weekStart: "12/10/2026",
  weekEnd: "18/10/2026",
  label: "12/10/2026–18/10/2026"
};

window.WEEKLY_MEALS = [
  {
    id: "chicken-saag",
    name: "Chicken Saag",
    cuisine: "Indian",
    newMeal: false,
    servings: 4,
    proteinPerServing: 72,
    estimatedCost: 16.20,
    ingredients: [
      { item: "chicken breast", quantity: 2.5, unit: "lb", store: "ALDI" },
      { item: "frozen spinach", quantity: 2, unit: "bags", store: "ALDI" },
      { item: "plain Greek yogurt", quantity: 1, unit: "container", store: "Kroger" },
      { item: "onion", quantity: 1, unit: "whole", store: "ALDI" },
      { item: "garam masala", quantity: 2, unit: "tbsp", store: "Kroger" },
      { item: "basmati rice", quantity: 2, unit: "cups dry", store: "Trader Joe's" }
    ],
    recipe: {
      prepMinutes: 15,
      cookMinutes: 35,
      steps: [
        "Cook the basmati rice.",
        "Brown diced chicken with onion and garam masala.",
        "Add spinach and a small amount of water; simmer until the chicken is cooked through.",
        "Stir in yogurt off heat and season to taste.",
        "Serve over rice."
      ]
    }
  },
  {
    id: "turkey-bolognese",
    name: "Turkey Bolognese",
    cuisine: "Italian",
    newMeal: false,
    servings: 4,
    proteinPerServing: 64,
    estimatedCost: 16.44,
    ingredients: [
      { item: "ground turkey", quantity: 2.5, unit: "lb", store: "ALDI" },
      { item: "pasta", quantity: 1, unit: "lb", store: "Kroger" },
      { item: "crushed tomatoes", quantity: 2, unit: "cans", store: "Kroger" },
      { item: "onion", quantity: 1, unit: "whole", store: "ALDI" },
      { item: "carrots", quantity: 2, unit: "whole", store: "ALDI" },
      { item: "parmesan", quantity: 1, unit: "container", store: "Trader Joe's" }
    ],
    recipe: {
      prepMinutes: 15,
      cookMinutes: 40,
      steps: [
        "Cook pasta until al dente.",
        "Brown turkey with finely chopped onion and carrots.",
        "Add crushed tomatoes and simmer until thickened.",
        "Toss with pasta and finish with parmesan."
      ]
    }
  },
  {
    id: "chicken-tortilla-soup",
    name: "Chicken Tortilla Soup",
    cuisine: "Mexican",
    newMeal: false,
    servings: 4,
    proteinPerServing: 58,
    estimatedCost: 10.87,
    ingredients: [
      { item: "chicken breast", quantity: 2, unit: "lb", store: "ALDI" },
      { item: "black beans", quantity: 2, unit: "cans", store: "Kroger" },
      { item: "corn", quantity: 1, unit: "bag", store: "ALDI" },
      { item: "diced tomatoes", quantity: 1, unit: "large can", store: "Kroger" },
      { item: "corn tortillas", quantity: 8, unit: "count", store: "Kroger" },
      { item: "lime", quantity: 2, unit: "whole", store: "Kroger" }
    ],
    recipe: {
      prepMinutes: 15,
      cookMinutes: 35,
      steps: [
        "Simmer chicken with tomatoes and enough broth to make a soup base.",
        "Shred the chicken and return it to the pot.",
        "Add black beans and corn and simmer until hot.",
        "Slice tortillas into strips and toast until crisp.",
        "Serve with tortilla strips and lime."
      ]
    }
  },
  {
    id: "thai-red-curry-chicken",
    name: "Thai Red Curry Chicken",
    cuisine: "Thai",
    newMeal: false,
    servings: 4,
    proteinPerServing: 66,
    estimatedCost: 19.42,
    ingredients: [
      { item: "chicken thighs", quantity: 2.5, unit: "lb", store: "ALDI" },
      { item: "coconut milk", quantity: 2, unit: "cans", store: "Trader Joe's" },
      { item: "red curry paste", quantity: 1, unit: "jar", store: "Kroger" },
      { item: "bell peppers", quantity: 2, unit: "whole", store: "ALDI" },
      { item: "green beans", quantity: 1, unit: "lb", store: "ALDI" },
      { item: "jasmine rice", quantity: 2, unit: "cups dry", store: "Trader Joe's" }
    ],
    recipe: {
      prepMinutes: 15,
      cookMinutes: 30,
      steps: [
        "Cook jasmine rice.",
        "Brown sliced chicken thighs.",
        "Add curry paste and cook briefly until fragrant.",
        "Add coconut milk, peppers, and green beans; simmer until the chicken is cooked through.",
        "Serve over rice."
      ]
    }
  },
  {
    id: "beef-barley-soup",
    name: "Beef and Barley Soup",
    cuisine: "American",
    newMeal: false,
    servings: 4,
    proteinPerServing: 54,
    estimatedCost: 25.10,
    ingredients: [
      { item: "beef stew meat", quantity: 2, unit: "lb", store: "Kroger" },
      { item: "pearled barley", quantity: 1.5, unit: "cups dry", store: "Kroger" },
      { item: "carrots", quantity: 4, unit: "whole", store: "ALDI" },
      { item: "celery", quantity: 4, unit: "stalks", store: "ALDI" },
      { item: "onion", quantity: 1, unit: "whole", store: "ALDI" },
      { item: "beef broth", quantity: 2, unit: "cartons", store: "Kroger" }
    ],
    recipe: {
      prepMinutes: 20,
      cookMinutes: 60,
      steps: [
        "Brown the beef in a large pot.",
        "Add chopped onion, carrots, and celery and cook briefly.",
        "Add barley and broth.",
        "Simmer until the beef and barley are tender.",
        "Season and serve."
      ]
    }
  },
  {
    id: "chicken-piccata-potatoes",
    name: "Chicken Piccata with Roasted Potatoes",
    cuisine: "Italian-American",
    newMeal: false,
    servings: 4,
    proteinPerServing: 70,
    estimatedCost: 11.37,
    ingredients: [
      { item: "chicken breast", quantity: 2.5, unit: "lb", store: "ALDI" },
      { item: "potatoes", quantity: 2.5, unit: "lb", store: "ALDI" },
      { item: "lemons", quantity: 2, unit: "whole", store: "Kroger" },
      { item: "capers", quantity: 1, unit: "jar", store: "Kroger" },
      { item: "butter", quantity: 4, unit: "tbsp", store: "ALDI" },
      { item: "flour", quantity: 0.5, unit: "cup", store: "Kroger" }
    ],
    recipe: {
      prepMinutes: 20,
      cookMinutes: 35,
      steps: [
        "Roast chopped potatoes at 425°F until browned and tender.",
        "Slice chicken into thin cutlets and lightly coat with flour.",
        "Pan-sear chicken until cooked through.",
        "Make a quick pan sauce with lemon, capers, butter, and a splash of water.",
        "Serve chicken with sauce and roasted potatoes."
      ]
    }
  },
  {
    id: "smoky-chicken-black-bean-bowls",
    name: "Smoky Chicken and Black Bean Bowls",
    cuisine: "Mexican-inspired",
    newMeal: false,
    servings: 4,
    proteinPerServing: 68,
    estimatedCost: 11.72,
    ingredients: [
      { item: "chicken breast", quantity: 2.25, unit: "lb", store: "ALDI" },
      { item: "black beans", quantity: 2, unit: "cans", store: "Kroger" },
      { item: "brown rice", quantity: 2, unit: "cups dry", store: "Kroger" },
      { item: "frozen corn", quantity: 1, unit: "bag", store: "ALDI" },
      { item: "salsa", quantity: 1, unit: "jar", store: "Kroger" },
      { item: "avocado", quantity: 2, unit: "whole", store: "ALDI" }
    ],
    recipe: {
      prepMinutes: 15,
      cookMinutes: 30,
      steps: [
        "Cook brown rice.",
        "Season and cook chicken until browned and cooked through.",
        "Warm black beans and corn.",
        "Slice chicken and assemble bowls with rice, beans, corn, salsa, and avocado."
      ]
    }
  },
  {
    id: "japanese-oyakodon",
    name: "Oyakodon",
    cuisine: "Japanese",
    newMeal: true,
    servings: 4,
    proteinPerServing: 56,
    estimatedCost: 10.72,
    ingredients: [
      { item: "chicken thighs", quantity: 2, unit: "lb", store: "ALDI" },
      { item: "eggs", quantity: 8, unit: "count", store: "ALDI" },
      { item: "yellow onion", quantity: 2, unit: "whole", store: "ALDI" },
      { item: "soy sauce", quantity: 0.25, unit: "cup", store: "Kroger" },
      { item: "short-grain rice", quantity: 2, unit: "cups dry", store: "Trader Joe's" },
      { item: "green onions", quantity: 1, unit: "bunch", store: "Kroger" }
    ],
    recipe: {
      prepMinutes: 15,
      cookMinutes: 25,
      steps: [
        "Cook the rice.",
        "Simmer sliced onion and chicken in a lightly seasoned soy-based broth until the chicken is cooked.",
        "Pour beaten eggs over the chicken and cover until softly set.",
        "Spoon the mixture over rice and garnish with green onions."
      ]
    }
  },
  {
    id: "ethiopian-doro-wat-inspired",
    name: "Doro Wat-Inspired Chicken Stew",
    cuisine: "Ethiopian-inspired",
    newMeal: true,
    servings: 4,
    proteinPerServing: 62,
    estimatedCost: 13.12,
    ingredients: [
      { item: "chicken thighs", quantity: 2.5, unit: "lb", store: "ALDI" },
      { item: "yellow onions", quantity: 3, unit: "whole", store: "ALDI" },
      { item: "berbere seasoning", quantity: 3, unit: "tbsp", store: "Kroger" },
      { item: "tomato paste", quantity: 1, unit: "can", store: "Kroger" },
      { item: "eggs", quantity: 4, unit: "count", store: "ALDI" },
      { item: "rice", quantity: 2, unit: "cups dry", store: "Trader Joe's" }
    ],
    recipe: {
      prepMinutes: 20,
      cookMinutes: 55,
      steps: [
        "Slowly cook sliced onions until very soft and browned.",
        "Add berbere and tomato paste and cook until fragrant.",
        "Add chicken and enough water to braise; simmer until tender.",
        "Hard-boil the eggs, peel them, and add them to the stew near the end.",
        "Serve with rice."
      ]
    }
  },
  {
    id: "turkey-white-bean-skillet",
    name: "Turkey, White Bean, and Tomato Skillet",
    cuisine: "American",
    newMeal: false,
    servings: 4,
    proteinPerServing: 63,
    estimatedCost: 17.12,
    ingredients: [
      { item: "ground turkey", quantity: 2.25, unit: "lb", store: "ALDI" },
      { item: "white beans", quantity: 2, unit: "cans", store: "Kroger" },
      { item: "diced tomatoes", quantity: 1, unit: "large can", store: "Kroger" },
      { item: "spinach", quantity: 1, unit: "bag", store: "ALDI" },
      { item: "onion", quantity: 1, unit: "whole", store: "ALDI" },
      { item: "whole grain bread", quantity: 1, unit: "loaf", store: "Kroger" }
    ],
    recipe: {
      prepMinutes: 10,
      cookMinutes: 25,
      steps: [
        "Brown turkey with chopped onion.",
        "Add tomatoes and white beans and simmer until slightly thickened.",
        "Fold in spinach until wilted.",
        "Serve with toasted whole grain bread."
      ]
    }
  }
];

if (typeof window.loadWeeklyMeals === "function") {
  window.loadWeeklyMeals(window.WEEKLY_MEALS);
}
