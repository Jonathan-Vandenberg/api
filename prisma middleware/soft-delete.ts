// // hooks/useTaggedStatusLogger.ts
// import {PrismaClient, Listing, ListingActivity} from '@prisma/client';
//
// // Interface for the parameters received in the hook
// interface HookParams {
//     model: string
// }
//
// // Define the hook
// export function useTaggedStatusLogger(tag: string) {
//     const prisma = new PrismaClient()
//     const taggedStatusLoggerMiddleware = async (params: HookParams, next: any) => {
//         if (params.model === 'Listing') {
//             // Log data with the specified tag to the "User" model on each call
//             await prisma.listingActivity.create({
//                 data: {
//                     listingId: tag,
//                 },
//             } as ListingActivity); // Cast to the generated User type from Prisma
//         }
//
//         return next(params);
//     };
//
//     const prismaWithMiddleware = prisma.$use(taggedStatusLoggerMiddleware);
//
//     return () => {
//         // Clean up the middleware when it is no longer needed
//         prismaWithMiddleware.$disconnect();
//     };
// }
