// Dependencies
const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')

// Changes these to our routes
const cityRoutes = require('./routes/cities.js')
// const scheduleRoutes = require('./routes/schedule.js')
// const eventRoutes = require('./routes/events.js')

// Create the server
const server = express()
module.exports = server

// Configure the server
const publicFolder = path.join(__dirname, 'public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Define the routes
server.get('/', (req, res) => {
   res.send('Hello World')// Homepage 
})

// Change these to our routes
server.use('/:city', cityRoutes)
// server.use('/schedule', scheduleRoutes)
// server.use('/events', eventRoutes)
