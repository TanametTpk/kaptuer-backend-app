export default class Schema {

    constructor(name){
        this.body = {
            name,
            attributes:[]
        }
    }

    addAttributes(attribute){
        this.body.attributes.push(attribute)
    }

    result(){

        let attributes = this.body.attributes.map((att) => att.result())
        return {
            ...this.body,
            attributes
        }

    }

}