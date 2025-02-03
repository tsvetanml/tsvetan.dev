import { NextRequest, NextResponse } from "next/server";

const locales = ["es", "en"];

function getLocale(req: Request) {
  let locale = "en";
  const acceptLanguage = req.headers.get("Accept-Language");
  if (acceptLanguage) {
    let [language] = acceptLanguage.split(",");
    locale = language.split("-")[0];
  }
  return locale;
}

export function middleware(req: NextRequest, res: Response, next: () => void) {
  const { pathname } = req.nextUrl;
  console.log(pathname);
  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}`) || pathname === `/${locale}/${pathname}`
  );
  if (pathnameHasLocale) {
    return;
  }
  const locale = getLocale(req);
  req.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(req.nextUrl);
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
