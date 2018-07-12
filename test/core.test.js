const { expect } = require('code');
const Lab = require('lab');
const { after, before, describe, it } = exports.lab = Lab.script();

const {Spawn} = require('../lib')
const emmu = Spawn()

describe('core', () => {
  it('resolves to an actor wih a matching pattern', async () => {
    emmu.add({a:1}, (msg, reply) => {
      return {ok: true}
    })

    const out = await emmu.act({a:1})

    expect(out.ok).to.be.true()
  })
})