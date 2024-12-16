document.addEventListener('DOMContentLoaded', () => {
    const $container = document.getElementById('container');  // Ստուգել ID-ն

    fetch('https://dummyjson.com/recipes')
        .then(res => res.json())
        .then(data => {
            const recipes = data.recipes;
            recipes.forEach(recipe => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `<a href="details.html?id=${recipe.id}">${recipe.name}</a>`;
              
                $container.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching recipes:', error));
});
