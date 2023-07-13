import { PrismaClient } from '@prisma/client';
import { Auction } from '../../../types';

const prisma = new PrismaClient();

// Get all auctions
const getAllAuctions = async (): Promise<Auction[]> => {
    return prisma.auction.findMany();
};

// Create a new auction
const createAuction = async (data: Auction): Promise<Auction> => {
    return prisma.auction.create({ data });
};

// Update an auction
const updateAuction = async (id: string, data: Auction): Promise<Auction | null> => {
    return prisma.auction.update({ where: { id }, data });
};

// Delete an auction
const deleteAuction = async (id: string): Promise<Auction | null> => {
    return prisma.auction.delete({ where: { id } });
};

export { getAllAuctions, createAuction, updateAuction, deleteAuction };
