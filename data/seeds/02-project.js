const projects = [
    {project_name: 'portrait', project_description: 'Sketch a picture of something that intrest you', project_completed: 1},
    {project_name: 'music', project_description: 'Write a song about anything', project_completed: 1},
    {project_name: 'Computer Science', project_description: 'Build a language translation app',project_completed: 0 }
]

const resources = [
    {resource_name: 'paper', resource_description: null},
    {resource_name: 'pen', resource_description: null},
    {resource_name: 'songsheet', resource_description: null},
    {resource_name: 'soundtrack', resource_description: null},
    {resource_name: 'computer', resource_description: null},
    {resource_name: 'journal', resource_description: null}
]

const tasks = [
    {task_description: 'draw a protrait of anything', task_notes:'N/A',  project_id: 1},
    {task_description: 'write a song about anything', task_notes:'N/A', project_id: 2},
    {task_description: 'write a computer program for language translation', task_notes:'N/A',  project_id: 3 }
]

const project_resources = [
    {resource_id: 1, project_id: 1},
    {resource_id: 2, project_id: 1},
    {resource_id: 3, project_id: 2},
    {resource_id: 4, project_id: 2},
    {resource_id: 5, project_id: 3},
    {resource_id: 6, project_id: 3},

]


exports.seed =  async function(knex){
   await knex('projects').insert(projects)
   await knex('resources').insert(resources)
   await knex('tasks').insert(tasks)
   await knex('project_resources').insert(project_resources)
}