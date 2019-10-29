export default class Application {

    constructor(name , port = 80){
        this.body = {
            name,
            port,
            schemas:[]
        }
    }

    addSchema(schema){
        this.body.schemas.push(schema)
    }

    result(){

        let schemas = this.body.schemas.map((schema) => schema.result())
        return {
            ...this.body,
            schemas
        }

    }

}