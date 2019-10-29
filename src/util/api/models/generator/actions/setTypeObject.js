export default (attribute , objs) => {

    attribute.actions.setType(attribute , attribute.types.Obj)
    attribute.setBody(attribute.options.subObjects , objs)

}