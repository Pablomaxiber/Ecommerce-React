export const createAdapterProductFromFirestore= (doc) => {
    const data= doc.data()

    const formattedProduct= {
        id: doc.id,
        names:data.names, 
        category: data.category,
        img: data.img,
        precio: data.precio,
        description: data.description
    }

    return formattedProduct
}