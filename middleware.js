import { NextResponse } from 'next/server';
import { getCookie } from 'cookies-next';

// Middleware function
export function middleware(req) {
  const { pathname } = req.nextUrl.clone(); // Get the pathname from the request URL

  // Fetch userDetails from cookies
  const userDetails = req.cookies.get('userDetails'); // Access the cookie

  // Check if userDetails are present
  if (!userDetails) {
    // If the user is not authenticated and tries to access a protected route, redirect them to login
    if (pathname !== '/login') {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  // Allow the request to continue if authenticated
  return NextResponse.next();
}

// Optional: Use the `config` object to apply the middleware to specific routes
export const config = {
  matcher: [
    '/app/:path*',  // Protect /dashboard and all sub-routes
  ],
};
