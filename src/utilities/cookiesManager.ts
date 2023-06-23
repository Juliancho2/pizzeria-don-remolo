import Cookies from 'js-cookie'

import { isServer } from '.'

class CookiesManager {
  saveInCookies(key: string, value: string) {
    if (isServer()) return false
    Cookies.set(key, value, {
      expires: 30, // tiempo de vida de la cookie en días
      path: '/',
      sameSite: 'none', // especifica el valor "none" para el atributo SameSite
      secure: true // debe ser verdadero si se utiliza HTTPS
    })
  }

  getInCookies(key: string) {
    return Cookies.get(key)
  }

  clearCookie(key: string) {
    Cookies.remove(key)
  }
}

export default new CookiesManager()
