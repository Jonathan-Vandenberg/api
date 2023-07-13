import { PrismaClient, Trade } from '@prisma/client';

const prisma = new PrismaClient();

// Get all trades
const getAllTrades = async (): Promise<Trade[]> => {
    return prisma.trade.findMany();
};

// Get a trade by ID
const getTradeById = async (id: string): Promise<Trade | null> => {
    return prisma.trade.findUnique({
        where: { id },
    });
};

// Create a new trade
const createTrade = async (tradeData: Trade): Promise<Trade | null> => {
    const { orderId, listingId, quantity } = tradeData;
    return prisma.trade.create({
        data: {
            orderId,
            listingId,
            quantity,
        },
    });
};

// Update a trade by ID
const updateTrade = async (id: string, tradeData: Trade): Promise<Trade | null> => {
    const { orderId, listingId, quantity } = tradeData;
    return prisma.trade.update({
        where: { id },
        data: {
            orderId,
            listingId,
            quantity,
        },
    });
};

// Delete a trade by ID
const deleteTrade = async (id: string): Promise<void> => {
    await prisma.trade.delete({
        where: { id },
    });
};

export default {
    getAllTrades,
    getTradeById,
    createTrade,
    updateTrade,
    deleteTrade,
};
