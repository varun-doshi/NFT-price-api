const axios = require("axios");

const getTransactionPrice = (req, res) => {
  const txn_hash = req.body.hash;
  const options = {
    method: "POST",
    url: "https://eth-mainnet.g.alchemy.com/v2/7dPsv4k9QI6KAuCyfQSF3tzdY7coYthq",
    headers: { accept: "application/json", "content-type": "application/json" },
    data: {
      id: 1,
      jsonrpc: "2.0",
      method: "eth_getTransactionByHash",
      params: [txn_hash],
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(
        parseInt(response.data.result.value) / 1000000000000000000,
        "ETH"
      );
      res
        .status(200)
        .send(
          (
            parseInt(response.data.result.value) / 1000000000000000000
          ).toString()
        );
    })
    .catch(function (error) {
      res.status(400).send(error);
      console.error(error);
    });
};

module.exports = getTransactionPrice;
