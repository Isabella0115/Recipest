document.addEventListener('DOMContentLoaded', () => {
    const parameters = new URLSearchParams(window.location.search);
    const recipeID = parameters.get('id');
    const $recipeTitle = document.getElementById('recipe-title');
    const $recipeImage = document.getElementById('recipe-image');
    const $recipeDescription = document.getElementById('recipe-description');
    const $ingredientsList = document.getElementById('ingredients-list');
    const $instructions = document.getElementById('instructions');

    if (recipeID) {
        fetch(`https://dummyjson.com/recipes/${recipeID}`)
            .then(res => res.json())
            .then(recipe => {
               
                $recipeTitle.innerText = recipe.name;

                
                $recipeImage.src = recipe.image || ''; 
                $recipeImage.alt = recipe.name;

               
                

            
                if (recipe.ingredients && recipe.ingredients.length > 0) {
                    recipe.ingredients.forEach(ingredient => {
                        const li = document.createElement('li');
                        li.innerText = ingredient;
                        $ingredientsList.appendChild(li);
                    });
                } else {
                    const li = document.createElement('li');
                    li.innerText = 'No ingredients available';
                    $ingredientsList.appendChild(li);
                }

       
                $instructions.innerText = recipe.instructions || 'No instructions available';
            })
            .catch(err => console.error('Error fetching recipe details:', err));
    } else {
        $recipeTitle.innerText = 'Recipe Not Found';
    }
});
