const router = require("express").Router()
const publicController = require("../controller/public.controller")

router
    .get("/fetch-project", publicController.fetchProjects)
    .get("/fetch-caro", publicController.getAllCarousel)
    .get("/get-project-details/:id", publicController.getProjectDetails)
    .get("/get-enquery", publicController.getEnquery)
    .post("/create-enquery", publicController.createEnquery)
    .delete("/detele-enquery/:id", publicController.deleteEnquery)

module.exports = router

