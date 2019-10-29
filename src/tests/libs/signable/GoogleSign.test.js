import signable from '../../../util/api/libs/signable'
const GoogleSign = signable.GoogleSign

let sign
let payload = {
    profileObj:{
        name:"name",
        email:"test@mail.com",
        googleId:"id"
    }
}

beforeEach(() => {
    sign = GoogleSign(payload)
})

test('GoogleSign should have name, email , provider_type , provider_id', () => {

    expect(sign.name).toBe("name")
    expect(sign.email).toBe("test@mail.com")
    expect(sign.provider_type).toBe("google_provider")
    expect(sign.provider_id).toBe("id")
    
})