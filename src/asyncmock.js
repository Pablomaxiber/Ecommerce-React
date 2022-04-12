const products =[
    {id:1, names:'Alfajor Tofi', precio:'$250', detalle:'algo', img:'https://argensnack.com/wp-content/uploads/ALFAJOR-TOFI-NEGRO-ARGENSNACK-450x450.jpg'},
    {id:2, names:'Alfajor Tofi', precio:'$250', detalle:'Algo', img:'https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2020/05/04201433.png'},
    {id:3, names:'Alfajor Tofi', precio:'$250', detalle:'Algo', img:'https://arcorencasa.com/wp-content/uploads/2020/06/1011663.jpg'},
    {id:4, names:'Alfajor Tofi', precio:'$250', detalle:'Algo', img:'https://arcorencasa.com/wp-content/uploads/2020/06/1011661.jpg'}
]


export const getProducts = () =>{
    return new Promise (resolve =>{
        setTimeout(() =>{
            resolve(products)
        }, 2000)
    })
}

{/* 
export const getProductsById = (id) => {
    return new Promise (resolve =>{
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })

}  */}