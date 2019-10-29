import Application from '../../../util/api/models/application/creatable/application'

let app

beforeEach(() => {
    app = Application("app")
})

test('app init have name', () => {

    expect(app.name).toBe("app")
    
})