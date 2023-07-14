import { PrismaClient, Order } from '@prisma/client';

const prisma = new PrismaClient();

// Get all orders
const getAllOrders = async (): Promise<Order[]> => {
    return prisma.order.findMany();
};

// Get an order by ID
const getOrderById = async (id: string): Promise<Order | null> => {
    return prisma.order.findUnique({
        where: { id },
    });
};

// Create a new order
const createOrder = async (tradeData: Order): Promise<Order | null> => {
    const { userId, eventId, status } = tradeData;
    return prisma.order.create({
        data: {
            userId,
            eventId,
            status,
        },
    });
};

// Update an order by ID
const updateOrder = async (id: string, tradeData: Order): Promise<Order | null> => {
    const { userId, eventId, status } = tradeData;
    return prisma.order.update({
        where: { id },
        data: {
            userId,
            eventId,
            status,
        },
    });
};

// Delete a order by ID
const deleteOrder = async (id: string): Promise<void> => {
    await prisma.order.delete({
        where: { id },
    });
};

export default {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
};
