import express from "express";
import homController from '../controller/homController'

let router = express.Router()
const initWebRoute = (app) => {
    router.get('/', homController.getHomePage)
    router.get('/about', homController.getAbout)
    router.get('/detail/user/:id', homController.getDetalUser)
    router.post('/create-new-user', homController.CreateNewUser)
    router.post('/delete/user', homController.DeleteUser)
    router.get('/edit/user/:id', homController.GetEditUser)
    router.post('/update-user', homController.postUpdateUser)

    return app.use('/', router)
}

module.exports = initWebRoute