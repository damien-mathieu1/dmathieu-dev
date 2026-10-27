import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const { pathname } = request.nextUrl;

  if (host.startsWith("blog.") && !pathname.startsWith("/blog")) {
    const url = request.nextUrl.clone();
    url.pathname = `/blog${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
