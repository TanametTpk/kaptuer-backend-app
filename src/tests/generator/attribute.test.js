import Attribute from '../../util/api/models/generator/Attribute'

let attribute

beforeEach(() => {
    attribute = new Attribute("att")
})

test('attribute init have name', () => {

    expect(attribute.body.name).toBe("att")
    
})

test('attribute setBody', () => {

    attribute.setBody("myKey" , "test")
    expect(attribute.body.myKey).toBe("test")
    
})

test('attribute result should return body', () => {

    expect(attribute.result().name).toBe("att")
    
})

test('attribute setOption option should be set', () => {

    attribute.actions.setOption(attribute , attribute.options.require)
    expect(attribute.body.require).toBe(true)

})

test('attribute setType type should be set', () => {

    attribute.actions.setType(attribute , attribute.types.Date)
    expect(attribute.result().type).toBe(attribute.types.Date)
    
})

test('attribute setTypeId type and ref should be set', () => {

    let schemaName = "this is schema"
    attribute.actions.setTypeId(attribute , schemaName)
    expect(attribute.result().type).toBe(attribute.types.Id)
    expect(attribute.result().ref).toBe(schemaName)
    
})

test('attribute setTypeObject type and subObjects should be set', () => {

    let subAtt = new Attribute("sub")
    subAtt.actions.setType(subAtt , attribute.types.String)
    attribute.actions.setTypeObject(attribute , [subAtt])

    expect(attribute.result().type).toBe(attribute.types.Obj)
    expect(attribute.result().subObjects.length).toBe(1)
    
})

test('attribute setTypeObject subObjects should have right attribute', () => {

    let subAtt = new Attribute("sub")
    subAtt.actions.setType(subAtt , attribute.types.String)
    attribute.actions.setTypeObject(attribute , [subAtt])
    
    expect(attribute.result().subObjects[0].name).toBe("sub")
    expect(attribute.result().subObjects[0].type).toBe(attribute.types.String)
    
})

test('attribute setTypeObject multiple object', () => {

    let subAtt1 = new Attribute("sub1")
    let subAtt2 = new Attribute("sub2")
    subAtt1.actions.setType(subAtt1 , attribute.types.String)
    subAtt2.actions.setType(subAtt2 , attribute.types.Date)
    attribute.actions.setTypeObject(attribute , [subAtt1 , subAtt2])

    expect(attribute.result().subObjects.length).toBe(2)
    expect(attribute.result().subObjects[0].name).toBe("sub1")
    expect(attribute.result().subObjects[0].type).toBe(attribute.types.String)
    expect(attribute.result().subObjects[1].name).toBe("sub2")
    expect(attribute.result().subObjects[1].type).toBe(attribute.types.Date)
    
})

test('attribute setMinMax min option should be set', () => {

    attribute.actions.setMinMax(attribute , attribute.options.min , 1)
    expect(attribute.body.min).toBe(1)

})

test('attribute setMinMax max option should be set', () => {

    attribute.actions.setMinMax(attribute , attribute.options.max , 20)
    expect(attribute.body.max).toBe(20)

})

test('attribute setMinMax other option should not be set', () => {

    attribute.actions.setMinMax(attribute , attribute.options.encrypt , 20)
    expect(attribute.body.encrypt).toBe(undefined)

})

test('attribute setDefault valule should be set', () => {

    attribute.actions.setDefault(attribute , "Date.now")
    expect(attribute.body.default).toBe("Date.now")

})