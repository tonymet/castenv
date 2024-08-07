/**
 * @param {*} v cast using JSON.parse
 */
function castValue (v) {
  try {
    return JSON.parse(v)
  } catch (e) {
    return v
  }
}
/**
 * cast process.env and return
 */
function env () {
  const converted = {}
  Object.keys(process.env).forEach(k => {
    converted[k] = castValue(process.env[k])
  })
  return converted
}
/**
 * overwrite process.env
 */
function cast () {
  process.env = env()
}
export default { castValue, env, cast }
