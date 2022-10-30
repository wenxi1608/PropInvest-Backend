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

  getProjectDetails: async (req, res) => {
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

      baseUrl = `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=`;
      headers = {
        headers: {
          AccessKey: `${process.env.ACCESS_KEY}`,
          Token: token,
        },
      };
      const firstQtr = await axios.get(
        `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=22q1`,
        {
          headers: {
            AccessKey: `${process.env.ACCESS_KEY}`,
            Token: token,
          },
        }
      );
      const secondQtr = await axios.get(
        `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=22q2`,
        {
          headers: {
            AccessKey: `${process.env.ACCESS_KEY}`,
            Token: token,
          },
        }
      );
      const thirdQtr = await axios.get(
        `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=22q3`,
        {
          headers: {
            AccessKey: `${process.env.ACCESS_KEY}`,
            Token: token,
          },
        }
      );
      const fourthQtr = await axios.get(
        `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=21q4`,
        {
          headers: {
            AccessKey: `${process.env.ACCESS_KEY}`,
            Token: token,
          },
        }
      );
      const allQtrData = firstQtr.data.Result.concat(
        secondQtr.data.Result,
        thirdQtr.data.Result,
        fourthQtr.data.Result
      );
      const projectDetails = await allQtrData;
      console.log("All Qtr:", projectDetails);
      return res.json(projectDetails);
    } catch (err) {
      console.log("Unable to get details", err);
    }
  },

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

      baseUrl = `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Transaction&batch=`;
      headers = {
        headers: {
          AccessKey: `${process.env.ACCESS_KEY}`,
          Token: token,
        },
      };
      const batchOne = await axios.get(`${baseUrl}1`, headers);
      const batchTwo = await axios.get(`${baseUrl}2`, headers);
      const batchThree = await axios.get(`${baseUrl}3`, headers);
      const batchFour = await axios.get(`${baseUrl}4`, headers);

      const allData = batchOne.data.Result.concat(
        batchTwo.data.Result,
        batchThree.data.Result,
        batchFour.data.Result
      );
      const response = await allData;
      return res.json(response);
    } catch (err) {
      console.log("Unable to get sales data", err);
    }
  },
};
