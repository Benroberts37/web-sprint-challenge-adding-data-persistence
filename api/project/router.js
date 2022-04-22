// build your `/api/projects` router here
//const express = require('express')
const Project = require('./model')
const router = require('express').Router()

router.get('/', async (res, req, next) => {
    await Project.getProjects()
    .then(projects => {
        projects.map(project => {
            if(project.project_completed === 0) {
                project.project_completed = false
            } else {
                project.project_completed = true
            }
        })
        res.status(200).json(projects)
    })
    .catch(next)
})

router.post('/'), (req, res, next) => {
    Project.insert(req.body)
    .then(project => {
        if (project.project_completed === 0) {
            project.project_completed = false
            res.status(201).json(project)
        }else {
            project.project_completed = true
            res.status(201).json(project)
        }
    })
    .catch(next)
}


module.exports = router