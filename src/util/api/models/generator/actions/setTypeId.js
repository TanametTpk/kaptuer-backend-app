export default (attribute , ref) => {

    attribute.actions.setType(attribute , attribute.types.Id)
    attribute.setBody(attribute.options.ref , ref)

}