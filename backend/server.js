const connect = require("./connect")
const express = require("express")
const cors = require("cors")
const post = require("./postRoutes")
const users = require("./userRoutes")

const app = express()
const PORT = 3000

// Enable Cross-Origin Resource Sharing (CORS) for all origins
app.use(cors())
// Configure Express to parse incoming requests with JSON payloads
app.use(express.json())

// Mount the imported post routes to handle requests to the application.
app.use(post)
app.use(users)


app.listen(PORT, () => {
    connect.connectToServer()
    console.log(`Server is running on ${PORT}`)
})