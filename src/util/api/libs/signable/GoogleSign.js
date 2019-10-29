
const GoogleSign = (payload) => {

    let {profileObj : {name , email , googleId} } = payload

    return {
        name,
        email,
        provider_type:"google_provider",
        provider_id:googleId
    }

}

export default GoogleSign