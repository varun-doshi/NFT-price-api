# API server for fetching NFT Price

<br/>

### 3 apis available:
1 To fetch current price of specific nft token <br/>
2 get historic floor price of nft collection (upto 30 days) <br/>
3 get price at which a nft was transferred <br/>

Base Endpoint: `http://localhost:8080/`

## For 1:
`http://localhost:8080/price` <br/>
[GET] Sample data to send through body:<br/>
`
{
  "address":"0x32973908FaeE0Bf825A343000fE412ebE56F802A",
  "tokenId":"2712"
}
`
<br/>
## For 2:
`http://localhost:8080/colection` <br/>
[GET] Sample data to send through body:<br/>
`
{
  "start_date": "2024-01-18",
  "contract_address": "0xED5AF388653567Af2F388E6224dC7C4b3241C544"
}
`
<br/>
## For 3:
`http://localhost:8080/transaction` <br/>
[GET] Sample data to send through body:<br/>
`
{ 
  "hash":"0xb2b28dc85712dc322fd6acb370696cce353fa5c947798868cd4b40810ff284d9"
}
`
