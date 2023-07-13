import { PrismaClient } from '@prisma/client';
import { Trade } from '../../../types';

const prisma = new PrismaClient();

// Get all trades
const getAllTrades = async (): Promise<Trade[]> => {
    return prisma.trade.findMany();
};

// Create a new trade
const createTrade = async (data: Trade): Promise<Trade> => {
    return prisma.trade.create({ data });
};

// Update a trade
const updateTrade = async (id: string, data: Trade): Promise<Trade | null> => {
    return prisma.trade.update({ where: { id }, data });
};

// Delete a trade
const deleteTrade = async (id: string): Promise<Trade | null> => {
    return prisma.trade.delete({ where: { id } });
};

export { getAllTrades, createTrade, updateTrade, deleteTrade };
