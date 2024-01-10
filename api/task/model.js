// build your `Task` model here
const db = require('../../data/dbConfig')

function getTasks() {
    return db('tasks')
    .leftJoin('projects', 'tasks.project_id', 'projects.project_id')
    .select('project_name', 'project_description','tasks.*')
}


function postTask(task) {
    return db('tasks').insert(task)
    .then(([task_id]) => {
        return db('tasks').where('task_id', task_id).first()
    })
}





module.exports = {
    getTasks,
    postTask
}