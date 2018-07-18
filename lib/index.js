const Emmu = require('./emmu')

function Spawn(options) {
  const service = Emmu(options)

  service.log.info(`Micro service ${service.info().instanceId} is running`)
  
  return service
}

exports.Spawn = Spawn
exports.spawn = Spawn


