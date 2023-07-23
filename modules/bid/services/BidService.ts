import { PrismaClient, Bid } from '@prisma/client';
import prisma from '../../../prisma/prisma'

// Get all bids
const getAllBids = async (): Promise<Bid[]> => {
    return prisma.bid.findMany();
};

// Get a bid by ID
const getBidById = async (id: string): Promise<Bid | null> => {
    return prisma.bid.findUnique({
        where: { id },
    });
};

// Create a new bid
const createBid = async (bidData: Bid): Promise<Bid | null> => {
    const { auctionId, price, status } = bidData;
    return prisma.bid.create({
        data: {
            auctionId,
            price,
            status,
        },
    });
};

// Update a bid by ID
const updateBid = async (id: string, bidData: Bid): Promise<Bid | null> => {
    const { auctionId, price, status } = bidData;
    return prisma.bid.update({
        where: { id },
        data: {
            auctionId,
            price,
            status,
        },
    });
};

// Delete a bid by ID
const deleteBid = async (id: string): Promise<void> => {
    await prisma.bid.delete({
        where: { id },
    });
};

export default {
    getAllBids,
    getBidById,
    createBid,
    updateBid,
    deleteBid,
};
