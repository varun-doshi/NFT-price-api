const axios = require("axios");

const getCollectionPrice = (req, res) => {
  const contract_address = req.body.contract_address;
  const start_date = req.body.start_date;
  const url = `https://data-api.nftgo.io/eth/v1/collection/${contract_address}/chart/floor-price?start_time=${start_date}T00%3A00%3A00%2B00%3A00&end_time=${start_date}T00%3A00%3A00%2B00%3A00&unit=ETH`;
  const options = {
    method: "GET",
    url: url,
    headers: {
      accept: "application/json",
      "X-API-KEY": "d398d172-6fa8-48d8-9c58-fb136a4abeb8",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data.y[0], "ETH");
      res.status(200).send(response.data.y[0].toString());
      console.log(`Price on ${start_date}:`, response.data.y[0], "ETH");
    })
    .catch(function (error) {
      res.status(400).send(error);
      console.error(error);
    });
};

module.exports = getCollectionPrice;
