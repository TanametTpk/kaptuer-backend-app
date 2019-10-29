import signable from '../../../util/api/libs/signable'
const FacebookSign = signable.FacebookSign

let sign
let payload = {
    name:"name",
    email:"test@mail.com",
    id:"id"
}

beforeEach(() => {
    sign = FacebookSign(payload)
})

test('FacebookSign should have name, email , provider_type , provider_id', () => {

    expect(sign.name).toBe("name")
    expect(sign.email).toBe("test@mail.com")
    expect(sign.provider_type).toBe("facebook_provider")
    expect(sign.provider_id).toBe("id")
    
})