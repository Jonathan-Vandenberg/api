import express from 'express';
import {
    getAllBidsController,
    getBidByIdController,
    createBidController,
    updateBidController,
    deleteBidController
} from '../controllers/BidController';

const router = express.Router();

// Get all bids
router.get('/', getAllBidsController);

// Get a specific bid
router.get('/:id', getBidByIdController);

// Create a new bid
router.post('/', createBidController);

// Update a bid
router.put('/:id', updateBidController);

// Delete a bid
router.delete('/:id', deleteBidController);

export default router;
