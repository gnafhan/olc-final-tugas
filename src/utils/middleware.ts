/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Cookies from 'js-cookie'
import { validateJWT } from './validateJwt'

export const middleware = () => {
  const decoded = validateJWT(Cookies.get('token') ?? '')
  console.log(decoded)
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!decoded) {
    // window.location.href = '/login'
  }
}
