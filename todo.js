const express = require("express")
const todo = express.Router()
const uuid = require("uuid/v4")

const todoList = [
    {
    name: "The name",
    description: "The description of the todo",
    imageUrl: "http://www.myimage....",
    completed: false,
    id: "23k4lh23h2"
}]

todo.route("/")

.get((req, res) => {
    res.send(todoList)
})

.post((req, res) =>{
    req.body.id = uuid()
    todoList.push(req.body)
    res.send("Added to List")
})

todo.route("/:itemId")

.get((req, res) => {
    const itemId = req.params.itemId
    const foundItem = todoList.find(item => item.id === itemId)
    res.send(foundItem)
})

.delete((req, res) => {
    const itemId = req.params.itemId
    const itemIndex = todoList.findIndex(item => item.id === itemId)
    const deletedItem = todoList.splice(itemIndex, 1)
    res.send("Deleted")
})

.put((req, res) => {
    const itemId = req.params.itemId
    const itemIndex = todoList.findIndex(item => item.id === itemId)
    const newItem = Object.assign(todoList[itemIndex], req.body)
    res.send(newItem)
})


module.exports = todo


