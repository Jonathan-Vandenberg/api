import {Listing, PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();


// Get all listings
// const getAllListings = async (): Promise<Listing[]> => {
//     const listings = await prisma.listing.findMany();
//     return listings.map((listing) => ({
//         ...listing,
//         trades: listing.trades || [],
//         listingActivities: listing.listingActivities as ListingActivity[] || [],
//     }));
// };

// Get a specific listing
const getListing = async (id: string): Promise<Listing | null> => {
    return prisma.listing.findUnique({ where: { id } });
};

// Create a new listing
const createListing = async (listingData: Listing) => {
    try {
        return await prisma.listing.create({
            data: listingData,
        });
    } catch (error) {
        // Handle error
        console.error('Failed to create listing:', error);
        throw error;
    }
};

// Update a listing
// const updateListing = async (id: string, data: {
//     listingActivities: ListingActivity;
//     quantity: any;
//     signature: string;
//     trades: any;
//     type: ListingType;
//     userId: any;
//     createdAt: Date;
//     assetId: any;
//     price: any;
//     id: string;
//     expirationDate: Date;
//     status: ListingStatus;
//     updatedAt: Date
// }): Promise<Listing | null> => {
//     return prisma.listing.update({ where: { id }, data });
// };

// Delete a listing
const deleteListing = async (id: string): Promise<Listing | null> => {
    return prisma.listing.delete({ where: { id } });
};

export {
    getListing,
    createListing,
    deleteListing
};
