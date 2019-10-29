import Schema from '../../util/api/models/generator/Schema'

let schema

beforeEach(() => {
    schema = new Schema("schema")
})

test('schema init have name', () => {

    expect(schema.body.name).toBe("schema")
    
})

test('schema init have attributes', () => {

    expect(schema.body.attributes.length).toBe(0)
    
})

test('schema should can add attribute', () => {

    let fakeAtt = new FakeAttribute()
    schema.addAttributes(fakeAtt)
    expect(schema.body.attributes.length).toBe(1)
    
})

test('schema should can result with no attribute', () => {

    expect(schema.result().attributes.length).toBe(0)
    
})

test('schema result should get result attributes', () => {

    let fakeAtt = new FakeAttribute()
    schema.addAttributes(fakeAtt)
    expect(schema.result().attributes[0].name).toBe("fake")
    
})

test('schema result should get all result attributes', () => {

    let fakeAtt1 = new FakeAttribute()
    let fakeAtt2 = new FakeAttribute()
    schema.addAttributes(fakeAtt1)
    schema.addAttributes(fakeAtt2)

    expect(schema.result().attributes.length).toBe(2)
    expect(schema.result().attributes[0].name).toBe("fake")
    expect(schema.result().attributes[1].type).toBe("String")
    
})

class FakeAttribute {

    result(){
        return {
            name:"fake",
            type:"String"
        }
    }

}