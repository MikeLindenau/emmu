
const Emmu = require('../lib')

// Spawn emmu process
const service = Emmu.spawn()

const init = async () => {
  
  await service.use([
    {
      // plugin
      // options
    }
  ])

  await service.start()

  console.log(`Service ${service.info.id}`)
}

init()