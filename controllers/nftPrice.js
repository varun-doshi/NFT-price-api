const axios = require("axios");

const getCurrentPrice = (req, res) => {
  const contract_address = req.body.address;
  const tokenId = req.body.tokenId;
  const url = `https://data-api.nftgo.io/eth/v2/nft/${contract_address}/${tokenId}/info`;
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
      if (response.data.best_listing == null) {
        if (response.data.best_offer == null) {
          console.log(response.data.last_sale.price.value);
          res.send(response.data.last_sale.price.value.toString());
        } else {
          console.log(response.data.best_offer.value);
          res.send(response.data.best_offer.value.toString());
        }
      } else {
        console.log(response.data.best_listing.value, "ETH");
        res.status(200).send(response.data.best_listing.value.toString());
      }
    })
    .catch(function (error) {
      res.status(400).send(error);
      console.error(error);
    });
};

module.exports = getCurrentPrice;
