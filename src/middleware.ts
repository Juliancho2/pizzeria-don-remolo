import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

export const middleware = async (req: NextRequest): Promise<NextResponse> => {
  const { pathname } = req.nextUrl
  const token = req.cookies.get('token')?.value ?? ''

  const verifyToken = await jwtVerify(
    token,
    new TextEncoder().encode('secret_key')
  ).catch(e => e)

  if (!token && pathname === '/admin') {
    return NextResponse.redirect(new URL('/admin/signin', req.url))
  }

  if (verifyToken.code === 'ERR_JWT_EXPIRED' && pathname === '/admin') {
    return NextResponse.redirect(new URL('/admin/signin', req.url))
  }

  if (token && pathname === '/admin/signin') {
    return NextResponse.redirect(new URL('/admin', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin']
}
