import { NextResponse } from "next/server";
export { default } from "next-auth/middleware";
// export default async function middleware(request) {
//   let token = request.cookies.get("token")?.value || null;
//   let response = NextResponse.next();
//   const pathname = request.nextUrl.pathname;

//   const isPublicPath =
//     pathname === "/login" || pathname === "/register" || pathname === "/";

//   if (token && isPublicPath) {
//     return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
//   }
//   if (!token && !isPublicPath) {
//     return NextResponse.redirect(new URL("/login", request.nextUrl));
//   }

//   return response;
// }

export const config = {
  matcher: ["/profile/:path*", "/dashboard/:path*", "/reservation/:path*"],
  exclude: ["/login", "/register", "/"],
};
