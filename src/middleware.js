import { NextResponse } from "next/server";

const protectedRoutes = ["/aPotionDashB"];



export default function middleware(req) {
const isAuthenticated = req.cookies.has('token')

  if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
    console.log('test1')

    const absoluteURL = new URL("/", req.url);
    return NextResponse.redirect(absoluteURL.toString());
  }
  else{
    if (isAuthenticated && ['/login'].includes(req.nextUrl.pathname)) {
      const absoluteURL = new URL("/", req.url);
      return NextResponse.redirect(absoluteURL.toString());
    }
  }
}

export const config = {
    matcher: '/:Path*',
  }