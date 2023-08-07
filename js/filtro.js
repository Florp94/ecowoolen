const showMorebtn = document.querySelector("btnload");
const categoriesContainer = document.querySelector(".categories");
const categoryList = document.querySelectorAll(".category");




const renderProducts = (productList) => {
    shopContent.innerHTML += productList.map(createProductTemplate).join("");
};

const ultimoIndex = () => {
    return appState.CurrentProductsIndex === appState.productsLimit - 1;
};

const showMoreProduct = () => {
    appState.CurrentProductsIndex += 1;
    let {product, CurrentProductsIndex} = appState;
    renderProducts(product[CurrentProductsIndex]);
    if (ultimoIndex()) {
        showMore.classList.add("hidden");
    }
    };
const isInactiveFilter = (element) => {
    return (
        element.classList.contains("category") && 
        !element.classList.contains("active")
    );
};

const changebtnActive = (selectedcategory) => {
    const categories = [...categoryList];
    categories.forEach((categoryBtn) => {
        if (categoryBtn.dataset.category !== selectedcategory) {
            categoryBtn.classList.remove("active");
            return;
        }
        categoryBtn.classList.add("active");
    });
};

const changeFilterState = (btn) => {
    appState.activeFilter = btn.dataset.category;
    changebtnActive(appState.activeFilter);
};

const applyFilter = ({target}) => {
    if (!isInactiveFilter(target)) {
        return;
    }

    changeFilterState(target);


};


const init = () =>{
    renderProducts = (appState.product[appState.CurrentProductsIndex]);
    showMorebtn.addEventListener("click", showMoreProduct);
    categoriesContainer.addEventListener("click", applyFilter);
};
