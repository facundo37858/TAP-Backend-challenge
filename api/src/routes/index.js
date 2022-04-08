const express=require('express')

const router=express.Router()

const {addGame, getGame }=require('../controllers/index')


router.post('/game',addGame)
router.get('/game',getGame)

module.exports=router