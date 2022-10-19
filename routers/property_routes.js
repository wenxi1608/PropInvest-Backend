const express = require("express");
const propertyController = require("../controllers/property_controller");
const router = express.Router();

// Rental
router.get("/rental-transactions", propertyController.getRentalData);
// Median Rental PSF
router.get("/median-rental-psf", propertyController.getMedianRentalPsfData);
// Sale
router.get("/sale-transactions", propertyController.getSaleData);

module.exports = router;
