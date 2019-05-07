# bitopro-api-node

SDK for the [BitoPro](https://www.bitopro.com/) API.

[Bitopro official API document](https://developer.bitopro.com/docs)

### Installation

    npm install bitopro-api-node

### Getting started

Create BitoPro client. Pass api keys only if
you are going to do authenticated calls. You can create an api key
[here](https://www.bitopro.com/api).

```js
const BitoPro = require('bitopro-api-node')
const bitopro = new BitoPro('your_api_key', 'your_api_secret', 'your_email')
```

### Table of Contents

 - [Public REST Endpoints](#public-rest-endpoints)
      - [getOrderBook](#getorderbook)
      - [getTicker](#getticker)
      - [getTickers](#gettickers)
      - [getTrades](#gettrades)
  - [Authenticated REST Endpoints](#authenticated-rest-endpoints)
    - [getAccountBalances](#getaccountbalances)
    - [getOrderHistory](#getorderhistory)
    - [getOrders](#getorders)
    - [createOrder](#createorder)
    - [cancelOrder](#cancelorder)
    - [getOrderStatus](#getorderstatus)

### Public REST Endpoints

#### getOrderBook

```js
let getOrderBook = async () => {
  try {
    let book = await bitopro.getOrderBook('btc_twd')
    console.log(book)
  } catch (e) {
    console.log(e)
  }
}

getOrderBook()
```

<details>
<summary>Output</summary>

```js
{
  "bids": [
    {
      "price": "180500",
      "amount": "0.12817687",
      "count": 1,
      "total": "0.12817687"
    },
    {
      "price": "180010",
      "amount": "0.32292",
      "count": 2,
      "total": "0.45109687"
    },
    {
      "price": "180000",
      "amount": "0.24236",
      "count": 3,
      "total": "0.69345687"
    },
    {
      "price": "178500",
      "amount": "0.27899",
      "count": 1,
      "total": "0.97244687"
    },
    {
      "price": "177211",
      "amount": "0.02109349",
      "count": 1,
      "total": "0.99354036"
    },
    {
      "price": "177210",
      "amount": "0.051",
      "count": 1,
      "total": "1.04454036"
    },
    {
      "price": "177200",
      "amount": "0.05",
      "count": 1,
      "total": "1.09454036"
    },
    {
      "price": "177000",
      "amount": "0.136",
      "count": 1,
      "total": "1.23054036"
    },
    {
      "price": "176700",
      "amount": "0.3",
      "count": 1,
      "total": "1.53054036"
    },
    {
      "price": "176500",
      "amount": "0.51",
      "count": 1,
      "total": "2.04054036"
    },
    {
      "price": "176250",
      "amount": "0.32326241",
      "count": 1,
      "total": "2.36380277"
    },
    {
      "price": "176102",
      "amount": "0.1",
      "count": 1,
      "total": "2.46380277"
    },
    {
      "price": "176000",
      "amount": "0.51761",
      "count": 2,
      "total": "2.98141277"
    },
    {
      "price": "175000",
      "amount": "0.16181004",
      "count": 3,
      "total": "3.14322281"
    },
    {
      "price": "174500",
      "amount": "0.1",
      "count": 10,
      "total": "3.24322281"
    },
    {
      "price": "174339",
      "amount": "0.00458608",
      "count": 1,
      "total": "3.24780889"
    },
    {
      "price": "174300",
      "amount": "0.3",
      "count": 1,
      "total": "3.54780889"
    },
    {
      "price": "174251",
      "amount": "0.017211",
      "count": 1,
      "total": "3.56501989"
    },
    {
      "price": "174250",
      "amount": "0.44799076",
      "count": 3,
      "total": "4.01301065"
    },
    {
      "price": "174200",
      "amount": "0.3",
      "count": 1,
      "total": "4.31301065"
    }
  ],
  "asks": [
    {
      "price": "180599",
      "amount": "0.00326056",
      "count": 1,
      "total": "0.00326056"
    },
    {
      "price": "180600",
      "amount": "0.04202575",
      "count": 1,
      "total": "0.04528631"
    },
    {
      "price": "181499",
      "amount": "0.111",
      "count": 2,
      "total": "0.15628631"
    },
    {
      "price": "181500",
      "amount": "0.26115309",
      "count": 4,
      "total": "0.4174394"
    },
    {
      "price": "181598",
      "amount": "0.011",
      "count": 1,
      "total": "0.4284394"
    },
    {
      "price": "181599",
      "amount": "0.1",
      "count": 1,
      "total": "0.5284394"
    },
    {
      "price": "181699",
      "amount": "0.111",
      "count": 2,
      "total": "0.6394394"
    },
    {
      "price": "181700",
      "amount": "0.05",
      "count": 1,
      "total": "0.6894394"
    },
    {
      "price": "181849",
      "amount": "0.011",
      "count": 1,
      "total": "0.7004394"
    },
    {
      "price": "181850",
      "amount": "0.1",
      "count": 1,
      "total": "0.8004394"
    },
    {
      "price": "181899",
      "amount": "0.011",
      "count": 1,
      "total": "0.8114394"
    },
    {
      "price": "181990",
      "amount": "0.1165",
      "count": 2,
      "total": "0.9279394"
    },
    {
      "price": "181999",
      "amount": "0.21",
      "count": 2,
      "total": "1.1379394"
    },
    {
      "price": "182000",
      "amount": "1.92477598",
      "count": 6,
      "total": "3.06271538"
    },
    {
      "price": "182130",
      "amount": "0.13823834",
      "count": 1,
      "total": "3.20095372"
    },
    {
      "price": "182200",
      "amount": "0.1",
      "count": 1,
      "total": "3.30095372"
    },
    {
      "price": "182300",
      "amount": "0.05",
      "count": 1,
      "total": "3.35095372"
    },
    {
      "price": "182500",
      "amount": "0.02810771",
      "count": 2,
      "total": "3.37906143"
    },
    {
      "price": "182600",
      "amount": "0.05",
      "count": 1,
      "total": "3.42906143"
    },
    {
      "price": "182800",
      "amount": "0.1",
      "count": 1,
      "total": "3.52906143"
    }
  ]
}
```
</details>


#### getTicker

```js
let getTicker = async () => {
  try {
    let ticker = await bitopro.getTicker('btc_twd')
    console.log(ticker)
  } catch (e) {
    console.log(e)
  }
}

getTicker()
```

<details>
<summary>Output</summary>

```js
{
  "data": {
    "pair": "btc_twd",
    "lastPrice": "180500.00000000",
    "isBuyer": true,
    "priceChange24hr": "4.93",
    "volume24hr": "94.44971788",
    "high24hr": "181500.00000000",
    "low24hr": "173010.00000000"
  }
}
```

</details>

#### getTickers

```js
let getTickers = async () => {
  try {
    let tickers = await bitopro.getTickers()
    console.log(tickers)
  } catch (e) {
    console.log(e)
  }
}

getTickers()
```

<details>
<summary>Output</summary>

```js
{
  "data": [
    {
      "pair": "xem_btc",
      "lastPrice": "0.00000098",
      "isBuyer": false,
      "priceChange24hr": "0",
      "volume24hr": "0.00000000",
      "high24hr": "0.00000098",
      "low24hr": "0.00000098"
    },
    {
      "pair": "bch_eth",
      "lastPrice": "0.60010000",
      "isBuyer": false,
      "priceChange24hr": "0",
      "volume24hr": "0.00000000",
      "high24hr": "0.60010000",
      "low24hr": "0.60010000"
    },
    {
      "pair": "eth_usdt",
      "lastPrice": "179.22000000",
      "isBuyer": true,
      "priceChange24hr": "10.85",
      "volume24hr": "925.14654180",
      "high24hr": "182.30000000",
      "low24hr": "159.94000000"
    },
    {
      "pair": "qntu_eth",
      "lastPrice": "0.00000077",
      "isBuyer": true,
      "priceChange24hr": "10",
      "volume24hr": "1193890.00000000",
      "high24hr": "0.00000079",
      "low24hr": "0.00000077"
    },
    {
      "pair": "panda_twd",
      "lastPrice": "0.03000000",
      "isBuyer": true,
      "priceChange24hr": "50",
      "volume24hr": "6785964.41426924",
      "high24hr": "0.03000000",
      "low24hr": "0.02000000"
    },
    {
      "pair": "btg_twd",
      "lastPrice": "560.00000000",
      "isBuyer": true,
      "priceChange24hr": "1.45",
      "volume24hr": "1.53000000",
      "high24hr": "560.00000000",
      "low24hr": "502.00000000"
    },
    {
      "pair": "xem_twd",
      "lastPrice": "1.02000000",
      "isBuyer": true,
      "priceChange24hr": "25.93",
      "volume24hr": "640.00000000",
      "high24hr": "1.02000000",
      "low24hr": "1.02000000"
    },
    {
      "pair": "bch_twd",
      "lastPrice": "8950.00000000",
      "isBuyer": true,
      "priceChange24hr": "1.05",
      "volume24hr": "35.78429184",
      "high24hr": "8950.00000000",
      "low24hr": "7884.00000000"
    },
    {
      "pair": "eth_twd",
      "lastPrice": "5410.00000000",
      "isBuyer": true,
      "priceChange24hr": "11.23",
      "volume24hr": "4584.33850514",
      "high24hr": "5420.00000000",
      "low24hr": "4873.00000000"
    },
    {
      "pair": "btg_usdt",
      "lastPrice": "3.74000000",
      "isBuyer": false,
      "priceChange24hr": "0",
      "volume24hr": "0.00000000",
      "high24hr": "3.74000000",
      "low24hr": "3.74000000"
    },
    {
      "pair": "btc_twd",
      "lastPrice": "180500.00000000",
      "isBuyer": true,
      "priceChange24hr": "3.86",
      "volume24hr": "94.44092822",
      "high24hr": "181500.00000000",
      "low24hr": "173010.00000000"
    },
    {
      "pair": "bito_eth",
      "lastPrice": "0.00015000",
      "isBuyer": false,
      "priceChange24hr": "-11.76",
      "volume24hr": "43809.40900926",
      "high24hr": "0.00016100",
      "low24hr": "0.00015000"
    },
    {
      "pair": "rpc_twd",
      "lastPrice": "0.29000000",
      "isBuyer": false,
      "priceChange24hr": "0",
      "volume24hr": "159600.00000000",
      "high24hr": "0.29000000",
      "low24hr": "0.26000000"
    },
    {
      "pair": "mith_twd",
      "lastPrice": "1.15000000",
      "isBuyer": false,
      "priceChange24hr": "0",
      "volume24hr": "0.00000000",
      "high24hr": "1.15000000",
      "low24hr": "1.15000000"
    },
    {
      "pair": "btg_eth",
      "lastPrice": "0.01510000",
      "isBuyer": false,
      "priceChange24hr": "0",
      "volume24hr": "0.00000000",
      "high24hr": "0.01510000",
      "low24hr": "0.01510000"
    },
    {
      "pair": "ltc_btc",
      "lastPrice": "0.01284900",
      "isBuyer": false,
      "priceChange24hr": "-3.37",
      "volume24hr": "2.02350376",
      "high24hr": "0.01284900",
      "low24hr": "0.01284900"
    },
    {
      "pair": "ltc_usdt",
      "lastPrice": "77.85000000",
      "isBuyer": true,
      "priceChange24hr": "2.1",
      "volume24hr": "25.73118610",
      "high24hr": "78.02000000",
      "low24hr": "72.33000000"
    },
    {
      "pair": "bch_btc",
      "lastPrice": "0.05029200",
      "isBuyer": false,
      "priceChange24hr": "-0.03",
      "volume24hr": "0.69995824",
      "high24hr": "0.05029200",
      "low24hr": "0.05027500"
    },
    {
      "pair": "bito_twd",
      "lastPrice": "0.79000000",
      "isBuyer": true,
      "priceChange24hr": "1.28",
      "volume24hr": "413728.34103948",
      "high24hr": "0.79000000",
      "low24hr": "0.76000000"
    },
    {
      "pair": "bito_usdt",
      "lastPrice": "0.02590000",
      "isBuyer": true,
      "priceChange24hr": "3.6",
      "volume24hr": "5000.00000000",
      "high24hr": "0.02590000",
      "low24hr": "0.02510000"
    },
    {
      "pair": "bcd_twd",
      "lastPrice": "30.20000000",
      "isBuyer": true,
      "priceChange24hr": "0.33",
      "volume24hr": "112.38780578",
      "high24hr": "39.00000000",
      "low24hr": "30.20000000"
    },
    {
      "pair": "ltc_eth",
      "lastPrice": "0.44273000",
      "isBuyer": false,
      "priceChange24hr": "0",
      "volume24hr": "0.00000000",
      "high24hr": "0.44273000",
      "low24hr": "0.44273000"
    },
    {
      "pair": "bch_usdt",
      "lastPrice": "295.52000000",
      "isBuyer": true,
      "priceChange24hr": "3.54",
      "volume24hr": "0.28000000",
      "high24hr": "295.52000000",
      "low24hr": "286.70000000"
    },
    {
      "pair": "bchsv_twd",
      "lastPrice": "1500.00000000",
      "isBuyer": false,
      "priceChange24hr": "-0.07",
      "volume24hr": "3.77422200",
      "high24hr": "1501.00000000",
      "low24hr": "1500.00000000"
    },
    {
      "pair": "panda_eth",
      "lastPrice": "0.00000500",
      "isBuyer": true,
      "priceChange24hr": "96.85",
      "volume24hr": "142351.54746946",
      "high24hr": "0.00000500",
      "low24hr": "0.00000300"
    },
    {
      "pair": "eth_btc",
      "lastPrice": "0.03009300",
      "isBuyer": true,
      "priceChange24hr": "6.23",
      "volume24hr": "71.60879132",
      "high24hr": "0.03100000",
      "low24hr": "0.03009300"
    },
    {
      "pair": "bito_btc",
      "lastPrice": "0.00000490",
      "isBuyer": false,
      "priceChange24hr": "0",
      "volume24hr": "0.00000000",
      "high24hr": "0.00000490",
      "low24hr": "0.00000490"
    },
    {
      "pair": "npxs_eth",
      "lastPrice": "0.00000302",
      "isBuyer": false,
      "priceChange24hr": "0",
      "volume24hr": "0.00000000",
      "high24hr": "0.00000302",
      "low24hr": "0.00000302"
    },
    {
      "pair": "cgp_twd",
      "lastPrice": "4.11000000",
      "isBuyer": true,
      "priceChange24hr": "0.24",
      "volume24hr": "40.00000000",
      "high24hr": "4.11000000",
      "low24hr": "4.11000000"
    },
    {
      "pair": "btc_usdt",
      "lastPrice": "5980.29000000",
      "isBuyer": true,
      "priceChange24hr": "5.29",
      "volume24hr": "14.98172032",
      "high24hr": "5981.95000000",
      "low24hr": "5634.67000000"
    },
    {
      "pair": "rpc_eth",
      "lastPrice": "0.00005500",
      "isBuyer": false,
      "priceChange24hr": "-12.7",
      "volume24hr": "221600.00000000",
      "high24hr": "0.00006300",
      "low24hr": "0.00005000"
    },
    {
      "pair": "trx_twd",
      "lastPrice": "0.72000000",
      "isBuyer": true,
      "priceChange24hr": "4.35",
      "volume24hr": "15242.00000000",
      "high24hr": "0.72000000",
      "low24hr": "0.70000000"
    },
    {
      "pair": "twdt_eth",
      "lastPrice": "0.01000000",
      "isBuyer": false,
      "priceChange24hr": "0",
      "volume24hr": "0.00000000",
      "high24hr": "0.01000000",
      "low24hr": "0.01000000"
    },
    {
      "pair": "sda_twd",
      "lastPrice": "0.17000000",
      "isBuyer": false,
      "priceChange24hr": "-15",
      "volume24hr": "82492.00000000",
      "high24hr": "0.19000000",
      "low24hr": "0.17000000"
    },
    {
      "pair": "usdt_twd",
      "lastPrice": "30.23000000",
      "isBuyer": false,
      "priceChange24hr": "-0.26",
      "volume24hr": "465031.85312330",
      "high24hr": "30.88000000",
      "low24hr": "29.82000000"
    },
    {
      "pair": "xem_usdt",
      "lastPrice": "0.00120000",
      "isBuyer": false,
      "priceChange24hr": "0",
      "volume24hr": "0.00000000",
      "high24hr": "0.00120000",
      "low24hr": "0.00120000"
    },
    {
      "pair": "ltc_twd",
      "lastPrice": "2395.00000000",
      "isBuyer": true,
      "priceChange24hr": "7.69",
      "volume24hr": "464.80926846",
      "high24hr": "2395.00000000",
      "low24hr": "2213.00000000"
    },
    {
      "pair": "xem_eth",
      "lastPrice": "0.00010800",
      "isBuyer": false,
      "priceChange24hr": "0",
      "volume24hr": "0.00000000",
      "high24hr": "0.00010800",
      "low24hr": "0.00010800"
    }
  ]
}
```

</details>

#### getTrades

```js
let getTrades = async () => {
  try {
    let trades = await bitopro.getTrades('btc_twd')
    console.log(trades)
  } catch (e) {
    console.log(e)
  }
}

getTrades()
```

<details>
<summary>Output</summary>

```js
{
  "data": [
    {
      "timestamp": 1557203407,
      "price": "180500.00000000",
      "amount": "0.07717687",
      "isBuyer": false
    },
    {
      "timestamp": 1557203187,
      "price": "180500.00000000",
      "amount": "0.05100000",
      "isBuyer": false
    },
    {
      "timestamp": 1557203053,
      "price": "180500.00000000",
      "amount": "0.01860000",
      "isBuyer": false
    },
    {
      "timestamp": 1557202804,
      "price": "180500.00000000",
      "amount": "0.04781533",
      "isBuyer": false
    },
    {
      "timestamp": 1557202804,
      "price": "180500.00000000",
      "amount": "0.06000000",
      "isBuyer": false
    },
    {
      "timestamp": 1557202804,
      "price": "180500.00000000",
      "amount": "0.13102370",
      "isBuyer": false
    },
    {
      "timestamp": 1557202549,
      "price": "180500.00000000",
      "amount": "0.00655840",
      "isBuyer": false
    },
    {
      "timestamp": 1557202489,
      "price": "180500.00000000",
      "amount": "0.05592825",
      "isBuyer": false
    },
    {
      "timestamp": 1557202453,
      "price": "180500.00000000",
      "amount": "0.00676165",
      "isBuyer": false
    },
    {
      "timestamp": 1557202443,
      "price": "180500.00000000",
      "amount": "0.00972800",
      "isBuyer": false
    },
    {
      "timestamp": 1557202354,
      "price": "180600.00000000",
      "amount": "0.01390250",
      "isBuyer": false
    },
    {
      "timestamp": 1557202299,
      "price": "180600.00000000",
      "amount": "0.10600000",
      "isBuyer": false
    },
    {
      "timestamp": 1557202299,
      "price": "181000.00000000",
      "amount": "0.02000000",
      "isBuyer": false
    },
    {
      "timestamp": 1557202004,
      "price": "181500.00000000",
      "amount": "0.08789808",
      "isBuyer": true
    },
    {
      "timestamp": 1557202004,
      "price": "181499.00000000",
      "amount": "0.01100000",
      "isBuyer": true
    },
    {
      "timestamp": 1557202004,
      "price": "181496.00000000",
      "amount": "0.01100000",
      "isBuyer": true
    },
    {
      "timestamp": 1557202004,
      "price": "181495.00000000",
      "amount": "0.13911212",
      "isBuyer": true
    },
    {
      "timestamp": 1557202004,
      "price": "181494.00000000",
      "amount": "0.23000000",
      "isBuyer": true
    },
    {
      "timestamp": 1557202004,
      "price": "181490.00000000",
      "amount": "0.01100000",
      "isBuyer": true
    },
    {
      "timestamp": 1557202004,
      "price": "181400.00000000",
      "amount": "0.05000000",
      "isBuyer": true
    },
    {
      "timestamp": 1557202004,
      "price": "181399.00000000",
      "amount": "0.01100000",
      "isBuyer": true
    },
    {
      "timestamp": 1557201527,
      "price": "180600.00000000",
      "amount": "0.01908950",
      "isBuyer": false
    },
    {
      "timestamp": 1557201527,
      "price": "180900.00000000",
      "amount": "0.00631099",
      "isBuyer": false
    },
    {
      "timestamp": 1557201133,
      "price": "180900.00000000",
      "amount": "0.05678777",
      "isBuyer": false
    },
    {
      "timestamp": 1557201043,
      "price": "180900.00000000",
      "amount": "0.00304639",
      "isBuyer": false
    },
    {
      "timestamp": 1557201043,
      "price": "180900.00000000",
      "amount": "0.10423901",
      "isBuyer": false
    },
    {
      "timestamp": 1557200926,
      "price": "180900.00000000",
      "amount": "0.02950998",
      "isBuyer": false
    },
    {
      "timestamp": 1557200910,
      "price": "181398.00000000",
      "amount": "0.09743767",
      "isBuyer": true
    },
    {
      "timestamp": 1557200910,
      "price": "181100.00000000",
      "amount": "0.04080067",
      "isBuyer": true
    },
    {
      "timestamp": 1557200907,
      "price": "181100.00000000",
      "amount": "0.00919933",
      "isBuyer": true
    },
    {
      "timestamp": 1557200859,
      "price": "181098.00000000",
      "amount": "0.01100000",
      "isBuyer": true
    },
    {
      "timestamp": 1557200851,
      "price": "181000.00000000",
      "amount": "0.05716250",
      "isBuyer": true
    },
    {
      "timestamp": 1557200851,
      "price": "181000.00000000",
      "amount": "0.02560366",
      "isBuyer": true
    },
    {
      "timestamp": 1557200774,
      "price": "180900.00000000",
      "amount": "0.04625101",
      "isBuyer": true
    },
    {
      "timestamp": 1557200765,
      "price": "180900.00000000",
      "amount": "0.06000000",
      "isBuyer": false
    },
    {
      "timestamp": 1557200604,
      "price": "180999.00000000",
      "amount": "0.10000000",
      "isBuyer": true
    },
    {
      "timestamp": 1557200604,
      "price": "180998.00000000",
      "amount": "0.14000000",
      "isBuyer": true
    },
    {
      "timestamp": 1557200604,
      "price": "180998.00000000",
      "amount": "0.03437625",
      "isBuyer": true
    },
    {
      "timestamp": 1557200604,
      "price": "180996.00000000",
      "amount": "0.01100000",
      "isBuyer": true
    },
    {
      "timestamp": 1557200604,
      "price": "180990.00000000",
      "amount": "0.10000000",
      "isBuyer": true
    },
    {
      "timestamp": 1557200604,
      "price": "180989.00000000",
      "amount": "0.01100000",
      "isBuyer": true
    },
    {
      "timestamp": 1557200604,
      "price": "180979.00000000",
      "amount": "0.01100000",
      "isBuyer": true
    },
    {
      "timestamp": 1557200604,
      "price": "180950.00000000",
      "amount": "0.39960118",
      "isBuyer": true
    },
    {
      "timestamp": 1557200588,
      "price": "180950.00000000",
      "amount": "0.38110804",
      "isBuyer": true
    },
    {
      "timestamp": 1557200588,
      "price": "180949.00000000",
      "amount": "0.05000000",
      "isBuyer": true
    },
    {
      "timestamp": 1557200538,
      "price": "180949.00000000",
      "amount": "0.01100000",
      "isBuyer": true
    },
    {
      "timestamp": 1557200468,
      "price": "180900.00000000",
      "amount": "0.02419990",
      "isBuyer": false
    },
    {
      "timestamp": 1557200361,
      "price": "180900.00000000",
      "amount": "0.05100000",
      "isBuyer": false
    },
    {
      "timestamp": 1557200354,
      "price": "180900.00000000",
      "amount": "0.02480010",
      "isBuyer": false
    },
    {
      "timestamp": 1557200255,
      "price": "180998.00000000",
      "amount": "0.00250000",
      "isBuyer": true
    },
    {
      "timestamp": 1557200229,
      "price": "180998.00000000",
      "amount": "0.22000000",
      "isBuyer": true
    },
    {
      "timestamp": 1557200180,
      "price": "180998.00000000",
      "amount": "0.61420000",
      "isBuyer": true
    },
    {
      "timestamp": 1557200180,
      "price": "180996.00000000",
      "amount": "0.09900000",
      "isBuyer": true
    },
    {
      "timestamp": 1557200180,
      "price": "180990.00000000",
      "amount": "0.05500000",
      "isBuyer": true
    },
    {
      "timestamp": 1557200180,
      "price": "180899.00000000",
      "amount": "0.01100000",
      "isBuyer": true
    },
    {
      "timestamp": 1557200180,
      "price": "180800.00000000",
      "amount": "0.05000000",
      "isBuyer": true
    },
    {
      "timestamp": 1557200180,
      "price": "180799.00000000",
      "amount": "0.01100000",
      "isBuyer": true
    },
    {
      "timestamp": 1557200180,
      "price": "180500.00000000",
      "amount": "0.05000000",
      "isBuyer": true
    },
    {
      "timestamp": 1557200139,
      "price": "180001.00000000",
      "amount": "0.02000000",
      "isBuyer": true
    },
    {
      "timestamp": 1557200139,
      "price": "180000.00000000",
      "amount": "0.18750000",
      "isBuyer": true
    },
    {
      "timestamp": 1557200139,
      "price": "180000.00000000",
      "amount": "0.04995000",
      "isBuyer": true
    },
    {
      "timestamp": 1557200139,
      "price": "180000.00000000",
      "amount": "0.02150000",
      "isBuyer": true
    },
    {
      "timestamp": 1557200139,
      "price": "180000.00000000",
      "amount": "0.12283159",
      "isBuyer": true
    },
    {
      "timestamp": 1557200139,
      "price": "180000.00000000",
      "amount": "0.02635000",
      "isBuyer": true
    },
    {
      "timestamp": 1557200139,
      "price": "180000.00000000",
      "amount": "0.09718776",
      "isBuyer": true
    },
    {
      "timestamp": 1557200139,
      "price": "180000.00000000",
      "amount": "0.24885779",
      "isBuyer": true
    },
    {
      "timestamp": 1557200123,
      "price": "180000.00000000",
      "amount": "0.35453844",
      "isBuyer": true
    },
    {
      "timestamp": 1557200123,
      "price": "180000.00000000",
      "amount": "0.05000000",
      "isBuyer": true
    },
    {
      "timestamp": 1557200123,
      "price": "180000.00000000",
      "amount": "0.09519833",
      "isBuyer": true
    },
    {
      "timestamp": 1557200123,
      "price": "180000.00000000",
      "amount": "0.18000000",
      "isBuyer": true
    },
    {
      "timestamp": 1557200123,
      "price": "180000.00000000",
      "amount": "0.03922686",
      "isBuyer": true
    },
    {
      "timestamp": 1557200123,
      "price": "180000.00000000",
      "amount": "0.28103637",
      "isBuyer": true
    },
    {
      "timestamp": 1557200085,
      "price": "180000.00000000",
      "amount": "0.16666666",
      "isBuyer": true
    },
    {
      "timestamp": 1557200008,
      "price": "180000.00000000",
      "amount": "0.55229697",
      "isBuyer": true
    },
    {
      "timestamp": 1557200008,
      "price": "180000.00000000",
      "amount": "0.19726476",
      "isBuyer": true
    },
    {
      "timestamp": 1557200008,
      "price": "180000.00000000",
      "amount": "0.16385400",
      "isBuyer": true
    },
    {
      "timestamp": 1557200008,
      "price": "179999.00000000",
      "amount": "0.12906000",
      "isBuyer": true
    },
    {
      "timestamp": 1557200008,
      "price": "179999.00000000",
      "amount": "0.07775319",
      "isBuyer": true
    },
    {
      "timestamp": 1557199897,
      "price": "179998.00000000",
      "amount": "0.01100000",
      "isBuyer": true
    },
    {
      "timestamp": 1557199768,
      "price": "179998.00000000",
      "amount": "0.25500000",
      "isBuyer": false
    },
    {
      "timestamp": 1557199506,
      "price": "179998.00000000",
      "amount": "0.00266658",
      "isBuyer": true
    },
    {
      "timestamp": 1557199459,
      "price": "179998.00000000",
      "amount": "0.00833342",
      "isBuyer": true
    },
    {
      "timestamp": 1557199222,
      "price": "179999.00000000",
      "amount": "0.05555586",
      "isBuyer": true
    },
    {
      "timestamp": 1557199045,
      "price": "179999.00000000",
      "amount": "0.16669095",
      "isBuyer": true
    },
    {
      "timestamp": 1557198786,
      "price": "180000.00000000",
      "amount": "0.03893333",
      "isBuyer": true
    },
    {
      "timestamp": 1557198754,
      "price": "180000.00000000",
      "amount": "0.29721267",
      "isBuyer": true
    },
    {
      "timestamp": 1557198754,
      "price": "180000.00000000",
      "amount": "0.06945399",
      "isBuyer": true
    },
    {
      "timestamp": 1557198675,
      "price": "180000.00000000",
      "amount": "0.03054601",
      "isBuyer": true
    },
    {
      "timestamp": 1557198675,
      "price": "180000.00000000",
      "amount": "0.01000000",
      "isBuyer": true
    },
    {
      "timestamp": 1557198675,
      "price": "180000.00000000",
      "amount": "0.03514076",
      "isBuyer": true
    },
    {
      "timestamp": 1557198675,
      "price": "180000.00000000",
      "amount": "0.02431323",
      "isBuyer": true
    },
    {
      "timestamp": 1557198550,
      "price": "180000.00000000",
      "amount": "0.02568677",
      "isBuyer": true
    },
    {
      "timestamp": 1557198550,
      "price": "180000.00000000",
      "amount": "0.02000000",
      "isBuyer": true
    },
    {
      "timestamp": 1557198550,
      "price": "179999.00000000",
      "amount": "0.01555018",
      "isBuyer": true
    },
    {
      "timestamp": 1557198550,
      "price": "179987.00000000",
      "amount": "0.05000000",
      "isBuyer": true
    },
    {
      "timestamp": 1557198550,
      "price": "179599.00000000",
      "amount": "0.01000000",
      "isBuyer": true
    },
    {
      "timestamp": 1557198550,
      "price": "179598.00000000",
      "amount": "0.05000000",
      "isBuyer": true
    },
    {
      "timestamp": 1557198550,
      "price": "179500.00000000",
      "amount": "0.05000000",
      "isBuyer": true
    },
    {
      "timestamp": 1557198550,
      "price": "179298.00000000",
      "amount": "0.05000000",
      "isBuyer": true
    },
    {
      "timestamp": 1557198550,
      "price": "179123.00000000",
      "amount": "0.03127095",
      "isBuyer": true
    }
  ]
}
```

</details>

### Authenticated REST Endpoints

#### getAccountBalances

```js
let getAccountBalances = async () => {
  try {
    let balances = await bitopro.getAccountBalances()
    console.log(balances)
  } catch (e) {
    console.log(e)
  }
}

getAccountBalances()
```

<details>
<summary>Output</summary>

```js
{
  "data": [
    {
      "amount": "10001",
      "available": "1.0",
      "currency": "bito",
      "stake": "10000"
    },
    {
      "amount": "0.0",
      "available": "1.0",
      "currency": "btc",
      "stake": "0"
    },
    {
      "amount": "3.0",
      "available": "0.01",
      "currency": "eth",
      "stake": "0"
    },
    {
      "amount": "30000",
      "available": "2500",
      "currency": "twd",
      "stake": "0"
    }
  ]
}
```

</details>

#### getOrderHistory

```js
let getOrderHistory = async () => {
  try {
    let history = await bitopro.getOrderHistory()
    console.log(history)
  } catch (e) {
    console.log(e)
  }
}

getOrderHistory()
```

<details>
<summary>Output</summary>

```js
{
  "data": [
    {
      "action": "buy",
      "avgExecutionPrice": "100000.00000000",
      "bitoFee": "0.00000000",
      "executedAmount": "1.00000000",
      "fee": "0.00100000",
      "feeSymbol": "BTC",
      "id": "123",
      "originalAmount": "1.00000000",
      "pair": "btc_twd",
      "price": "100000.00000000",
      "remainingAmount": "0.00000000",
      "status": 2,
      "timestamp": 1508753757000,
      "type": "limit"
    },
    {
      "action": "buy",
      "avgExecutionPrice": "100000.00000000",
      "bitoFee": "0.00000000",
      "executedAmount": "1.00000000",
      "fee": "0.00200000",
      "feeSymbol": "BTC",
      "id": "456",
      "originalAmount": "1.00000000",
      "pair": "btc_twd",
      "price": "100000.00000000",
      "remainingAmount": "0.00000000",
      "status": 2,
      "timestamp": 1508753787000,
      "type": "limit"
    }
  ]
}
```

</details>

#### getOrders

```js
let getOrders = async () => {
  try {
    // only fetch active orders
    let orders = await bitopro.getOrders('bito_twd')
    console.log(orders)

    // include history orders
    orders = await bitopro.getOrders('bito_twd', false)
    console.log(orders)

    // with page parameter
    orders = await bitopro.getOrders('bito_twd', false, 1)
    console.log(orders)
  } catch (e) {
    console.log(e)
  }
}

getOrders()
```

<details>
<summary>Output</summary>

```js
{
  "data": [
    {
      "action": "buy",
      "avgExecutionPrice": "100000.00000000",
      "bitoFee": "0.00000000",
      "executedAmount": "1.00000000",
      "fee": "0.00100000",
      "feeSymbol": "BTC",
      "id": "123",
      "originalAmount": "1.00000000",
      "pair": "btc_twd",
      "price": "100000.00000000",
      "remainingAmount": "0.00000000",
      "status": 2,
      "timestamp": 1508753757000,
      "type": "limit"
    },
    {
      "action": "buy",
      "avgExecutionPrice": "100000.00000000",
      "bitoFee": "0.00000000",
      "executedAmount": "1.00000000",
      "fee": "0.00200000",
      "feeSymbol": "BTC",
      "id": "456",
      "originalAmount": "1.00000000",
      "pair": "btc_twd",
      "price": "100000.00000000",
      "remainingAmount": "0.00000000",
      "status": 2,
      "timestamp": 1508753787000,
      "type": "limit"
    }
  ],
  "page": 1,
  "totalPages": 10
}
```

</details>

#### createOrder

```js
let createOrder = async () => {
  try {
    let order = {
      pair: 'btc_twd',
      action: 'buy',
      amount: '250',
      price: '0.000075', // no need for market orders
      timestamp: Date.now(),
      type: 'limit' // 'market' for market orders
    }
    let result = await bitopro.createOrder(order)
    console.log(result)
  } catch (e) {
    console.log(e)
  }
}

createOrder()
```

<details>
<summary>Output</summary>

```js
{
  "action": "buy",
  "amount": "0.235",
  "orderId": "11233456",
  "price": "1.0",
  "timestamp": 1504262258000
}
```

</details>

#### cancelOrder

```js
let cancelOrder = async () => {
  try {
    let orderID = 123456
    let result = await bitopro.cancelOrder('btc_twd', orderID)
    console.log(result)
  } catch (e) {
    console.log(e)
  }
}

cancelOrder()
```

<details>
<summary>Output</summary>

```js
{
  "action": "buy",
  "amount": 2.3,
  "orderId": "12234566",
  "price": 1.2,
  "timestamp": 1504262258000
}
```

</details>

#### getOrderStatus

```js
let getOrderStatus = async () => {
  try {
    let orderID = 123
    let result = await bitopro.getOrderStatus('btc_twd', orderID)
    console.log(result)
  } catch (e) {
    console.log(e)
  }
}

getOrderStatus()
```

<details>
<summary>Output</summary>

```js
{
  "action": "sell",
  "avgExecutionPrice": "112000.00000000",
  "bitoFee": "103.70370360",
  "executedAmount": "1.00000000",
  "fee": "0.00000000",
  "feeSymbol": "TWD",
  "id": "123",
  "originalAmount": "1.00000000",
  "pair": "btc_twd",
  "price": "112000.00000000",
  "remainingAmount": "0.00000000",
  "status": 2,
  "timestamp": 1508753757000,
  "type": "limit"
}
```

</details>

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/bitoex/bitopro-api-node. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

1. Fork it
2. Create your feature branch (```git checkout -b my-new-feature```).
3. Commit your changes (```git commit -am 'Added some feature'```)
4. Push to the branch (```git push origin my-new-feature```)
5. Create new Pull Request

## License

The SDK is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).