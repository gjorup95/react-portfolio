// GitHub Pages serves "/react-portfolio/" but links point to "/react-portfolio".
export const pageKey = (pathname: string) => pathname.replace(/\/+$/, '') || '/'
