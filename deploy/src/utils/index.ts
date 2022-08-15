import Cookies from 'js-cookie'

export function getCookie (cookieName:string):any {
    return Cookies.get(cookieName)
}

export function setCookie(cookieName:string,cookieValue:string){
   Cookies.set(cookieName,cookieValue)
}

