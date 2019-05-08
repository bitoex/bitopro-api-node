const axios = require('axios')
const crypto = require('crypto')
const assert = require('assert')

class BitoPro {
  constructor (apiKey, apiSecret, email) {
    this.apiKey = apiKey
    this.apiSecret = apiSecret
    this.email = email
    this.orderSides = ['sell', 'buy']
    this.orderTypes = ['market', 'limit']
    this.baseUrl = 'https://api.bitopro.com/v2'
    this.sdk = 'node'
  }

  async getAccountBalances () {
    let url = this.baseUrl + '/accounts/balance'
    const nonce = Date.now()
    const body = { identity: this.email, nonce }
    const payload = Buffer.from(JSON.stringify(body)).toString('base64')

    const signature = crypto
      .createHmac('sha384', this.apiSecret)
      .update(payload)
      .digest('hex')

    const options = {
      headers: {
        'X-BITOPRO-APIKEY': this.apiKey,
        'X-BITOPRO-PAYLOAD': payload,
        'X-BITOPRO-SIGNATURE': signature,
        'X-BITOPRO-API': this.sdk
      }
    }

    let res = await axios.get(url, options)
    return res.data
  }

  async getOrderBook (pair) {
    assert(pair, 'Please provide pair')
    let url = this.baseUrl + '/order-book/' + pair
    const options = {
      headers: {
        'X-BITOPRO-API': this.sdk
      }
    }

    let res = await axios.get(url, options)
    return res.data
  }

  async getTickers (pair = '') {
    let url = this.baseUrl + '/tickers/' + pair
    const options = {
      headers: {
        'X-BITOPRO-API': this.sdk
      }
    }

    let res = await axios.get(url, options)
    return res.data
  }

  async getTrades (pair) {
    assert(pair, 'Please provide pair')
    let url = this.baseUrl + '/trades/' + pair
    const options = {
      headers: {
        'X-BITOPRO-API': this.sdk
      }
    }

    let res = await axios.get(url, options)
    return res.data
  }

  async getOrderHistory () {
    assert(this.apiKey, 'Please provide api key')
    assert(this.apiSecret, 'Please provide api secret')
    let url = this.baseUrl + '/orders/history'

    const nonce = Date.now()
    const body = { identity: this.email, nonce }
    const payload = Buffer.from(JSON.stringify(body)).toString('base64')

    const signature = crypto
      .createHmac('sha384', this.apiSecret)
      .update(payload)
      .digest('hex')

    const options = {
      headers: {
        'X-BITOPRO-APIKEY': this.apiKey,
        'X-BITOPRO-PAYLOAD': payload,
        'X-BITOPRO-SIGNATURE': signature,
        'X-BITOPRO-API': this.sdk
      }
    }

    let res = await axios.get(url, options)
    return res.data
  }

  async getOrders (pair, active = true, page = 1) {
    assert(this.apiKey, 'Please provide api key')
    assert(this.apiSecret, 'Please provide api secret')
    assert(pair, 'Please provide pair')

    let url = this.baseUrl + '/orders/' + pair + '?active=' + active + '&page=' + page
    const nonce = Date.now()
    const body = { identity: this.email, nonce }
    const payload = Buffer.from(JSON.stringify(body)).toString('base64')

    const signature = crypto
      .createHmac('sha384', this.apiSecret)
      .update(payload)
      .digest('hex')

    const options = {
      headers: {
        'X-BITOPRO-APIKEY': this.apiKey,
        'X-BITOPRO-PAYLOAD': payload,
        'X-BITOPRO-SIGNATURE': signature,
        'X-BITOPRO-API': this.sdk
      }
    }

    let res = await axios.get(url, options)
    return res.data
  }

  async getOrder (pair, orderId) {
    assert(this.apiKey, 'Please provide api key')
    assert(this.apiSecret, 'Please provide api secret')
    assert(pair, 'Please provide pair')
    assert(orderId, 'Please provide order id')
    let url = this.baseUrl + `/orders/${pair}/${orderId}`

    const nonce = Date.now()
    const body = { identity: this.email, nonce }
    const payload = Buffer.from(JSON.stringify(body)).toString('base64')

    const signature = crypto
      .createHmac('sha384', this.apiSecret)
      .update(payload)
      .digest('hex')

    const options = {
      headers: {
        'X-BITOPRO-APIKEY': this.apiKey,
        'X-BITOPRO-PAYLOAD': payload,
        'X-BITOPRO-SIGNATURE': signature,
        'X-BITOPRO-API': this.sdk
      }
    }

    let res = await axios.get(url, options)
    return res.data
  }

  async createOrder (order) {
    assert(this.apiKey, 'Please provide api key')
    assert(this.apiSecret, 'Please provide api secret')
    assert(order.action, 'Please provide action field(side)')
    assert(order.amount, 'Please provide amount')
    assert(order.pair, 'Please provide pair')
    assert(order.price, 'Please provide price')
    assert(order.timestamp, 'Please provide timestamp')
    assert(this.orderSides.includes(order.action), 'Parameter `side` must be buy or sell')
    assert(order.type, 'Please provide type')
    assert(this.orderTypes.includes(order.type), 'Parameter `type` must be market or limit')

    let url = this.baseUrl + '/orders/' + order.pair

    const payload = Buffer.from(JSON.stringify(order)).toString('base64')

    const signature = crypto
      .createHmac('sha384', this.apiSecret)
      .update(payload)
      .digest('hex')

    const options = {
      headers: {
        'X-BITOPRO-APIKEY': this.apiKey,
        'X-BITOPRO-PAYLOAD': payload,
        'X-BITOPRO-SIGNATURE': signature,
        'X-BITOPRO-API': this.sdk
      }
    }

    let res = await axios.post(url, order, options)
    return res.data
  }

  async cancelOrder (pair, id) {
    assert(this.apiKey, 'Please provide api key')
    assert(this.apiSecret, 'Please provide api secret')
    assert(pair, 'Please provide pair')
    assert(id, 'Please provide order id')

    const nonce = Date.now()
    let url = this.baseUrl + '/orders/' + pair + '/' + id
    const body = { identity: this.email, nonce }
    const payload = Buffer.from(JSON.stringify(body)).toString('base64')

    const signature = crypto
      .createHmac('sha384', this.apiSecret)
      .update(payload)
      .digest('hex')

    const options = {
      headers: {
        'X-BITOPRO-APIKEY': this.apiKey,
        'X-BITOPRO-PAYLOAD': payload,
        'X-BITOPRO-SIGNATURE': signature,
        'X-BITOPRO-API': this.sdk
      },
      data: body
    }
    let res = await axios.delete(url, options)
    return res.data
  }
}

module.exports = BitoPro
