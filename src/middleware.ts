import { NextRequest, NextResponse } from 'next/server'

export const middleware = async (req: NextRequest): Promise<NextResponse> => {
  const { pathname } = req.nextUrl
  const cookies = req.cookies.get('token')

  if (!cookies && pathname === '/admin') {
    return NextResponse.redirect(new URL('/admin/signin', req.url))
  }

  if (pathname === '/admin' && cookies) {
    return NextResponse.redirect(new URL('/admin', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin']
}
