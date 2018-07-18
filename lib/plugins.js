const _ = require('lodash')

module.exports = function plugins() {
  const self = this

  return Object.assign(this, {
    use: function use(pluginDef) {
      const pluginList = _.isArray(pluginDef) ? pluginDef : [pluginDef]
      pluginList.forEach(async (p) => await p.plugin.call(self, p.options))
    }
  })
}