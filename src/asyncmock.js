const products =[
    {id:'1', names:'Alfajor Tofi', stock: 4, precio: 250, description:'alfajor', category:'alfajor', img:'https://argensnack.com/wp-content/uploads/ALFAJOR-TOFI-NEGRO-ARGENSNACK-450x450.jpg'},
    {id:'2', names:'Alfajor Tofi', stock: 5, precio: 250, description:'alfajor', category:'alfajor', img:'https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2020/05/04201433.png'},
    {id:'3', names:'Alfajor Tofi', stock: 0, precio:250, description:'alfajor', category:'alfajor', img:'https://arcorencasa.com/wp-content/uploads/2020/06/1011663.jpg'},
    {id:'4', names:'Alfajor Tofi', stock: 7, precio: 250, description:'alfajor', category:'alfajor', img:'https://arcorencasa.com/wp-content/uploads/2020/06/1011661.jpg'},
    {id:'5', names:'Cofler Block', stock: 5, precio: 340, description:'chocolate', category:'chocolate', img:'https://farmacityar.vteximg.com.br/arquivos/ids/212801-1000-1000/138814_bombon-de-chocolate-cofler-block-x-20-gr_imagen-1.jpg?v=637624963626200000'},
    {id:'6', names:'Cofler Rocklets', stock: 8, precio:320, description:'chocolate', category:'chocolate', img:'https://www.argentinazo.com/wp-content/uploads/2020/07/cofler_rocklets_55.jpg'},
    {id:'7', names:'Haribo Gold-Bears', stock: 6, precio: 560, description:'caramelo', category:'caramelo', img:'https://m.media-amazon.com/images/I/61ly0F7JQEL.jpg'},
    {id:'8', names:'Palitos de la Selva', stock: 0, precio: 430, description:'caramelo', category:'caramelo', img:'https://www.deliargentina.com/image/cache/catalog/product/alimentacion/caramelos-palitos-de-la-selva/caramelos-palitos-de-la-selva-335x335.jpg'}
    ]



const categories = [
{id: 'alfajor', description: 'Alfajores'},
{id: 'chocolate', description: 'Chocolates'},
{id: 'caramelo', description: 'Caramelos'}
]



export const getCategories = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}

export const getProducts = (categoryId) =>{
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 500)
    })
}


 
export const getProductsById = (id) => {
    return new Promise (resolve =>{
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === id))
        }, 200)
    })

}  