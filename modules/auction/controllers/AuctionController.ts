import { Request, Response } from 'express';
import AuctionService from '../services/AuctionService';
import { Auction } from '@prisma/client';

// Get all auctions
export const getAllAuctionsController = async (req: Request, res: Response): Promise<void> => {
    try {
        const auctions: Auction[] = await AuctionService.getAllAuctions();
        res.json(auctions);
    } catch (error) {
        console.error('Error retrieving auctions:', error);
        res.status(500).json({ error: 'Failed to retrieve auctions' });
    }
};

// Get an auction by ID
export const getAuctionByIdController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const auction: Auction | null = await AuctionService.getAuctionById(id);
        if (auction) {
            res.json(auction);
        } else {
            res.status(404).json({ error: 'Auction not found' });
        }
    } catch (error) {
        console.error('Error retrieving auction:', error);
        res.status(500).json({ error: 'Failed to retrieve auction' });
    }
};

// Create a new auction
export const createAuctionController = async (req: Request, res: Response): Promise<void> => {
    const auctionData: Auction = req.body;
    try {
        const auction: Auction | null = await AuctionService.createAuction(auctionData);
        res.status(201).json(auction);
    } catch (error) {
        console.error('Error creating auction:', error);
        res.status(500).json({ error: 'Failed to create auction' });
    }
};

// Update a auction by ID
export const updateAuctionController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const auctionData: Auction = req.body;
    try {
        const updatedAuction: Auction | null = await AuctionService.updateAuction(id, auctionData);
        if (updatedAuction) {
            res.json(updatedAuction);
        } else {
            res.status(404).json({ error: 'Auction not found' });
        }
    } catch (error) {
        console.error('Error updating auction:', error);
        res.status(500).json({ error: 'Failed to update auction' });
    }
};

// Delete an auction by ID
export const deleteAuctionController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        await AuctionService.deleteAuction(id);
        res.json({ message: 'Auction deleted successfully' });
    } catch (error) {
        console.error('Error deleting auction:', error);
        res.status(500).json({ error: 'Failed to delete auction' });
    }
};
