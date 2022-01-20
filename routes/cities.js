const express = require('express')

const router = express.Router()
module.exports = router

// GET City
router.get('/auckland', (req, res) => {
  const template = ''
// Make viewData object to be passed back with city data
const viewData = {

}

res.render(template, viewData)

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