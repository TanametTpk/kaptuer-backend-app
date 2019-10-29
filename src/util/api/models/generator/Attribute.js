import types from './enums/attributeTypes'
import options from './enums/options'
import actions from './actions'

export default class Attribute {

    constructor(name){
        this.body = {name}
        this.types = types
        this.options = options
        this.actions = actions
    }
    
    setBody(key , value){
        this.body[key] = value
        return this
    }

    result() {

        let result = {...this.body}

        // result children
        if (this.body.type === types.Obj){
            result[options.subObjects] = this.body[options.subObjects].map(obj => obj.result())
        }

        return result

    }

}