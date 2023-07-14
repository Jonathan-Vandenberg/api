import { Request, Response } from 'express';
import OrderService from '../services/OrderService';
import { Order } from '@prisma/client';

// Get all trades
export const getAllOrdersController = async (req: Request, res: Response): Promise<void> => {
    try {
        const orders: Order[] = await OrderService.getAllOrders();
        res.json(orders);
    } catch (error) {
        console.error('Error retrieving orders:', error);
        res.status(500).json({ error: 'Failed to retrieve orders' });
    }
};

// Get a trade by ID
export const getOrderByIdController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const order: Order | null = await OrderService.getOrderById(id);
        if (order) {
            res.json(order);
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        console.error('Error retrieving order:', error);
        res.status(500).json({ error: 'Failed to retrieve order' });
    }
};

// Create a new trade
export const createOrderController = async (req: Request, res: Response): Promise<void> => {
    const orderData: Order = req.body;
    try {
        const order: Order | null = await OrderService.createOrder(orderData);
        res.status(201).json(order);
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ error: 'Failed to create order' });
    }
};

// Update a trade by ID
export const updateOrderController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const orderData: Order = req.body;
    try {
        const updatedOrder: Order | null = await OrderService.updateOrder(id, orderData);
        if (updatedOrder) {
            res.json(updatedOrder);
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        console.error('Error updating trade:', error);
        res.status(500).json({ error: 'Failed to update order' });
    }
};

// Delete a trade by ID
export const deleteOrderController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        await OrderService.deleteOrder(id);
        res.json({ message: 'Order deleted successfully' });
    } catch (error) {
        console.error('Error deleting order:', error);
        res.status(500).json({ error: 'Failed to delete order' });
    }
};
