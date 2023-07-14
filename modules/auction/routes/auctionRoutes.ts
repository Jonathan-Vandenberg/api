import express from 'express';
import {
    getAllAuctionsController,
    getAuctionByIdController,
    createAuctionController,
    updateAuctionController,
    deleteAuctionController
} from '../controllers/AuctionController';

const router = express.Router();

// Get all auctions
router.get('/', getAllAuctionsController);

// Get a specific auction
router.get('/:id', getAuctionByIdController);

// Create a new auction
router.post('/', createAuctionController);

// Update an auction
router.put('/:id', updateAuctionController);

// Delete an auction
router.delete('/:id', deleteAuctionController);

export default router;
