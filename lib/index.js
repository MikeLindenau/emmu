const Emu = require('./emu')

function Spawn(options) {
  const service = Emu(options)

  service.log.info(`Micro service ${service.info().instanceId} is running`)
  
  return service
}

exports.Spawn = Spawn
exports.spawn = Spawn


