import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname === "/" ||
    !["/it", "/en"].includes(request.nextUrl.pathname)
  ) {
    return NextResponse.redirect(new URL("/it", request.url));
  }
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico|header|images).*)",
};
