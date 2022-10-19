const axios = require("axios");
const cors = require("cors");

module.exports = {
  // To amend the refPeriod
  getRentalData: async (req, res) => {
    try {
      const tokenResponse = await axios.get(
        `https://www.ura.gov.sg/uraDataService/insertNewToken.action`,
        {
          headers: {
            AccessKey: `${process.env.ACCESS_KEY}`,
          },
        }
      );
      const tokenData = await tokenResponse.data;
      const token = tokenData.Result;

      const rentalResponse = await axios.get(
        `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=22q1`,
        {
          headers: {
            AccessKey: `${process.env.ACCESS_KEY}`,
            Token: token,
          },
        }
      );
      const rentalData = await rentalResponse.data;
      return res.json(rentalData);
    } catch (err) {
      console.log("Unable to get rental transaction data");
    }
  },

  getMedianRentalPsfData: async (req, res) => {
    try {
      const tokenResponse = await axios.get(
        `https://www.ura.gov.sg/uraDataService/insertNewToken.action`,
        {
          headers: {
            AccessKey: `${process.env.ACCESS_KEY}`,
          },
        }
      );
      const tokenData = await tokenResponse.data;
      const token = tokenData.Result;

      const medianRentalPsfResponse = await axios.get(
        `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental_Median`,
        {
          headers: {
            AccessKey: `${process.env.ACCESS_KEY}`,
            Token: token,
          },
        }
      );
      const medianRentalPsfData = await medianRentalPsfResponse.data;
      return res.json(medianRentalPsfData);
    } catch (err) {
      console.log("Unable to get median rental psf data");
    }
  },

  // To amend the batch no.
  getSaleData: async (req, res) => {
    try {
      const tokenResponse = await axios.get(
        `https://www.ura.gov.sg/uraDataService/insertNewToken.action`,
        {
          headers: {
            AccessKey: `${process.env.ACCESS_KEY}`,
          },
        }
      );
      const tokenData = await tokenResponse.data;
      const token = tokenData.Result;

      const salesResponse = await axios.get(
        `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Transaction&batch=1`,
        {
          headers: {
            AccessKey: `${process.env.ACCESS_KEY}`,
            Token: token,
          },
        }
      );
      const salesData = await salesResponse.data;
      return res.json(salesData);
    } catch (err) {
      console.log("Unable to get median rental psf data");
    }
  },
};
