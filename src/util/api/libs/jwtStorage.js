import Cookies from 'universal-cookie';

const cookies = new Cookies();
const TOKEN = "jwtToken"

const save = (value) => {

    // localStorage.setItem(TOKEN, value)
    cookies.set(TOKEN, value, { path: '/', domain: '.kaptuer.com' })

}

const load = () => cookies.get(TOKEN) //localStorage.getItem(TOKEN)

const clear = () => cookies.remove(TOKEN , { path: '/', domain: '.kaptuer.com' }) //localStorage.removeItem(TOKEN)

const isHave = () => cookies.get(TOKEN) ? true : false

export default {

    save,
    load,
    clear,
    isHave

}