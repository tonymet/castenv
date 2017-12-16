declare var process:  { [env: string]: {[key:string]: ConvertedEnvironmentValue }  }  
type ConvertedEnvironmentValue = string|number|boolean|undefined
/**
 * @param {*} v cast using JSON.parse 
 */
function castValue(v): string|number{
    try{
        return JSON.parse(v)
    }
    catch(e){
        return v
    }
}
/**
 * cast process.env and return
 */
function env(): {string?: ConvertedEnvironmentValue}{
    let converted: {string?: ConvertedEnvironmentValue} = {}
    Object.keys(process.env).forEach(k => {
        converted[k] = castValue(process.env[k])
    })
    return converted
}
/**
 * overwrite process.env
 */
function cast(): void{
    process.env = env()
}
module.exports = {castValue, env, cast}