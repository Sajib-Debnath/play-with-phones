const searchFood = () => {
    searchField = document.getElementById('search-field');
    searchTxt = searchField.value;

    searchField.value = '';

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTxt}`)
        .then(res => res.json())
        .then(data => displySearchResult(data.meals))
}

const displySearchResult = (meals) => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = "";
    meals.forEach(meal => {

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title </h5>
                        <p class="card-text">This is a short card.</p>
                    </div>
            </div>
        `
        searchResult.appendChild(div);
    });
}



const loadMealDetail = (meaId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meaId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.meals[0]))
}