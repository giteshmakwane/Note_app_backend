const express = require("express")
const { connection } = require("./db")
const { userRouter } = require("./routes/user_routes")
const cors = require("cors")
const { noteRouter } = require("./routes/note_routes")
require("dotenv").config()
const port = process.env.PORT
const app = express()
app.use(cors())
app.use (express.json())
app.use("/user", userRouter)
app.use("/note", noteRouter)


app.get("/",(req, res) =>{
    res.send({
        message:"Api is working now"
    })
})


app.listen(port, async() => {

    try {
        await connection
        console.log("Database is connected")
    } catch (error) {
        console.log(error)
    }

    console.log("Server is running on port number",port)
})
