// build your `Task` model here
const db = require('../../data/dbConfig')

function getTasks() {
    return db('tasks')
    .leftJoin('projects', 'projects.project_id', 'tasks.project_id')
    .select('task_id', 'task_description', 'task_notes', 'task_completed', 'project_name', 'project_description')
}

const createTask = async task => {
    const [task_id] = await db('tasks').insert(task)
    return db('tasks').where({task_id}).first()
}

module.exports = {
    getTasks,
    createTask
}