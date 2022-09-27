const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tour.controller');

router.route('/')
    .get(tourController.getTours)
    .post(tourController.createTours)

router.route('/trending')
    .get(tourController.getTrendingTour)
    
router.route('/:id')
    .get(tourController.getTourDetails)
    .patch(tourController.updateTourDetails)
module.exports = router;