const express = require("express");
const propertyController = require("../controllers/property_controller");
const router = express.Router();

// Rental
router.get("/rental-transactions-2022", propertyController.getRentalData2022);
router.get("/rental-transactions-2021", propertyController.getRentalData2021);
router.get("/rental-transactions-2020", propertyController.getRentalData2020);
// Median Rental PSF
router.get("/median-rental-psf", propertyController.getMedianRentalPsfData);
// Sale
router.get("/sale-transactions", propertyController.getSaleData);
// Project details
// router.get("/project-details", propertyController.getProjectDetails);

module.exports = router;
