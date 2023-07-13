import express from 'express';
import {
    // getAllListingsController,
    getListingController,
    createListingController,
    // updateListingController,
    deleteListingController
} from '../controllers/ListingController';

const router = express.Router();

// Get all listings
// router.get('/', getAllListingsController);

// Get a specific listing
router.get('/:id', getListingController);

// Create a new listing
router.post('/create-listing', createListingController);

// Update a listing
// router.put('/:id', updateListingController);

// Delete a listing
router.delete('/:id', deleteListingController);

export default router;
