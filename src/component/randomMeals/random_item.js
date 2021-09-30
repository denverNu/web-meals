class randomItems extends HTMLElement{
    
    connectedCallback(){
        this.render()
    }

    set randomItem (randomItem){
        this._randomItem = randomItem
        this.render()
    }

    render(){
        this.innerHTML = `
        
        <style>
        
        </style>
        
        <div class="random-items">
                <div class="random_content">
                    <img src="${this._randomItem.strMealThumb}" alt="" class="random_img">
                    <div class="random_data">
                        <span class="random_name">${this._randomItem.strMeal}</span>
                        <button class="random_meal-button"><a href="">Detail</a></button>
                    </div>
                </div>
            </div>
        
        `;
    }
}

customElements.define('random-item', randomItems)