// build your `/api/tasks` router here
const express = require('express')
const router = express.Router()
const Tasks = require('./model')
const {  checkIfProjectIdIsValid, checkIfNewTaskIsValid } = require('./middleware')

router.get('/', async (req, res) => {
    const tasks = await Tasks.getTasks()
    const tasksWithBooleans = tasks.map(task => {
        return {...task, task_completed: task.task_completed ? true : false}
    })
    res.json(tasksWithBooleans)
})

router.post('/', checkIfNewTaskIsValid, checkIfProjectIdIsValid, async (req, res) => {
    const task = req.body
    const newTaskRec = await Tasks.createTask(task)
    res.json({...newTaskRec, task_completed: newTaskRec.task_completed ? true: false})
})

module.exports = router