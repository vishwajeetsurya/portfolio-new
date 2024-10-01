const asyncHandler = require("express-async-handler")
const Projects = require("../models/Projects")
const Carousel = require("../models/Carousel")
const Enquery = require("../models/Enquery")

exports.fetchProjects = asyncHandler(async (req, res) => {
    const result = await Projects.find()
    res.json({ message: "Project Fetch Success...!", result })
})
exports.getAllCarousel = asyncHandler(async (req, res) => {
    const result = await Carousel.find()
    res.status(200).json({ message: "blog fetch success", result })
})
exports.getProjectDetails = asyncHandler(async (req, res) => {
    const result = await Projects.findById(req.params.id)
    res.status(200).json({ message: "blog fetch success", result })
})
exports.getEnquery = asyncHandler(async (req, res) => {

    const result = await Enquery.find()
    res.json({ message: "enquery fetch Success", result })
})
exports.createEnquery = asyncHandler(async (req, res) => {
    await Enquery.create(req.body)
    res.json({ message: "enquery Added Success" })
})
exports.deleteEnquery = asyncHandler(async (req, res) => {
    const { id } = req.params
    await Enquery.findByIdAndDelete(id)
    res.json({ message: "enquery delete Success" })
})     