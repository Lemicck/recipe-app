const searchMeal = async (e) => {
    const input = document.querySelector(".input")
    const info = document.querySelector(".info")
    const img = document.querySelector(".img-content")
    // const ingredientOutput = document.querySelector(".ingredients")

    const showMealInfo = (meal) =>{
        const {strMeal, strMealThumb, strInstructions} = meal;
        title.textContent = strMeal;
        img.style.backgroundImage = `url(${strMealThumb})`
        info.textContent = strInstructions

        // const ingredients = [] 

        // for (let i = 1; i <= 20; i++) {
        //     if (meal[`strIngredient${i}`]){
        //         ingredients.push(
        //             `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        //         );
        //     }else{
        //         break;
        //     }
        // }

        // // const html = ``
    }

    const showAlert = () => {
        alert("meal not found");
    }

    const fetchMealData = async (val) => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${val}`)
        const {meals} = await res.json();
        return meals;
    }

    const val = input.value.trim();

    if (val){
        const meals = await fetchMealData(val);

        if (!meals){
            showAlert();
            return;
        }

        meals.forEach(showMealInfo)
    }else{
        alert("Please try searching for meal: ");
    }
}

const form = document.querySelector("form")
form.addEventListener("submit", searchMeal)

const search = document.querySelector(".search-btn")
search.addEventListener("click", searchMeal)