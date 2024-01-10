// build your `/api/tasks` router here
const express = require('express')

const router = express.Router()
const Task = require('./model')
const md = require('../middleware/middleware')

router.get('/', (req,res) => {
 Task.getTasks()
 .then((rows) => {
    const result = rows.map(row => ({
        task_id: row.task_id,
        task_description: row.task_description,
        task_notes: row.task_notes,
        task_completed: row.task_completed === 0 ? false : true,
        project_name: row.project_name,
        project_description: row.project_description
    }))
    res.json(result)

 })
 .catch((err) => {
    res.json(err)
 })
})

router.post('/', md.checkTaskPost, (req,res,next) => {
    Task.postTask(req.body)
    .then((rows) => {
        const result = {
            task_id: rows.task_id,
            task_description: rows.task_description,
            task_notes: rows.task_notes,
            task_completed: rows.task_completed === 0 ? false : true,
            project_id: rows.project_id
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
