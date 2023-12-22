/* eslint-disable @typescript-eslint/explicit-function-return-type */
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const validateJWT = (token: string) => {
  try {
    const decodedToken = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJsYWxhbGFsQGdtYWlsLmNvbSIsImV4cCI6MTcwMzE0MTM2MywiZmlyc3ROYW1lIjoiZ2hpZmFyaSIsImlhdCI6MTcwMzEzNzc2MywibGFzdE5hbWUiOiJuYWZoYW4iLCJ1c2VySWQiOiJZekNsbWduOHJJb0FIRnRHMmEwMCIsInVzZXJuYW1lIjoiZ25hZmhhbnNhcyJ9.7V8-wvBOD9QzFrhqeTPp2rY9zDIKHyL1Oe2aKsgCGzM', 'janganTerburuBuru')
    console.log(decodedToken)
    return decodedToken
  } catch (error) {
    console.error(error)
    return false
  }
}
