const express = require("express")
const app = express()

app.use(express.json())

app.use("/", require("./routes/todo"))

app.listen(9002, () => {
    console.log("Working")
})

