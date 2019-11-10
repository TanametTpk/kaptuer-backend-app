const SERVER_URL = process.env.SERVER_URL || "http://kaptuer.test:9007"

export default {

    USER        : SERVER_URL + "/user",
    APPLICATION : SERVER_URL + "/app",
    CONTROLLER  : SERVER_URL + "/controller",

}
