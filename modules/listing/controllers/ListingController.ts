import { Request, Response } from 'express';
import ListingService from '../services/ListingService';
import { Listing } from '@prisma/client';

// Get all listings
export const getAllListingsController = async (req: Request, res: Response): Promise<void> => {
    try {
        const listings: Listing[] = await ListingService.getAllListings();
        res.json(listings);
    } catch (error) {
        console.error('Error retrieving listings:', error);
        res.status(500).json({ error: 'Failed to retrieve listings' });
    }
};

// Get a listing by ID
export const getListingByIdController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const listing: Listing | null = await ListingService.getListingById(id);
        if (listing) {
            res.json(listing);
        } else {
            res.status(404).json({ error: 'listing not found' });
        }
    } catch (error) {
        console.error('Error retrieving listing:', error);
        res.status(500).json({ error: 'Failed to retrieve listing' });
    }
};

// Create a new listing
export const createListingController = async (req: Request, res: Response): Promise<void> => {
    const listingData: Listing = req.body;
    try {
        const listing: Listing | null = await ListingService.createListing(listingData);
        res.status(201).json(listing);
    } catch (error) {
        console.error('Error creating listing:', error);
        res.status(500).json({ error: 'Failed to create listing' });
    }
};

// Update a listing by ID
export const updateListingController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const listingData: Listing = req.body;
    try {
        const updatedListing: Listing | null = await ListingService.updateListing(id, listingData);
        if (updatedListing) {
            res.json(updatedListing);
        } else {
            res.status(404).json({ error: 'Listing not found' });
        }
    } catch (error) {
        console.error('Error updating listing:', error);
        res.status(500).json({ error: 'Failed to update listing' });
    }
};

// Delete a listing by ID
export const deleteListingController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        await ListingService.deleteListing(id);
        res.json({ message: 'Listing deleted successfully' });
    } catch (error) {
        console.error('Error deleting listing:', error);
        res.status(500).json({ error: 'Failed to delete listing' });
    }
};
