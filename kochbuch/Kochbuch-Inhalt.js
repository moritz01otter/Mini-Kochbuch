const recipes = [
    {
        title: "Spaghetti Aglio e Olio",
        description: "Ein einfaches italienisches Pasta-Rezept mit Knoblauch und Olivenöl.",
        ingredients: ["200g Spaghetti", "4 Knoblauchzehen", "50ml Olivenöl", "1 Prise Chiliflocken", "Salz", "Petersilie"],
        steps: ["Spaghetti in Salzwasser kochen.", "Knoblauch in dünne Scheiben schneiden.", "Olivenöl in einer Pfanne erhitzen und Knoblauch darin anbraten.", "Chiliflocken hinzufügen.", "Spaghetti abgießen und in die Pfanne geben.", "Gut vermischen und mit Petersilie garnieren."]
    },
    {
        title: "Tomaten-Mozzarella-Salat",
        description: "Ein erfrischender Salat mit frischen Tomaten und Mozzarella.",
        ingredients: ["4 Tomaten", "200g Mozzarella", "Basilikum", "Olivenöl", "Balsamico-Essig", "Salz", "Pfeffer"],
        steps: ["Tomaten und Mozzarella in Scheiben schneiden.", "Auf einem Teller anrichten.", "Mit Basilikumblättern garnieren.", "Mit Olivenöl und Balsamico-Essig beträufeln.", "Mit Salz und Pfeffer abschmecken."]
    },
    {
        title: "Banana Pancakes",
        description: "Leckere Pancakes mit Bananengeschmack.",
        ingredients: ["2 Bananen", "2 Eier", "100g Mehl", "200ml Milch", "1 TL Backpulver", "1 Prise Salz", "Butter zum Braten"],
        steps: ["Bananen zerdrücken.", "Eier, Milch, Mehl, Backpulver und Salz hinzufügen und verrühren.", "Butter in einer Pfanne erhitzen.", "Teig portionsweise in die Pfanne geben und Pancakes von beiden Seiten goldbraun backen."]
    }
];

function displayRecipe() {
    const recipe = recipes[Math.floor(Math.random() * recipes.length)];
    document.getElementById('recipe-title').innerText = recipe.title;
    document.getElementById('recipe-description').innerText = recipe.description;
    
    const ingredientsList = document.getElementById('recipe-ingredients');
    ingredientsList.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.innerText = ingredient;
        ingredientsList.appendChild(li);
    });
    
    const stepsList = document.getElementById('recipe-steps');
    stepsList.innerHTML = '';
    recipe.steps.forEach(step => {
        const li = document.createElement('li');
        li.innerText = step;
        stepsList.appendChild(li);
    });
}

document.getElementById('new-recipe').addEventListener('click', displayRecipe);

// Display a recipe when the page loads
window.onload = displayRecipe;
