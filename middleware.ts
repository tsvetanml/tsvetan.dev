import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";

const locales = ["es", "en"];
const defaultLocale = "es";

// ✅ Función para obtener el idioma del navegador
function getLocale(req: NextRequest) {
  const negotiatorHeaders: { [key: string]: string } = {};

  // Extraer encabezados del request
  req.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  // Devolver el idioma detectado o el predeterminado
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log("pathname", pathname);

  // ✅ Verifica si ya hay un locale en la URL
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  console.log("aaa", pathnameHasLocale);

  if (pathnameHasLocale) {
    return NextResponse.next(); // Si ya hay un locale, continúa sin redirigir
  }

  // 🌍 Detectar el locale del usuario
  const locale = getLocale(request);
  console.log("Detected locale:", locale);

  // 🔄 Redirigir a la URL con el locale correcto
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    "/((?!api|_next/|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|css|js|woff|woff2|ttf|eot|otf|map)).*)",
  ],
};
