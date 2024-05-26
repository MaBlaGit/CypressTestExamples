export type Product = {
    name: string,
    inCartAfter: number
}

export type ProductAction =  'Add to Cart' | 'Add to Wish List' | 'Compare this Product';