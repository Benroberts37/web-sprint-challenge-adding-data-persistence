const Projects = require('../project/model')

const checkIfNewTaskIsValid = (req, res, next) => {
    const {task_description, project_id} = req.body
    if (!task_description || !project_id) {
        res.status(400).json({message: 'task description and project_id are required'})
    } else {
        next()
    }
}

const checkIfProjectIdIsValid = async (req, res, next) => {
    const {project_id} = req.body
    const project = await Projects.getProjectById(project_id)
    if (!project) {
        res.status(400).json({message: `The project with project ID ${project_id} was not found`})
    } else {
        next()
    }
}

    module.exports = {
        checkIfProjectIdIsValid,
        checkIfNewTaskIsValid
    
}