# bitopro-api-node

[![npm version](https://badge.fury.io/js/bitopro-api-node.svg)](https://badge.fury.io/js/bitopro-api-node)

SDK for the [BitoPro](https://www.bitopro.com/) API.

[Bitopro official API document](https://developer.bitopro.com/docs)

- [bitopro-api-node](#bitopro-api-node)
    - [Installation](#installation)
    - [Getting started](#getting-started)
    - [Rate Limit](#rate-limit)
    - [Precisions](#precisions)
      - [Price precision](#price-precision)
      - [Amount precision](#amount-precision)
    - [Minimum order amount](#minimum-order-amount)
    - [Public REST Endpoints](#public-rest-endpoints)
      - [getOrderBook](#getorderbook)
      - [getTickers](#gettickers)
      - [getTrades](#gettrades)
    - [Authenticated REST Endpoints](#authenticated-rest-endpoints)
      - [getAccountBalances](#getaccountbalances)
      - [getOrderHistory](#getorderhistory)
      - [getOrders](#getorders)
      - [createOrder](#createorder)
      - [cancelOrder](#cancelorder)
      - [getOrder](#getorder)
  - [Contributing](#contributing)
  - [License](#license)

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

### Rate Limit

| Types | Rate Limit |
|---|---|
|  Public API | 600 requests per minute per IP |
|  Authenticated API | 600 requests per minute per IP/600 requests per minute per user|

### Precisions

#### Price precision

The tick size of all pairs is 0.00000001, which means you can trade all pairs only for prices that are a multiple of 0.00000001. For example, you could place a buy BTC/TWD order at price 180,070.12345678. but you will fail to open an order at price 180,070.123456789.

#### Amount precision

The same as price precision but you should be aware the [minimum order amount](#minimum-order-amount).

### Minimum order amount

Checkout the [official settings](https://www.bitopro.com/fees) of minimum amount.

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
    }
  ]
}
```
</details>

#### getTickers

```js
let getTickers = async () => {
  try {
    // all tickers
    let tickers = await bitopro.getTickers()
    console.log(tickers)

    // single ticker
    let ticker = await bitopro.getTickers('btc_twd')
    console.log(ticker)
  } catch (e) {
    console.log(e)
  }
}

getTickers()
```

<details>
<summary>Output</summary>

```js
// all tickers
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
    }
  ]
}

// single ticker
{
  "data": {
    "pair": "xem_eth",
    "lastPrice": "0.00010800",
    "isBuyer": false,
    "priceChange24hr": "0",
    "volume24hr": "0.00000000",
    "high24hr": "0.00010800",
    "low24hr": "0.00010800"
  }
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

#### getOrder

```js
let getOrder = async () => {
  try {
    let orderID = 123
    let result = await bitopro.getOrder('btc_twd', orderID)
    console.log(result)
  } catch (e) {
    console.log(e)
  }
}

getOrder()
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

Bug reports and pull requests are welcome on GitHub at https://github.com/bitoex/bitopro-api-node and this project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

1. Fork it
2. Create your feature branch (```git checkout -b my-new-feature```).
3. Commit your changes (```git commit -am 'Added some feature'```)
4. Push to the branch (```git push origin my-new-feature```)
5. Create new Pull Request

## License

The SDK is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).