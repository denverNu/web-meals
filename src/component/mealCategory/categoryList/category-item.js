
class CategoryItem extends HTMLElement{

    connectedCallback(){
        this.render()
    }

    set categoryItem(itemCategory){
        this._categoryItem = itemCategory
        this.render()
    }

    set clickCategory(buttonCategory){
        this._clickCategory = buttonCategory
        this.render()
    }

    render(){

    
        // this.classList.add("swiper-slide", "discover__card");

        this.innerHTML = `

        <a href="#">
        <img src="${this._categoryItem.strCategoryThumb}" alt="" class="discover__img">
        </a>
        <div class="discover__data">
        <h2 class="discover__title">${this._categoryItem.strCategory}</h2>
        <span class="discover__description">Lorem, ipsum dolor.</span>
        </div>
        `;
    }
}

customElements.define('category-item', CategoryItem)