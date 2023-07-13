import { PrismaClient } from '@prisma/client';
import { Order } from '../../../types';

const prisma = new PrismaClient();

// Get all orders
const getAllOrders = async (): Promise<Order[]> => {
    return prisma.order.findMany({
        include: {
            trades: true
        }
    });
};

// Create a new order
const createOrder = async (data: Order): Promise<Order> => {
    const { trades, ...orderData } = data;

    return prisma.order.create({
        data: {
            ...orderData,
            trades: {
                create: trades,
            },
        },
    });
};


// Update an order
const updateOrder = async (id: string, data: Order): Promise<Order | null> => {
    return prisma.order.update({ where: { id }, data });
};

// Delete an order
const deleteOrder = async (id: string): Promise<Order | null> => {
    return prisma.order.delete({ where: { id } });
};

export { getAllOrders, createOrder, updateOrder, deleteOrder };
