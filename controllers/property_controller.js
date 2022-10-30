const axios = require("axios");
const cors = require("cors");

module.exports = {
  getRentalData2022: async (req, res) => {
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

      const firstQtr2022 = await axios.get(
        `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=22q1`,
        {
          headers: {
            AccessKey: `${process.env.ACCESS_KEY}`,
            Token: token,
          },
        }
      );
      const secondQtr2022 = await axios.get(
        `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=22q2`,
        {
          headers: {
            AccessKey: `${process.env.ACCESS_KEY}`,
            Token: token,
          },
        }
      );
      const thirdQtr2022 = await axios.get(
        `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=22q3`,
        {
          headers: {
            AccessKey: `${process.env.ACCESS_KEY}`,
            Token: token,
          },
        }
      );
      const allQtrData = firstQtr2022.data.Result.concat(
        secondQtr2022.data.Result,
        thirdQtr2022.data.Result
      );
      const rentalData2022 = await allQtrData;
      return res.json(rentalData2022);
    } catch (err) {
      console.log("Unable to get rental transaction data", err);
    }
  },

  getRentalData2021: async (req, res) => {
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

      const firstQtr2021 = await axios.get(
        `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=21q1`,
        {
          headers: {
            AccessKey: `${process.env.ACCESS_KEY}`,
            Token: token,
          },
        }
      );
      const secondQtr2021 = await axios.get(
        `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=21q2`,
        {
          headers: {
            AccessKey: `${process.env.ACCESS_KEY}`,
            Token: token,
          },
        }
      );
      const thirdQtr2021 = await axios.get(
        `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=21q3`,
        {
          headers: {
            AccessKey: `${process.env.ACCESS_KEY}`,
            Token: token,
          },
        }
      );
      const fourthQtr2021 = await axios.get(
        `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=21q4`,
        {
          headers: {
            AccessKey: `${process.env.ACCESS_KEY}`,
            Token: token,
          },
        }
      );
      const allQtrData = firstQtr2021.data.Result.concat(
        secondQtr2021.data.Result,
        thirdQtr2021.data.Result,
        fourthQtr2021.data.Result
      );
      const rentalData2021 = await allQtrData;
      return res.json(rentalData2021);
    } catch (err) {
      console.log("Unable to get rental transaction data", err);
    }
  },

  getRentalData2020: async (req, res) => {
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

      const firstQtr2020 = await axios.get(
        `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=20q1`,
        {
          headers: {
            AccessKey: `${process.env.ACCESS_KEY}`,
            Token: token,
          },
        }
      );
      const secondQtr2020 = await axios.get(
        `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=20q2`,
        {
          headers: {
            AccessKey: `${process.env.ACCESS_KEY}`,
            Token: token,
          },
        }
      );
      const thirdQtr2020 = await axios.get(
        `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=20q3`,
        {
          headers: {
            AccessKey: `${process.env.ACCESS_KEY}`,
            Token: token,
          },
        }
      );
      const fourthQtr2020 = await axios.get(
        `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=20q4`,
        {
          headers: {
            AccessKey: `${process.env.ACCESS_KEY}`,
            Token: token,
          },
        }
      );
      const allQtrData = firstQtr2020.data.Result.concat(
        secondQtr2020.data.Result,
        thirdQtr2020.data.Result,
        fourthQtr2020.data.Result
      );
      const rentalData2020 = await allQtrData;
      return res.json(rentalData2020);
    } catch (err) {
      console.log("Unable to get rental transaction data", err);
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
