import { Request, Response } from 'express';
import ListingActivityService from '../services/ListingActivityService';
import { ListingActivity } from '@prisma/client';

// Get all listing activities
export const getAllListingActivitiesController = async (req: Request, res: Response): Promise<void> => {
    try {
        const listingActivities: ListingActivity[] = await ListingActivityService.getAllListingActivities();
        res.json(listingActivities);
    } catch (error) {
        console.error('Error retrieving listing activities:', error);
        res.status(500).json({ error: 'Failed to retrieve listing activities' });
    }
};

// Get a listing by ID
export const getListingActivityByIdController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const listingActivity: ListingActivity | null = await ListingActivityService.getListingActivityById(id);
        if (listingActivity) {
            res.json(listingActivity);
        } else {
            res.status(404).json({ error: 'listing activity not found' });
        }
    } catch (error) {
        console.error('Error retrieving listing activity:', error);
        res.status(500).json({ error: 'Failed to retrieve listing activity' });
    }
};

// Create a new listing
export const createListingActivityController = async (req: Request, res: Response): Promise<void> => {
    const listingActivityData: ListingActivity = req.body;
    try {
        const listingActivity: ListingActivity | null = await ListingActivityService.createListingActivity(listingActivityData);
        res.status(201).json(listingActivity);
    } catch (error) {
        console.error('Error creating listing activity:', error);
        res.status(500).json({ error: 'Failed to create listing' });
    }
};

// Update a listing by ID
export const updateListingActivityController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const listingActivityData: ListingActivity = req.body;
    try {
        const updatedListingActivity: ListingActivity | null = await ListingActivityService.updateListingActivity(id, listingActivityData);
        if (updatedListingActivity) {
            res.json(updatedListingActivity);
        } else {
            res.status(404).json({ error: 'Listing not found' });
        }
    } catch (error) {
        console.error('Error updating listing:', error);
        res.status(500).json({ error: 'Failed to update listing' });
    }
};

// Delete a listing by ID
export const deleteListingActivityController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        await ListingActivityService.deleteListingActivity(id);
        res.json({ message: 'Listing deleted successfully' });
    } catch (error) {
        console.error('Error deleting listing:', error);
        res.status(500).json({ error: 'Failed to delete listing' });
    }
};
