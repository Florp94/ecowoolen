const shopContent = document.getElementById("shop_content");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal_container");
const toggle = document.querySelector(".toggle");
const links = document.querySelector(".links");
const cantCarrito = document.getElementById("cantidadcarrito");
const overlay = document.querySelector(".overlay");


// MENU

toggle.addEventListener("click", () => {
    toggle.classList.toggle("rotate")
    links.classList.toggle("active")
});


//Carrito

let carrito = JSON.parse(localStorage.getItem("carritoinfo")) || []; 

const saveLocal = () => {
    localStorage.setItem("carritoinfo", JSON.stringify(carrito));
};

const getProductos = async () => { 
    const response = await fetch("data.json");
    const data = await response.json();

    data.forEach((product) => {
        const {id, name,info, precio, cardImg, category} = product;
   
        let content = document.createElement("div");
        content.className ="card";
   
        content.innerHTML = `
            <img src="${cardImg}">
            <p class ="category">${category}</p>
            <h3 class ="name">${name}</h3>
            <p class="info">${info}</p>
            <p class="price">$ ${precio}</p>
        ` ;
   
        shopContent.append(content);
   
       let comprar = document.createElement("button")
       comprar.innerText = "Agregar al carrito";
       comprar.className ="btn_comprar"
       
       content.append(comprar);
   
       comprar.addEventListener("click", () => {
           
       const repetido = carrito.some((productoRepetido) => productoRepetido.id === product.id);
       
       if (repetido) {
           carrito.map((prod) =>{
               if(prod.id === product.id) {
                   prod.cantidad++;
               }
           });
       } else {
   
           carrito.push({
               id: product.id, 
               cardImg: product.cardImg,
               name: product.name,
               info: product.info,
               precio: product.precio,
               cantidad: product.cantidad,
           });
           
           console.log(carrito);
           console.log(carrito.length);
           carritoCantidad();
           saveLocal();
           }
           
       });
    });
   
    
};

getProductos();




//CARD PRODUCT

 





 





