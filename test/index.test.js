import { assert } from 'chai'
import index from '../lib/index.js'

describe('castenv test', function () {
  it('castValue works', function () {
    assert.isBoolean(index.castValue('false'))
    assert.isNull(index.castValue('null'))
    assert.isString(index.castValue('5 people'))
    assert.isNumber(index.castValue('5'))
    assert.isObject(index.castValue('{"kka" : "kaka"}'))
    assert.isString(index.castValue('{"kka" : "kaka"'))
  })
  it('castValue exceptions', function () {
    assert.isString(index.castValue('0x123'))
    assert.isString(index.castValue('0123'))
  })
  it('JSON parse exceptions', function () {
    assert.throws(() => JSON.parse('0x123'))
    assert.throws(() => JSON.parse('0123'))
  })
  it('cast works', function () {
    process.env.IS_ACTIVE = 'false'
    process.env.MAX_THREADS = '10'
    assert.isString(process.env.IS_ACTIVE)
    assert.isString(process.env.MAX_THREADS)
    index.cast()
    assert.isBoolean(process.env.IS_ACTIVE)
    assert.isNumber(process.env.MAX_THREADS)
  })
})
