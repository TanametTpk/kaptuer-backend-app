const SERVER_URL = process.env.SERVER_URL || "https://api.backend.kaptuer.com"

export default {

    USER        : SERVER_URL + "/user",
    APPLICATION : SERVER_URL + "/app",
    CONTROLLER  : SERVER_URL + "/controller",

}
