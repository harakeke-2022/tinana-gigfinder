const express = require('express')

const router = express.Router()
module.exports = router

// GET Event for the city by the day
router.get('/auckland/:day', (req,res) => {
   const day = req.params.day

   const template = ''
   const viewData = {
    // Data goes here
   }

   res.render(template, viewData)
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