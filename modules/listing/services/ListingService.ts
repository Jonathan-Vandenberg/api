import { PrismaClient, Listing } from '@prisma/client';

const prisma = new PrismaClient();

// Get all listings
export const getAllListings = async (): Promise<Listing[]> => {
    return prisma.listing.findMany();
};

// Get a listing by ID
export const getListingById = async (id: string): Promise<Listing | null> => {
    return prisma.listing.findUnique({
        where: { id },
    });
};

// Create a new listing
export const createListing = async (listingData: Listing): Promise<Listing | null> => {
    const { type, userId, assetId, quantity, price, status, expirationDate, signature  } = listingData;
    return prisma.listing.create({
        data: {
            type,
            userId,
            assetId,
            quantity,
            price,
            status,
            expirationDate,
            signature
        },
    });
};

// Update a listing by ID
export const updateListing = async (id: string, tradeData: Listing): Promise<Listing | null> => {
    const { type, userId, assetId, quantity, price, status, expirationDate, signature } = tradeData;
    return prisma.listing.update({
        where: { id },
        data: {
            type, userId, assetId, quantity, price, status, expirationDate, signature
        },
    });
};

// Delete a listing by ID
export const deleteListing = async (id: string): Promise<void> => {
    await prisma.listing.delete({
        where: { id },
    });
};

export default {
    getAllListings,
    getListingById,
    createListing,
    updateListing,
    deleteListing,
};
