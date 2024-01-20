const express = require("express");
const app = express();
const port = 8080;
const getCollectionPrice = require("./controllers/collectionController.js");
const getTransactionPrice = require("./controllers/transactionController.js");
const getCurrentPrice = require("./controllers/nftPrice.js");

app.use(express.json());

//get floor price of collection(historical) upto 30 days
/*
Use body like this
{
  "start_date": "2024-01-18",
  "contract_address": "0xED5AF388653567Af2F388E6224dC7C4b3241C544"
}
*/
app.get("/collection", getCollectionPrice);

//get price of nft from transaction hash
/*
Use body like this
{
  "hash":"0xb2b28dc85712dc322fd6acb370696cce353fa5c947798868cd4b40810ff284d9"
}
*/
app.get("/transaction", getTransactionPrice);

//get current price of nft
/*
Use body like this
{
  "address":"0x32973908FaeE0Bf825A343000fE412ebE56F802A",
  "tokenId":"2712"
}
*/
app.get("/price", getCurrentPrice);

app.listen(port, () => {
  console.log("server lsitening at port:", port);
});
