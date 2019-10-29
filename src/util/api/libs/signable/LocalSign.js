
const LocalSign = ({name , email , password}) => {

    return {
        name,
        email,
        password,
        provider_type:"local_provider"
    }

}

export default LocalSign