const express = require('express')
const db = require('../db/db')

const router = express.Router()
module.exports = router

// GET City
router.get('/auckland', async (req, res) => {
  const all = await db.getAll()
// Make viewData object to be passed back with city data
const viewData = {
  events: all
}

console.log(viewData)

res.render('cityLanding', viewData)

})
router.get('/wellington', (req, res) => {
  const template = ''
// Make viewData object to be passed back with city data
const viewData = {

}

res.render(template, viewData)

})

router.get('/christchurch', (req, res) => {
  const template = ''
// Make viewData object to be passed back with city data
const viewData = {

}

res.render(template, viewData)

})