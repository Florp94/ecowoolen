const productsContainer = document.querySelector(".parent");
const showMoreBtn = document.querySelector(".btn_load");
const categoriesContainer = document.querySelector(".categories");
const categoriesList = document.querySelectorAll(".category");
const cartMenu = document.querySelector(".cart");
const menuBtn = document.querySelector("nav_links");
const barsMenu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const cartBtn = document.querySelector(".cart_icon");



const createProductTemplate = (product) => {
    const {id, name, precio, cardImg, category} = product;


    return `
        <div class="card_parent">
            <img src=${cardImg} alt=${name}>
            <div class="fav_filter">
                <i class="fa-regular fa-heart"></i>
                <p>${category}</p>
            </div>
            <h4>${name}</h4>
            <div class="color">
                <button>B</button>
                <button>L</button>
                <button>R</button>
            </div>
            <div class="precio_btn">
                    <h5> $ ${precio} </h5>
                    <button class="btn_compra" data-id="${id}" data-name="${name}" data-precio="${precio}" data-img="${cardImg}" href="#"> <i class="fa-solid fa-cart-plus"></i> </button>
                </div>
        </div>
    `
};

const renderProducts = (productsList) => {
    productsContainer.innerHTML += productsList.map(createProductTemplate)
    .join("");
};

const IsLastIndexOf = () => {
    return appState.currentProductsIndex === appState.productsLimit - 1;
};

const showMoreProducts = () => {
    appState.currentProductsIndex += 1;
    let {product, currentProductsIndex} = appState;
    renderProducts(product[currentProductsIndex]);
    if (IsLastIndexOf()) {
        showMoreBtn.classList.add("hidden");
    }
};

const isInactiveFilterBtn = (element) => {
    return (
        element.classList.contains("category") &&
        !element.classList.contains("active")
    );
};

const changeBtnActiveState = (selectedCategory) => {
    const categories = [...categoriesList];
    categories.forEach((categoryBtn) => {
        if(categoryBtn.dataset.category !== selectedCategory) {
            categoryBtn.classList.remove("active");
            return;
        }
        categoryBtn.classList.add("active");
    });
};

const setShowMoreVisibility = () => {
    if (!appState.activeFilter) {
        showMoreBtn.classList.remove("hidden");
        return;
    }
    showMoreBtn.classList.add("hidden");
}

const changeFilterState = (btn) => {
    appState.activeFilter = btn.dataset.category;
    changeBtnActiveState(appState.activeFilter);
    setShowMoreVisibility();

};

const renderFilteredProducts = () => {
    const filteredProducts = productData.filter((product) => {
        return product.category === appState.activeFilter;
    });
    renderProducts(filteredProducts);
};

const applyFilter = ({target}) => {
    if (!isInactiveFilterBtn(target)) {
        return;
    }
    changeFilterState(target);

    productsContainer.innerHTML = "";
    if(appState.activeFilter) {
        renderFilteredProducts();
        appState.currentProductsIndex = 0;
        return;
    }

    renderProducts(appState.product[0]);

};


const toggleCart= () => {
    cartMenu.classList.toggle("open_cart");
    if (barsMenu.classList.remove("open_menu")) {
        barsMenu.classList.contains("open_menu");
        return
    };

    overlay.classList.toggle("show_overlay");
};

const toggleMenu= () => {
    barsMenu.classList.toggle("open_menu");
    if (cartMenu.classList.contains("open_cart")) {
        cartMenu.classList.remove("open_cart");
        return
    };

    overlay.classList.toggle("show_overlay");
};


const init = () => {
    renderProducts(appState.product[appState.currentProductsIndex]);
    showMoreBtn.addEventListener("click", showMoreProducts);
    categoriesContainer.addEventListener("click", applyFilter);
    cartBtn.addEventListener("click", toggleCart);
    menuBtn.addEventListener("click", toggleMenu);
};

init();