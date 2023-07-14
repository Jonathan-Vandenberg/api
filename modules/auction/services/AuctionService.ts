import { PrismaClient, Auction } from '@prisma/client';

const prisma = new PrismaClient();

// Get all auctions
const getAllAuctions = async (): Promise<Auction[]> => {
    return prisma.auction.findMany();
};

// Get an auction by ID
const getAuctionById = async (id: string): Promise<Auction | null> => {
    return prisma.auction.findUnique({
        where: { id },
    });
};

// Create a new auction
const createAuction = async (tradeData: Auction): Promise<Auction | null> => {
    const { listingId, status } = tradeData;
    return prisma.auction.create({
        data: {
            listingId,
            status,
        },
    });
};

// Update a auction by ID
const updateAuction = async (id: string, auctionData: Auction): Promise<Auction | null> => {
    const { listingId, status } = auctionData;
    return prisma.auction.update({
        where: { id },
        data: {
            listingId,
            status,
        },
    });
};

// Delete a trade by ID
const deleteAuction = async (id: string): Promise<void> => {
    await prisma.auction.delete({
        where: { id },
    });
};

export default {
    getAllAuctions,
    getAuctionById,
    createAuction,
    updateAuction,
    deleteAuction,
};
