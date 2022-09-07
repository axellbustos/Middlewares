const express=require('express')
const router=express.Router()

const userTest=require('../middlewares/userTest')
const{index, loadProducts, about, contact, admin, login}=require('../controllers/mainController')

router.get('/',index)
router.get('/products',loadProducts)
router.get('/about',about)
router.get('/contact',contact)
router.get('/admin', userTest, admin)
router.get('/login',login)

module.exports=router