const productData = [
    {
        id: 1,
        name:"Cashmilon de 150Grs",
        info: "Madeja 100% acrilico 4/7 grosor fino",
        precio: 950.00,
        category: "Lana",
        cardImg: "./assets/imgproducto/img/lanaspastel.jpg",
        cantidad: 1,
    },
    {
        id: 2,
        name:"Hilo de algodón 1 kg",
        precio: 950.00,
        info: "Ideal macramé, 27 hebras (4,5mm)",
        category: "Hilo",
        cardImg: "/assets/imgproducto/img/macramehilolisto.jpg",
        cantidad: 1,
    },
    {
        id: 3,
        name:"Seda de 150Grs",
        info: "Grosor 8/3, mediano. aguja n° 3.5mm",
        precio: 780.00 ,
        category: "Hilo",
        cardImg: "assets/imgproducto/img/hilosedalisto.jpg",
        cantidad: 1,
    },
    {
        id: 4,
        name:"Yute 100m",
        info: "Hilo natural, Grosor 5mm",
        precio: 1100.00 ,
        category: "Hilo",
        cardImg: "/assets/imgproducto/img/hiloyuterusticolisto.jpg",
        cantidad: 1,
    },
    {
        id: 5,
        name:"Shetland de 150Grs.",
        info: "55% lana 45% acrílico. Grosor 4/7",
        precio: 950.00 ,
        category: "Lana",
        cardImg: "/assets/imgproducto/img/lanashetlandlisto.jpg",
        cantidad: 1,
    },
    {
        id: 6,
        name:"Alpaca de 250Grs.",
        info: "50% acrílico. Grosor 4/7",
        precio: 1500.00 ,
        category: "Lana",
        cardImg: "/assets/imgproducto/img/lanaalpacalisto.jpg",
        cantidad: 1,
    },
    {
        id: 7,
        name:"Merino de 150Grs.",
        info: "90% Merino 10% Poliamida",
        precio: 780.00 ,
        category: "Lana",
        cardImg: "/assets/imgproducto/img/lanamerino.jpg",
        cantidad: 1,
    },
    {
        id: 8,
        name:"Chenille de 200Grs.",
        info: "Aterciopelado. Grosor 4/7",
        precio: 1500.00 ,
        category: "Lana",
        cardImg: "/assets/imgproducto/img/lanachenillegrueso.jpg",
        cantidad: 1,
    },
    {
        id: 9,
        name:"Aguja Metal y Ovillo",
        info: "Grosor fino 8-3. Aguja a elección",
        precio: 800.00 ,
        category: "Combo",
        cardImg: "/assets/imgproducto/img/agujashilo.jpg",
        cantidad: 1,
    },
    {
        id: 10,
        name:"Algodon, aguja y tijera",
        info: "Grosor 8-3. Aguja a elección. Tijera 10Cm.",
        precio: 1000.00 ,
        category: "Combo",
        cardImg: "/assets/imgproducto/img/combotijaguhiloblanco.jpg",
        cantidad: 1,
    },
    {
        id: 11,
        name:"Combo tejedora",
        info: "Tijera, Lapicera, Marcador, aguja, Hilo",
        precio: 2400.00 ,
        category: "Combo",
        cardImg: "/assets/imgproducto/img/combovioletatodo.jpg",
        cantidad: 1,
    },
    {
        id: 12,
        name:"Combo principiante",
        info: "Agujas, Marcadores, cartuchera y +",
        precio: 5100.00 ,
        category: "Combo",
        cardImg: "/assets/imgproducto/img/Set32piezas.jpg",
        cantidad: 1,
    },
    {
        id: 13,
        name:"Aguja de Silicona",
        info: "Varios Números y colores",
        precio: 300.00 ,
        category: "Accesorio",
        cardImg: "/assets/imgproducto/img/comboagujas.jpg",
        cantidad: 1,
    },
    {
        id: 14,
        name:"Alfiletero Art. 10Cms.",
        info: "Alfiletero Artesanal Hilo de algodón",
        precio: 1500.00 ,
        category: "Accesorio",
        cardImg: "/assets/imgproducto/img/alfileteros.jpg",
        cantidad: 1,
    },
    {
        id: 15,
        name:"Agujas Plastico",
        info: "Varios Números y colores",
        precio: 1100.00 ,
        category: "Accesorio",
        cardImg: "/assets/imgproducto/img/agujascolores.jpg",
        cantidad: 1,
    },
    {
        id: 16,
        name:"Tijera 11 Cm.",
        info: "Tijera de Acero Inoxidable",
        precio: 4000.00 ,
        category: "Accesorio",
        cardImg: "/assets/imgproducto/img/tijeracrochetlisto.jpg",
        cantidad: 1,
    },

];


const divideProductsInParts = (size) => {
    let productList = [];
    for (let i = 0; i < productData.length; i += size) {
        productList.push(productData.slice(i, i + size));
    }
    return productList;
};

const appState = {
    product: divideProductsInParts(4),
    CurrentProductsIndex: 0,
    productsLimit: divideProductsInParts(4).length,
    activeFilter:null,
};


