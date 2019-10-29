import Project from '../../../util/api/models/application/creatable/project'

let proj

beforeEach(() => {
    proj = Project("proj" , "appid")
})

test('project init have name, applicationId', () => {

    expect(proj.name).toBe("proj")
    expect(proj.application).toBe("appid")
    
})