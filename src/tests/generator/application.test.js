import Application from '../../util/api/models/generator/Application'

let app

beforeEach(() => {
    app = new Application("app")
})

test('app init have name', () => {

    expect(app.body.name).toBe("app")
    
})

test('app should have default port 80', () => {

    expect(app.body.port).toBe(80)
    
})

test('app should can set port', () => {

    app = new Application("app" , 3000)
    expect(app.body.port).toBe(3000)
    
})

test('app should have schemas', () => {

    expect(app.body.schemas.length).toBe(0)
    
})

test('app should can add schemas', () => {

    let fakeSchema = new FakeSchema()

    app.addSchema(fakeSchema)
    expect(app.body.schemas.length).toBe(1)
    
})

test('app should can result with no schema', () => {

    expect(app.result().schemas.length).toBe(0)
    
})

test('app result should result schema', () => {

    let fakeSchema = new FakeSchema()

    app.addSchema(fakeSchema)
    expect(app.result().schemas[0].name).toBe("fake")
    
})

test('app result should result all schema', () => {

    let fakeSchema1 = new FakeSchema()
    let fakeSchema2 = new FakeSchema()

    app.addSchema(fakeSchema1)
    app.addSchema(fakeSchema2)

    expect(app.result().schemas.length).toBe(2)
    expect(app.result().schemas[0].name).toBe("fake")
    
})

class FakeSchema {

    result(){

        return {
            name:"fake",
            attributes:[
                {
                    name:"att",
                    type:"String"
                }
            ]
        }

    }

}