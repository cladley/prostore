export { auth as middleware } from "@/auth";

// export function middleware(request: NextRequest) {
//   // Check for session cart cookie
//   if (!request.cookies.get("sessionCartId")) {
//     // Generate new session cart id cookie
//     const sessionCartId = crypto.randomUUID();

//     // Clone the request headers
//     const newRequestHeaders = new Headers(request.headers);

//     // Create new response and add the new headers
//     const response = NextResponse.next({
//       request: {
//         headers: newRequestHeaders,
//       },
//     });

//     // Set newly generate sessionCartId in the response cookies
//     response.cookies.set("sessionCartId", sessionCartId);
//     return response;
//   }
// }
