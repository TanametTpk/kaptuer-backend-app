export default (attribute , option, value) => {

    if (option === attribute.options.max || option === attribute.options.min){

        attribute.setBody(option , value)

    }

}