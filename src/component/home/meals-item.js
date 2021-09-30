class MealItem extends HTMLElement {

  connectedCallback() {
    this.render();
  }

  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  render() {
    this.innerHTML = `

        <style>

         meal-item {
            width: 9rem;
            margin: 0px;
            box-sizing: border-box;
            border-radius: 1rem 1rem 0rem 0rem;
        }

        .meal_content {
            overflow: hidden;
        }


        .meal_img {
            width: 9rem;
            height: 180px;
            box-sizing: border-box;
            transition: 0.3s;
        }

        .meal_img:hover {
            transform: scale(1.1);
        }

        .meal_data {
            margin-bottom: 2rem;
            padding: 1rem;
            background-color: #237905;
            text-align: center;
            border-radius: 0px 0px 1rem 1rem;
        }

        .meal_data h2 {
            font-size: 0.8rem;
            height: 3rem;
            color: white;
        }

        .meal_data p {
        }

        .button_meal {
            margin-top: 0.5rem;
            width: 7rem;
            padding: 0.2rem;
            border-radius: 3rem;
        }
                
        </style>


        <div class="meal_content">
                    <img class="meal_img" src="${this._meal.strMealThumb}" alt="Fan Art">
                    <div class="meal_data">
                        <h2>${this._meal.strMeal}</h2>
                        <button class="button_meal"><a href="#">Detail</a></button>
                    </div>
                </div>
        `;
  }
}

customElements.define("meal-item", MealItem);
