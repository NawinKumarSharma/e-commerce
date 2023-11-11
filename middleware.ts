import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ['/','/men','/women','/teens']
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
