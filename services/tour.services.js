const Tour = require("../models/Tour")

exports.getTourServices = async () => {
    const tours = await Tour.find({});
    return tours;
}

exports.createTourServices = async (data) => {
    const tour = await Tour.create(data);
    return tour;
}

exports.getTourDetailsServices = async (id) => {
    const tour = await Tour.find({ _id: id });
    return tour;
}

exports.updateTourDetailsServices = async (id, data) => {
    const tour = await Tour.updateOne({ _id: id }, {$set: data}, { runValidators: true });
    return tour;
}