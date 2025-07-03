// – взяти https://dummyjson.com/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.

const recipesDiv=document.getElementById('recipesDiv');

fetch('https://dummyjson.com/recipes')
.then(res => res.json())
.then(resipesQbject => {
    const {recipes}=resipesQbject;
    console.log(recipes);

    for (const recipe of recipes) {
        const div = document.createElement('div');
        div.classList.add('recipe-div');
        const divInfo=document.createElement('div');
        divInfo.innerText=`
                             Id: ${recipe.id}, 
                             Name ${recipe.name},
                             PrepTimeMinutes: ${recipe.prepTimeMinutes},
                             CookTimeMinutes: ${recipe.cookTimeMinutes},
                             Servings: ${recipe.servings},
                             Difficulty: ${recipe.difficulty},
                             Cuisine: ${recipe.cuisine},
                             CaloriesPerServing: ${recipe.caloriesPerServing},
                             `
        const img = document.createElement('img');
        img.src=recipe.image;
        img.style.width='500px';

        const hIng = document.createElement('h2');
        hIng.innerText=`Ingredients:`;
        const ol = document.createElement('ol');
        for (const ingredient of recipe.ingredients) {
            const li = document.createElement('li');
            const info = document.createElement('p');
            info.innerText=`${ingredient}`;

            li.append(info);
            ol.appendChild(li);
        }
        const hIns = document.createElement('h2');
        hIns.innerText=`Instructions:`;
        const ul = document.createElement('ul');
        for (const instruction of recipe.instructions) {
            const liIns = document.createElement('li');
            const infoIns = document.createElement('p');
            infoIns.innerText=`${instruction}`;

            liIns.append(infoIns);
            ul.appendChild(liIns);
        }
        div.append(divInfo,img,hIng,ol,hIns,ul);
        recipesDiv.appendChild(div);
    }

})
