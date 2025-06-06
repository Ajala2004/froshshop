const express = require('express')
const multer = require("multer");
const upload = multer()
const addproductcontroller = require("../controller/addproduct")
const authtoken = require("../middleware/authtoken")
const userdetailsController = require("../controller/userdetails")
const userlogoutController = require("../controller/userlogout")
const userdisable = require("../controller/disable")
const alluserController = require("../controller/allusers")
const router = express.Router()
const allproduct = require("../controller/allproduct")
const forgotpassword = require("../controller/forgotpassword") 
const resetpassword = require("../controller/resetpassword")
const updateuser = require("../controller/updateuser") 
const usersignupController = require("../controller/usersignup")
const usersigninController = require("../controller/usersignin")
router.post("/signup", usersignupController)
router.post("/signin", usersigninController)
router.get("/user-details", authtoken, userdetailsController)
router.get("/logout", userlogoutController)
router.get("/allusers", authtoken, alluserController)
router.get("/allproduct", allproduct)
router.post("/updateuser", authtoken, updateuser)
router.post("/forgot-password", forgotpassword)
router.post("/reset-password/:token", resetpassword)
router.patch("/:id/disable", userdisable)
// router.post("/products",upload.single("image"),addproductcontroller.createProduct)
router.post("/products",upload.single("image") ,addproductcontroller)
module.exports = router        