const products = [
    {
        id: 1,
        title: 'Cerveza Patagonia Amber Lager',
        description: 'Cerveza Roja.',
        price: 450,
        pictureUrl: 'https://gobar.vteximg.com.br/arquivos/ids/157557-1000-1000/PATAGONIA-AMER-LAGER-BOTELLA-710CC.jpg?v=637235189774470000',
        category: 'cervezas',
        stock: 5,
    },
    {
        id: 2,
        title: 'Vodka Absolut Raspberry',
        description: 'Vodka de Frutos Rojos.',
        price: 2000,
        pictureUrl: 'https://gobar.vteximg.com.br/arquivos/ids/155727-1000-1000/01032500006.jpg?v=636684929975600000',
        category: 'destilados',
        stock: 5,
    },
    {
        id: 3,
        title: 'Vino El Enemigo ',
        description: 'Malbec Argentino.',
        price: 3400,
        pictureUrl: 'https://gobar.vteximg.com.br/arquivos/ids/156008-1000-1000/01082800278.jpg?v=636690977401900000', 
        category: 'vinos',
        stock: 5,
    },
];

const promesa = new Promise(function(resolve, reject) {
    
    setTimeout(function () {
      resolve(products);
    }, 500);
});

// el getProducts me va a retornar la promesa que estoy creando arriba
function getProducts() {
    return promesa;
}
// exportamos la funciones que necestio
export {
    getProducts,
}