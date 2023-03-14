let products = [
    {
        name: 'Apple',
        type: 'fruit'
    },
    {
        name: 'Monitir',
        type: 'techno'
    },
    {
        name: 'Table',
        type: 'furniture'
    }
]

console.log(
    products.every(product => product.type === 'fruit')
)