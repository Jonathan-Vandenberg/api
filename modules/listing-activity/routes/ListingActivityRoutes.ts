import express from 'express';
import {
    getAllListingActivitiesController,
    getListingActivityByIdController,
    createListingActivityController,
    updateListingActivityController,
    deleteListingActivityController
} from '../controllers/ListingActivityController';

const router = express.Router();

// Get all listings
router.get('/', getAllListingActivitiesController);

// Get a specific listing
router.get('/:id', getListingActivityByIdController);

// Create a new listing
router.post('/', createListingActivityController);

// Update a listing
router.put('/:id', updateListingActivityController);

// Delete a listing
router.delete('/:id', deleteListingActivityController);

export default router;
