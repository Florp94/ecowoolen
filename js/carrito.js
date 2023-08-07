    const mostrarCarrito = () => {

    modalContainer.innerHTML = " ";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal_header";
    modalHeader.innerHTML = `
        <h1 class="modal_title">Carrito</h1>
        <div class="overlay"></div>
    `;



    modalContainer.append(modalHeader);

    const modalBtn = document.createElement("h1");
    modalBtn.innerText = "X";
    modalBtn.className = "modal_btn";
    
    modalBtn.addEventListener("click", () => {
        modalContainer.style.display= "none";
        
    });

    modalHeader.append(modalBtn);

    carrito.forEach((product) =>{
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal_content";
        carritoContent.innerHTML = `
        <img src="${product.cardImg}">
        <div class="modal_precio">
            <h3>${product.name}</h3>
            <p>$ ${product.precio}</p>
        </div>
        <div class="modal_cantidad">
            <p class="btn_cantidad restar"> - </p>
            <p class="num_cantidad"> ${product.cantidad} </p>
            <p class="btn_cantidad sumar"> + </p>
        </div>
        <h6 class="delete_product"> <i class="fa-regular fa-circle-xmark"></i> </h6>
        `;

        modalContainer.append(carritoContent);

        let restar = carritoContent.querySelector(".restar");

        restar.addEventListener("click", () => {
            if(product.cantidad !== 1) {
                product.cantidad--;
            }
            saveLocal();
            mostrarCarrito();
        });

        let sumar = carritoContent.querySelector(".sumar");

        sumar.addEventListener("click", () => {
            if(product.cantidad)

            product.cantidad++;

            saveLocal();
            mostrarCarrito();
        } );

        let eliminar = carritoContent.querySelector(".delete_product");

        eliminar.addEventListener("click", () => {
            eliminarProducto(product.id);
        });
        
    });
    


    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalCompra =document.createElement("div")    
    totalCompra.className = "total_content";
    totalCompra.innerHTML = `
        <h5>Total a pagar:</h5>
        <p>$ ${total}</p>
    `;
    modalContainer.append(totalCompra);
    
    const btn_comprar = document.createElement("div")
    btn_comprar.className = "btn_compra";
    btn_comprar.innerHTML = `
    <h5>Comprar</h5>`;

    modalContainer.append(btn_comprar);
    };

verCarrito.addEventListener("click", mostrarCarrito);

    const eliminarProducto = (id) => {
        const foundId = carrito.find((element) => element.id === id);

        carrito = carrito.filter((carritoId) => {
            return carritoId !== foundId;
        });

        carritoCantidad();
        saveLocal();
        mostrarCarrito();
        
    };

    const carritoCantidad = () => {
        cantCarrito.style.display = "block";

    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

    

    cantCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
    };

    carritoCantidad();