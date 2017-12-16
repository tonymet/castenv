declare module castenv{
    type ProcessEnvValue = NodeJS.ProcessEnv | {[key: string]: any}
    export interface Process {
        env: NodeJS.ProcessEnv | ProcessEnvValue
    }
}
/**
 * @param {*} v cast using JSON.parse 
 * @return {*} Cast value
 */
function castValue(v:any): any{
    try{
        return JSON.parse(v)
    }
    catch(e){
        return v
    }
}

/**
 * @return {*} converted process.env as new object
 */
function env(): NodeJS.ProcessEnv{
    let converted: castenv.ProcessEnvValue = {}
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