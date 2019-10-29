
const FacebookSign = (payload) => {

    return {
        name:payload.name,
        email:payload.email,
        provider_type:"facebook_provider",
        provider_id:payload.id
    }

}

export default FacebookSign