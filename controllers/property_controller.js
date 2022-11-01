const axios = require("axios");
const cors = require("cors");
const fetch = require("node-fetch");

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
      // const secondQtr2022 = await axios.get(
      //   `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=22q2`,
      //   {
      //     headers: {
      //       AccessKey: `${process.env.ACCESS_KEY}`,
      //       Token: token,
      //     },
      //   }
      // );
      // const thirdQtr2022 = await axios.get(
      //   `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=22q3`,
      //   {
      //     headers: {
      //       AccessKey: `${process.env.ACCESS_KEY}`,
      //       Token: token,
      //     },
      //   }
      // );
      // const allQtrData = firstQtr2022.data.Result.concat(
      //   secondQtr2022.data.Result,
      //   thirdQtr2022.data.Result
      // );
      const rentalData2022 = firstQtr2022.data.Result;
      return res.json(rentalData2022);
    } catch (err) {
      console.log("Unable to get 2022 rental transaction data", err);
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
      // const secondQtr2021 = await axios.get(
      //   `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=21q2`,
      //   {
      //     headers: {
      //       AccessKey: `${process.env.ACCESS_KEY}`,
      //       Token: token,
      //     },
      //   }
      // );
      // const thirdQtr2021 = await axios.get(
      //   `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=21q3`,
      //   {
      //     headers: {
      //       AccessKey: `${process.env.ACCESS_KEY}`,
      //       Token: token,
      //     },
      //   }
      // );
      // const fourthQtr2021 = await axios.get(
      //   `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=21q4`,
      //   {
      //     headers: {
      //       AccessKey: `${process.env.ACCESS_KEY}`,
      //       Token: token,
      //     },
      //   }
      // );
      // const allQtrData = firstQtr2021.data.Result.concat(
      //   secondQtr2021.data.Result,
      //   thirdQtr2021.data.Result,
      //   fourthQtr2021.data.Result
      // );
      const rentalData2021 = firstQtr2021.data.Result;
      return res.json(rentalData2021);
    } catch (err) {
      console.log("Unable to get 2021 rental transaction data", err);
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
      // const secondQtr2020 = await axios.get(
      //   `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=20q2`,
      //   {
      //     headers: {
      //       AccessKey: `${process.env.ACCESS_KEY}`,
      //       Token: token,
      //     },
      //   }
      // );
      // const thirdQtr2020 = await axios.get(
      //   `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=20q3`,
      //   {
      //     headers: {
      //       AccessKey: `${process.env.ACCESS_KEY}`,
      //       Token: token,
      //     },
      //   }
      // );
      // const fourthQtr2020 = await axios.get(
      //   `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=20q4`,
      //   {
      //     headers: {
      //       AccessKey: `${process.env.ACCESS_KEY}`,
      //       Token: token,
      //     },
      //   }
      // );
      // const allQtrData = firstQtr2020.data.Result.concat(
      //   secondQtr2020.data.Result,
      //   thirdQtr2020.data.Result,
      //   fourthQtr2020.data.Result
      // );
      const rentalData2020 = firstQtr2020.data.Result;
      return res.json(rentalData2020);
    } catch (err) {
      console.log("Unable to get 2020 rental transaction data", err);
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
      const medianRentalPsfData = medianRentalPsfResponse.data.Result;
      return res.json(medianRentalPsfData);
    } catch (err) {
      console.log("Unable to get median rental psf data");
    }
  },

  getProjectDetails: async (req, res) => {
    try {
      const tokenResponse = await fetch(
        `https://www.ura.gov.sg/uraDataService/insertNewToken.action`,
        {
          headers: {
            AccessKey: `${process.env.ACCESS_KEY}`,
          },
        }
      );
      const tokenData = await tokenResponse.json();
      const token = tokenData.Result;
      // const projectDetails = await fetch(
      //   `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=21q1`,
      //   {
      //     headers: {
      //       AccessKey: `${process.env.ACCESS_KEY}`,
      //       Token: token,
      //     },
      //   }
      // );
      // const response = await projectDetails?.json();
      // console.log(response);
      // return res.json(response);
      // return response.json();

      const projectDetails = await Promise.all([
        fetch(
          `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=21q1`,
          {
            headers: {
              AccessKey: `${process.env.ACCESS_KEY}`,
              Token: token,
            },
          }
        ),
        // fetch(
        //   `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=21q2`,
        //   {
        //     headers: {
        //       AccessKey: `${process.env.ACCESS_KEY}`,
        //       Token: token,
        //     },
        //   }
        // ),
        // fetch(
        //   `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=21q3`,
        //   {
        //     headers: {
        //       AccessKey: `${process.env.ACCESS_KEY}`,
        //       Token: token,
        //     },
        //   }
        // ),
        // fetch(
        //   `https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental&refPeriod=21q4`,
        //   {
        //     headers: {
        //       AccessKey: `${process.env.ACCESS_KEY}`,
        //       Token: token,
        //     },
        //   }
        // ),
      ]);
      let details = [];
      for (let i = 0; i < projectDetails.length; i++) {
        const newArray = await projectDetails[i].json();
        details.push(...newArray.Result);
      }
      return res.json(details);
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
      // const batchTwo = await axios.get(`${baseUrl}2`, headers);
      // const batchThree = await axios.get(`${baseUrl}3`, headers);
      // const batchFour = await axios.get(`${baseUrl}4`, headers);

      // const allData = batchOne.data.Result.concat(
      //   batchTwo.data.Result,
      //   batchThree.data.Result,
      //   batchFour.data.Result
      // );
      const response = batchOne.data.Result;
      return res.json(response);
    } catch (err) {
      console.log("Unable to get sales data", err);
    }
  },
};
