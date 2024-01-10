// build your `/api/projects` router here
const express = require('express')
const router = express.Router()
const Project = require('./model')
const md = require('../middleware/middleware')



router.get('/', (req,res,next) => {
   Project.getProjects()
   .then((rows) => {
        const result = rows.map(row => ({
            project_id: row.project_id,
            project_name: row.project_name,
            project_description: row.project_description,
            project_completed: row.project_completed === 0 ? false : true
        }))
        res.json(result)
   })
   .catch((err) => {
    res.json(err)
   })
})

router.post('/', md.checkProjectPost, (req,res,next) => {
 
    Project.postProject(req.body)
    .then((rows) => {
        const result = {
            project_id: rows.project_id,
            project_name: rows.project_name,
            project_description: rows.project_description,
            project_completed: rows.project_completed === 0 ? false : true
        }
           
        res.json(result)
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