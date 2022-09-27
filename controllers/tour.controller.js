const { getTourServices, createTourServices, getTourDetailsServices, updateTourDetailsServices, getTrendingTourServices, getCheapestTourServices } = require("../services/tour.services")

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

    let filters = { ...req.query };
    const excludeFields = ['sort', 'page', 'limit', 'fields'];
    excludeFields.forEach(field => delete filters[field]);

    const queries = {};
    if (req.query.sort) {
        const sortBy = req.query.sort.split(',').join(' ');
        queries.sort = sortBy;
    }

    if (req.query.fields) {
        const fields = req.query.fields.split(',').join(' ');
        queries.fields = fields;
    }
    if(req.query.page){
        const { page=1 , limit=5 } = req.query;
        const skip = (page - 1) * +limit;
        queries.skip = skip;
        queries.limit = +limit;
    }

    try {
        const result = await getTourServices(filters, queries);
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
exports.getCheapestTour = async (req, res, next) => {
    try {
        const result = await getCheapestTourServices();
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