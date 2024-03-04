const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const ConnectDB = require("./ConnectDB/Connect")
const router = require("./route/route")


const app = express()
app.use(express.json())
dotenv.config()
app.use(cors())


app.get("/", (req, res) => {
    res.json("Hello");
})

app.use("/api/v1",router)
ConnectDB()
const port = process.env.PORT
app.listen(port , () => console.log(`http://localhost:${port}`))