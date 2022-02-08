import express from "express";
import homController from '../controller/homController'

let router = express.Router()
const initWebRoute = (app) => {
    router.get('/', homController.getHomePage)


    // router.get('/about', (req, res) => {
    //     res.send(`I'm Eric!`)
    // })
    router.get('/about', homController.getAbout)
    return app.use('/', router)
}

module.exports = initWebRoute