import { PrismaClient, AuctionActivity } from '@prisma/client';
import prisma from '../../../prisma/prisma'

// Get all auction activities
export const getAllAuctionActivities = async (): Promise<AuctionActivity[]> => {
    return prisma.auctionActivity.findMany();
};

// Get an auction activity by ID
export const getAuctionActivityById = async (id: string): Promise<AuctionActivity | null> => {
    return prisma.auctionActivity.findUnique({
        where: { id },
    });
};

// Create a new auction activity
export const createAuctionActivity = async (listingActivityData: AuctionActivity): Promise<AuctionActivity | null> => {
    const { auctionId, reference  } = listingActivityData;
    return prisma.auctionActivity.create({
        data: {
            auctionId,
            reference
        },
    });
};

// Update an auction activity by ID
export const updateAuctionActivity = async (id: string, listingActivityData: AuctionActivity): Promise<AuctionActivity | null> => {
    const { auctionId, reference } = listingActivityData;
    return prisma.auctionActivity.update({
        where: { id },
        data: {
            auctionId,
            reference
        },
    });
};

// Delete an auction activity by ID
export const deleteAuctionActivity = async (id: string): Promise<void> => {
    await prisma.auctionActivity.delete({
        where: { id },
    });
};

export default {
    getAllAuctionActivities,
    getAuctionActivityById,
    createAuctionActivity,
    updateAuctionActivity,
    deleteAuctionActivity,
};
