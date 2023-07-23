import { PrismaClient, ListingActivity } from '@prisma/client';
import prisma from '../../../prisma/prisma'

// Get all listings
export const getAllListingActivities = async (): Promise<ListingActivity[]> => {
    return prisma.listingActivity.findMany();
};

// Get a listing by ID
export const getListingActivityById = async (id: string): Promise<ListingActivity | null> => {
    return prisma.listingActivity.findUnique({
        where: { id },
    });
};

// Create a new listing
export const createListingActivity = async (listingActivityData: ListingActivity): Promise<ListingActivity | null> => {
    const { listingId, reference  } = listingActivityData;
    return prisma.listingActivity.create({
        data: {
            listingId,
            reference
        },
    });
};

// Update a listing by ID
export const updateListingActivity = async (id: string, listingActivityData: ListingActivity): Promise<ListingActivity | null> => {
    const { listingId, reference } = listingActivityData;
    return prisma.listingActivity.update({
        where: { id },
        data: {
            listingId,
            reference
        },
    });
};

// Delete a listing by ID
export const deleteListingActivity = async (id: string): Promise<void> => {
    await prisma.listingActivity.delete({
        where: { id },
    });
};

export default {
    getAllListingActivities,
    getListingActivityById,
    createListingActivity,
    updateListingActivity,
    deleteListingActivity,
};
