import Cookies from 'universal-cookie';
import config from '../../../configs/network'

const cookies = new Cookies();
const TOKEN = "jwtToken"
const DOMAIN = config.DOMAIN

const save = (value) => {

    // localStorage.setItem(TOKEN, value)
    cookies.set(TOKEN, value, { path: '/', domain: DOMAIN })

}

const load = () => cookies.get(TOKEN) //localStorage.getItem(TOKEN)

const clear = () => cookies.remove(TOKEN , { path: '/', domain: DOMAIN}) //localStorage.removeItem(TOKEN)

const isHave = () => cookies.get(TOKEN) ? true : false

export default {

    save,
    load,
    clear,
    isHave

}