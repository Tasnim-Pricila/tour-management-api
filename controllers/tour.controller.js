const { getTourServices, createTourServices, getTourDetailsServices } = require("../services/tour.services")

exports.createTours = async (req, res, next) => {
    try {
        const result = await createTourServices(req.body);
        res.status(200).send({
            status: 'success',
            message: "Data created Successfully.",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Data creation Failed.",
            error: error.message
        })
    }
}
exports.getTours = async (req, res, next) => {
    try {
        const result = await getTourServices();
        res.status(200).send({
            status: 'success',
            message: "Data found Successfully.",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Data Finding Failed.",
            error: error.message
        })
    }
}
exports.getTourDetails = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await getTourDetailsServices(id);
        res.status(200).send({
            status: 'success',
            message: "Data found Successfully.",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Data Finding Failed.",
            error: error.message
        })
    }
}