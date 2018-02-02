const {join} = require('path')
const match = require('fs-router')(join(__dirname, '/routes'))
const nuxt = require('../nuxt.index.js')

const handleErrors = fn => async (req, res) => {
  try {
    return await fn(req, res)
  } catch (err) {
    if ((err.statusCode || 500) < 500) err.stack = err.stack.split('\n')[0]
    throw err
  }
}

module.exports = handleErrors(async (req, res) => {
  let matched = match(req)
  return matched ? matched(req, res) : nuxt.render(req, res)
})
