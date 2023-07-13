import { PrismaClient } from '@prisma/client';
import { Bid } from '../../../types';

const prisma = new PrismaClient();

// Get all bids
const getAllBids = async (): Promise<Bid[]> => {
    return prisma.bid.findMany();
};

// Create a new bid
const createBid = async (data: Bid): Promise<Bid> => {
    return prisma.bid.create({ data });
};

// Update a bid
const updateBid = async (id: string, data: Bid): Promise<Bid | null> => {
    return prisma.bid.update({ where: { id }, data });
};

// Delete a bid
const deleteBid = async (id: string): Promise<Bid | null> => {
    return prisma.bid.delete({ where: { id } });
};

export { getAllBids, createBid, updateBid, deleteBid };
