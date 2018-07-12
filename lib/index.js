const Events = require('eventemitter3')
const Assert = require('assert')
const Util = require('util')

const Patrun = require('patrun')
const log = console.log

// NOTE: Might want to think about use send -> act and 
const core = {
  add: function add(pattern, action) {
    return this.actRouter.add(pattern, action)
  },
  act: function act(msg) {
    const action = this.actRouter.find(msg)
     return action(msg)
  }
}

function Emmu(options) {
  const actRouter = Patrun({gex:true})
  return Object.assign({actRouter, log}, core)
}

function Spawn(options) {
  log(' Starting Emmu process...')
  return Emmu(options)
}

module.exports = Spawn
module.exports.Spawn = Spawn
module.exports.Emmu = Emmu


