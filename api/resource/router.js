// build your `/api/resources` router here
const express = require('express')
const router = express.Router()
const Resource = require('./model')
const md = require('../middleware/middleware')


router.get('/', (req,res) => {
    Resource.getResources()
    .then((resources) => {
        res.status(200).json(resources)
    })
    .catch((err) => {
        res.json(err)
    })
})

router.post('/', md.checkResourcePost, (req,res,next) => {
   
    Resource.postResources(req.body)
    .then((project) => {
        res.json(project)
    })
    .catch(next)
})






router.use((err,req,res,next) => {
    res.status(500).json({
        message: 'something is wrong in projects router',
        errMessage: err.message,
        stack: err.stack
    })
})











module.exports = router