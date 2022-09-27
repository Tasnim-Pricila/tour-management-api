const Tour = require("../models/Tour")

exports.getTourServices = async (filters, queries) => {
    const tours = await Tour.find(filters)
        .sort(queries.sort)
        .limit(queries.limit)
        .select(queries.fields)
        .skip(queries.skip)
    const count = await Tour.countDocuments(filters)
    return { count, tours };
}

exports.createTourServices = async (data) => {
    const tour = await Tour.create({ ...data, viewCount: 0 });
    return tour;
}

exports.getTourDetailsServices = async (id) => {
    const tour = await Tour.updateOne({ _id: id }, { $inc: { viewCount: 1 } });
    const result = await Tour.findById({ _id: id });
    return result;
}

exports.updateTourDetailsServices = async (id, data) => {
    const tour = await Tour.updateOne({ _id: id }, { $set: data }, { runValidators: true });
    return tour;
}

exports.getTrendingTourServices = async () => {
    const tour = await Tour.find()
        .sort({ 'viewCount': -1 })
        .limit(3)
    return tour;
}

exports.getCheapestTourServices = async () => {
    const tour = await Tour.find()
        .sort({ 'price': 1 })
        .limit(3)
    return tour;
}