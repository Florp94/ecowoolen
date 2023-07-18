const productData = [
    {
        id: 1,
        name:"Bahia de 150Grs",
        precio: 950.00,
        category: "Hilo",
        cardImg: "/assets/imgproducto/img/lanaspastel.jpg",

    },
    {
        id: 2,
        name:"Macramé de 150Grs",
        precio: 950.00,
        category: "Hilo",
        cardImg: "/assets/imgproducto/img/macramehilolisto.jpg",
    },
    {
        id: 3,
        name:"Seda de 150Grs",
        precio: 780.00 ,
        category: "Hilo",
        cardImg: "/assets/imgproducto/img/hilosedalisto.jpg",
    },
    {
        id: 4,
        name:"Yute de 150Grs.",
        precio: 1100.00 ,
        category: "Hilo",
        cardImg: "/assets/imgproducto/img/hiloyuterusticolisto.jpg",
    },
    {
        id: 5,
        name:"Shetland de 150Grs.",
        precio: 950.00 ,
        category: "Lana",
        cardImg: "/assets/imgproducto/img/lanashetlandlisto.jpg",
    },
    {
        id: 6,
        name:"Alpaca de 250Grs.",
        precio: 1500.00 ,
        category: "Lana",
        cardImg: "/assets/imgproducto/img/lanaalpacalisto.jpg",
    },
    {
        id: 7,
        name:"Merino de 150Grs.",
        precio: 780.00 ,
        category: "Lana",
        cardImg: "/assets/imgproducto/img/lanamerino.jpg",
    },
    {
        id: 8,
        name:"Chenille de 200Grs.",
        precio: 1500.00 ,
        category: "Lana",
        cardImg: "/assets/imgproducto/img/lanachenillegrueso.jpg",
    },
    {
        id: 9,
        name:"Aguja Metal Varios Números + Ovillo 50Grs.",
        precio: 800.00 ,
        category: "Combo",
        cardImg: "/assets/imgproducto/img/agujashilo.jpg",
    },
    {
        id: 10,
        name:"Algodon 8-3 + aguja a elección + tijera",
        precio: 1000.00 ,
        category: "Combo",
        cardImg: "/assets/imgproducto/img/combotijaguhiloblanco.jpg",
    },
    {
        id: 11,
        name:"Algodón 150Grs. + Tijera + lapicera + Marcador",
        precio: 1800.00 ,
        category: "Combo",
        cardImg: "/assets/imgproducto/img/combovioletatodo.jpg",
    },
    {
        id: 12,
        name:"Set 32 piezas. Agujas + Cartuchera + Contador",
        precio: 5100.00 ,
        category: "Combo",
        cardImg: "/assets/imgproducto/img/Set32piezas.jpg",
    },
    {
        id: 13,
        name:"Agujas de Silicona x Unidad",
        precio: 300.00 ,
        category: "Accesorio",
        cardImg: "/assets/imgproducto/img/comboagujas.jpg",
    },
    {
        id: 14,
        name:"Alfiletero Artesanal Premium 10Cms.",
        precio: 1500.00 ,
        category: "Accesorio",
        cardImg: "/assets/imgproducto/img/alfileteros.jpg",
    },
    {
        id: 15,
        name:"Agujas Plastico x Unidad. Varios Números.",
        precio: 1100.00 ,
        category: "Accesorio",
        cardImg: "/assets/imgproducto/img/agujascolores.jpg",
    },
    {
        id: 16,
        name:"Tijera Recta para Tejidos. 11 Cm.",
        precio: 4000.00 ,
        category: "Accesorio",
        cardImg: "/assets/imgproducto/img/tijeracrochetlisto.jpg",
    },

];


const divideProductsInParts = (size) => {
    let productsList = [];
    for (let i = 0; i < productData.length; i += size) {
        productsList.push(productData.slice(i, i + size));
    }
      return productsList; 
    };


    const appState = {
        product: divideProductsInParts(4),
        currentProductsIndex: 0,
        productsinit: divideProductsInParts(4).length,
        activeFilter: null,
    };

    

