import express from 'express';
import {
    getAllListingsController,
    getListingByIdController,
    createListingController,
    updateListingController,
    deleteListingController
} from '../controllers/ListingController';

const router = express.Router();

// Get all listings
router.get('/', getAllListingsController);

// Get a specific listing
router.get('/:id', getListingByIdController);

// Create a new listing
router.post('/', createListingController);

// Update a listing
router.put('/:id', updateListingController);

// Delete a listing
router.delete('/:id', deleteListingController);

export default router;
