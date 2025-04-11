import { NextResponse } from "next/server";

// This middleware will run on protected routes
export function middleware(request) {
  // Get the cookie from the request
  const authCookie = request.cookies.get("bitUser");

  // Check if the user is authenticated
  if (!authCookie) {
    // If not authenticated, redirect to login
    const loginUrl = new URL("/login", request.url);

    // Add the current path as a returnUrl parameter
    loginUrl.searchParams.set("returnUrl", request.nextUrl.pathname);

    // Redirect to login
    return NextResponse.redirect(loginUrl);
  }

  // Continue with the request if authenticated
  return NextResponse.next();
}

// Configure which paths should be processed by this middleware
export const config = {
  // Protect all routes under these paths
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/admin/:path*",
    // Add other protected routes as needed
  ],
};
