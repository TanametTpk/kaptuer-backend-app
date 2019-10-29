import signable from '../../../util/api/libs/signable'
const LocalSign = signable.LocalSign

let sign

beforeEach(() => {
    sign = LocalSign("name", "test@mail.com", "pass")
})

test('FacebookSign should have name, email , provider_type , password', () => {

    expect(sign.name).toBe("name")
    expect(sign.email).toBe("test@mail.com")
    expect(sign.provider_type).toBe("local_provider")
    expect(sign.password).toBe("pass")
    
})