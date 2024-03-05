const express = require('express')
const { Register, Login, LogOut } = require('../Controller/Controller')




const router = express.Router()


router.post("/register", Register)
router.post("/login", Login)
router.get("/getLogin", LogOut)

// "methods":["GET", "PUT ", "POST ", "DELTE", "PATCH" , "OPTIONS"]

module.exports = router