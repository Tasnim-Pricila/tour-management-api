const { getTourServices, createTourServices, getTourDetailsServices, updateTourDetailsServices, getTrendingTourServices } = require("../services/tour.services")

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
exports.updateTourDetails = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await updateTourDetailsServices(id, req.body);
        if (result.modifiedCount > 0) {
            res.status(200).send({
                status: 'success',
                message: "Data updated Successfully.",
                data: result
            })
        }
        else if (result.modifiedCount === 0) {
            res.status(400).send({
                status: 'fail',
                message: "Data is found but already up to date",
                data: result
            })
        }
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Data update Failed.",
            error: error.message
        })
    }
}
exports.getTrendingTour = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await getTrendingTourServices();
        res.status(200).send({
            status: 'success',
            message: "Data found Successfully.",
            data: result
        })

    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Data finding Failed.",
            error: error.message
        })
    }
}