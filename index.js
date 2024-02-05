const express = require('express')
const uuid = require('uuid')

const app = express()
app.use(express.json())

const port = 3000

const orders = []

const checkUserId = (request, response, next) => {
    const { id } = request.params

    const index = orders.findIndex(user => user.id === id)

    if (index < 0) {
        return response.status(404).json({ message: "Order not found" })
    }

    request.userIndex = index
    request.userId = id

    next()

}

const methodAllRoute = (request, response, next) => {

    const routeType = request.method

    console.log(`${routeType} - /orders`)

    next()
}



app.use(methodAllRoute) //forma de inserir Middlewares em todas as rotas


app.get('/orders', (request, response) => {
    return response.json(orders)

})

app.post('/orders', (request, response) => {

    const { order, clientName, price, status } = request.body

    const user = { id: uuid.v4(), order, clientName, price, status }

    orders.push(user)

    return response.status(201).json(user)


})

app.put('/orders/:id', checkUserId, (request, response) => {

    const { order, clientName, price, status } = request.body
    const index = request.userIndex
    const id = request.userId

    const updateOrder = { id, order, clientName, price, status }

    orders[index] = updateOrder

    return response.json(updateOrder)

})

app.delete('/orders/:id', checkUserId, (request, response) => {
    const index = request.userIndex

    orders.splice(index, 1)

    return response.status(204).json()

})

app.get('/orders/:id', checkUserId, (request, response) => {

    const index = request.userIndex

    return response.json(orders[index])

})

app.patch('/orders/:id', checkUserId, (request, response) => {

    const index = request.userIndex

    orders[index].status = "Pronto"
    return response.json(orders[index])
})


app.listen(port, () => {
    console.log(`🍔 Server started on port ${port}`)

})


"1" + 2 + 3
console.log
