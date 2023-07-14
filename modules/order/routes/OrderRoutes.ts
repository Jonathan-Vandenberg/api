import express from 'express';
import {
    getAllOrdersController,
    getOrderByIdController,
    createOrderController,
    updateOrderController,
    deleteOrderController
} from '../controllers/OrderController';

const router = express.Router();

// Get all orders
router.get('/', getAllOrdersController);

// Get a specific order
router.get('/:id', getOrderByIdController);

// Create a new order
router.post('/', createOrderController);

// Update an order
router.put('/:id', updateOrderController);

// Delete an order
router.delete('/:id', deleteOrderController);

export default router;
