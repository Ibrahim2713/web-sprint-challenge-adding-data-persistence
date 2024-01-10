const db = require('../../data/dbConfig')



  function checkTaskPost(req,res,next) {
    const {task_description, project_id} = req.body
     /* const possible = await db('projects').where('project_id', project_id).first() */
    if(!task_description || !project_id){
        res.status(500).json({
            message: 'missing description or project_id'
        })
    }
    /* } else if(!possible) {
        res.status(500).json({
            message: 'invalid project_id'
        })
    } */
    next()
}

 async function checkResourcePost(req,res,next) {
    const {resource_name} = req.body
    try {
const possible = await db('resources').where('resource_name',{resource_name}).first()
        if(possible) {
            res.status(400).json({
                message: 'this name already exists'
            })
        }
    next()
    }

    catch(err) {
        res.status(500).json({
            message: "internal service is not working"
        })
    }


}

async function checkProjectPost(req,res,next) {
    const {project_name} = req.body
    try {
        const possible = await db('projects').where('project_name', {project_name}).first()
        if(possible) {
            res.status(400).json({
                message: ' this project_name exist already'
            })
        }
        next()
    }
    catch(err) {
        res.status(500).json({
            message: 'internal service is not working'
        })
    }
}


module.exports = {
    checkTaskPost,
    checkResourcePost,
    checkProjectPost
}