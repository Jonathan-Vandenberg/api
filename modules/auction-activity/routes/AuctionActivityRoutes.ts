import express from 'express';
import {
    getAllAuctionActivitiesController,
    getAuctionActivityByIdController,
    createAuctionActivityController,
    updateAuctionActivityController,
    deleteAuctionActivityController
} from '../controllers/AuctionActivityController';

const router = express.Router();

// Get all listings
router.get('/', getAllAuctionActivitiesController);

// Get a specific listing
router.get('/:id', getAuctionActivityByIdController);

// Create a new listing
router.post('/', createAuctionActivityController);

// Update a listing
router.put('/:id', updateAuctionActivityController);

// Delete a listing
router.delete('/:id', deleteAuctionActivityController);

export default router;
