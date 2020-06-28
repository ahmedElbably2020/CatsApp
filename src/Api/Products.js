import data from './products.json'

export function getAll() {
    return Promise.resolve(data)
}

export function getById(id) {
    const product = data.find(item => item.id === id)
    return Promise.resolve(product)
}