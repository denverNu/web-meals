class Header extends HTMLElement{
    connectedCallback(){
        this.render()
    }

    render(){
      this.innerHTML = `
            <nav class="nav container">
            <a href="" class="nav_logo">Travel</a>

            <div class="nav_menu">
                <ul class="nav_list">
                    <li class="nav_item">
                        <a href="" class="nav_link">Home</a>
                    </li>
                    <li class="nav_item">
                        <a href="" class="nav_link">Home</a>
                    </li>
                    <li class="nav_item">
                        <a href="" class="nav_link">Home</a>
                    </li>
                    <li class="nav_item">
                        <a href="" class="nav_link">Home</a>
                    </li>
                </ul>

                <i class="ri-close-line nav_close"></i>
            </div>

            <div class="nav_toggle">
                <i class="ri-menu-3-line"></i>
            </div>
        </nav>
        `;

      /*==================== SHOW MENU ====================*/
      const navMenu = document.querySelector(".nav_menu"),
        navToggle = document.querySelector(".nav_toggle"),
        navClose = document.querySelector(".nav_close");

      /*===== MENU SHOW =====*/
      /* Validate if constant exists */
      if (navToggle) {
        navToggle.addEventListener("click", () => {
          navMenu.classList.add("show-menu");
        });
      }

      /*===== MENU HIDDEN =====*/
      /* Validate if constant exists */
      if (navClose) {
        navClose.addEventListener("click", () => {
          navMenu.classList.remove("show-menu");
        });
      }
    }
}

customElements.define('app-bar', Header)