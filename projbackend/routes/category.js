const express = require("express");
const router = express.Router();

const {getCategoryById,createCategory} = require('../controllers/category');
const {isAdmin,isAuthenticated,isSignedIn} = require('../controllers/auth');
const {getUserById} = require('../controllers/user');

//params
router.param("userId",getUserById);
router.param("categoryId",getCategoryById);

//Routes
router.post("/category/create/:userId",isSignedIn,isAuthenticated,isAdmin,createCategory)



module.exports = router;