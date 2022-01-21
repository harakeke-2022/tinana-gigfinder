const express = require('express')
const db = require('../db/db')

const router = express.Router()
module.exports = router



// GET Event for the city by the day
router.get('/:city/:day', async (req,res) => {
   const day = req.params.day
   const city = req.params.city

   const events = await db.selectByCityAndDay()

  
   const viewData = {
    events: events
   }

   console.log(viewData)

   res.render('cityLanding', viewData)
})

// GET Event for the city by the day
router.get('/wellington/:day', (req,res) => {
  const day = req.params.day

  const template = ''
  const viewData = {
   // Data goes here
  }

  res.render(template, viewData)
})

// GET Event for the city by the day
router.get('/christchurch/:day', (req,res) => {
  const day = req.params.day

  const template = ''
  const viewData = {
   // Data goes here
  }

  res.render(template, viewData)
})