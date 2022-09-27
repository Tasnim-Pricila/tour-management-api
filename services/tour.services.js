const Tour = require("../models/Tour")

exports.getTourServices = async () => {
    const tours = await Tour.find({});
    return tours;
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
        .sort({'viewCount': -1})
        .limit(3)
    return tour;
}