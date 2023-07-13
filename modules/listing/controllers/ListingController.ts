import { Request, Response } from 'express';
import { Listing, ListingType, ListingStatus, ListingActivity } from '@prisma/client';
import {
    // getAllListings,
    createListing,
    // updateListing,
    deleteListing,
    getListing
} from '../services/ListingService';

// Get all listings
// export const getAllListingsController = async (req: Request, res: Response) => {
//     try {
//         const listings: Listing[] = await getAllListings();
//         res.json(listings);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to fetch listings' });
//     }
// };

// Get a specific listing
export const getListingController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const listing: Listing | null = await getListing(id);

        if (listing) {
            res.json(listing);
        } else {
            res.status(404).json({ error: 'Listing not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch listing' });
    }
};

// Create a new listing
export const createListingController = async (req: Request, res: Response) => {
    try {
        console.log('Sending new listing...')
        const { type, userId, assetId, quantity, price, status, expirationDate, signature, id } = req.body;
        const newListing: Listing = await createListing({
            id, // Provide a unique ID for the new listing
            type: type as ListingType, // Cast to ListingType
            userId,
            assetId,
            quantity,
            price,
            status: status as ListingStatus, // Cast to ListingStatus
            expirationDate,
            signature,
            createdAt: new Date(), // Set the creation timestamp
            updatedAt: new Date(), // Set the update timestamp
        });
        res.status(201).json(newListing)
        console.log('New listing sent...');
    } catch (error) {
        res.status(500).json({ error: 'Failed to create listing' });
    }
};

// Update a listing
// export const updateListingController = async (req: Request, res: Response) => {
//     try {
//         const { id } = req.params;
//         const { assetId, quantity, status, trades, type, userId, price, listingActivities } = req.body;
//
//         const updatedListing: Listing | null = await updateListing(id, {
//             expirationDate: new Date(),
//             signature: "",
//             id, // Include the existing ID in the update
//             assetId,
//             quantity,
//             status: status as ListingStatus, // Cast to ListingStatus
//             trades,
//             type: type as ListingType, // Cast to ListingType
//             userId,
//             price,
//             createdAt: new Date(), // Set the creation timestamp
//             updatedAt: new Date(), // Set the update timestamp
//             listingActivities: listingActivities as ListingActivity// Initialize an empty array for listing activities
//         });
//
//         if (updatedListing) {
//             res.json(updatedListing);
//         } else {
//             res.status(404).json({ error: 'Listing not found' });
//         }
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to update listing' });
//     }
// };

// Delete a listing
export const deleteListingController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedListing: Listing | null = await deleteListing(id);

        if (deletedListing) {
            res.json(deletedListing);
        } else {
            res.status(404).json({ error: 'Listing not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete listing' });
    }
};
