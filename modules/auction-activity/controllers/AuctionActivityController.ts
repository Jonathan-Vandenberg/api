import { Request, Response } from 'express';
import AuctionActivityService from '../services/AuctionActivityService';
import { AuctionActivity } from '@prisma/client';

// Get all listing activities
export const getAllAuctionActivitiesController = async (req: Request, res: Response): Promise<void> => {
    try {
        const auctionActivities: AuctionActivity[] = await AuctionActivityService.getAllAuctionActivities();
        res.json(auctionActivities);
    } catch (error) {
        console.error('Error retrieving auction activities:', error);
        res.status(500).json({ error: 'Failed to retrieve auction activities' });
    }
};

// Get an auction activity by ID
export const getAuctionActivityByIdController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const auctionActivity: AuctionActivity | null = await AuctionActivityService.getAuctionActivityById(id);
        if (auctionActivity) {
            res.json(auctionActivity);
        } else {
            res.status(404).json({ error: 'Auction activity not found' });
        }
    } catch (error) {
        console.error('Error retrieving auction activity:', error);
        res.status(500).json({ error: 'Failed to retrieve auction activity' });
    }
};

// Create auction activity
export const createAuctionActivityController = async (req: Request, res: Response): Promise<void> => {
    const auctionActivityData: AuctionActivity = req.body;
    try {
        const auctionActivity: AuctionActivity | null = await AuctionActivityService.createAuctionActivity(auctionActivityData);
        res.status(201).json(auctionActivity);
    } catch (error) {
        console.error('Error creating auction activity:', error);
        res.status(500).json({ error: 'Failed to create auction activity' });
    }
};

// Update an auction activity
export const updateAuctionActivityController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const auctionActivityData: AuctionActivity = req.body;
    try {
        const updatedAuctionActivity: AuctionActivity | null = await AuctionActivityService.updateAuctionActivity(id, auctionActivityData);
        if (updatedAuctionActivity) {
            res.json(updatedAuctionActivity);
        } else {
            res.status(404).json({ error: 'Auction activity not found' });
        }
    } catch (error) {
        console.error('Error updating auction activity:', error);
        res.status(500).json({ error: 'Failed to update auction activity' });
    }
};

// Delete an auction activity
export const deleteAuctionActivityController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        await AuctionActivityService.deleteAuctionActivity(id);
        res.json({ message: 'Auction activity deleted successfully' });
    } catch (error) {
        console.error('Error deleting auction activity:', error);
        res.status(500).json({ error: 'Failed to delete auction activity' });
    }
};
