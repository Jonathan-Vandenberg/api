import { Request, Response } from 'express';
import BidService from '../services/BidService';
import { Bid } from '@prisma/client';

// Get all bids
export const getAllBidsController = async (req: Request, res: Response): Promise<void> => {
    try {
        const bids: Bid[] = await BidService.getAllBids();
        res.json(bids);
    } catch (error) {
        console.error('Error retrieving trades:', error);
        res.status(500).json({ error: 'Failed to retrieve trades' });
    }
};

// Get a bid by ID
export const getBidByIdController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const bid: Bid | null = await BidService.getBidById(id);
        if (bid) {
            res.json(bid);
        } else {
            res.status(404).json({ error: 'Bid not found' });
        }
    } catch (error) {
        console.error('Error retrieving bid:', error);
        res.status(500).json({ error: 'Failed to retrieve bid' });
    }
};

// Create a new bid
export const createBidController = async (req: Request, res: Response): Promise<void> => {
    const tradeData: Bid = req.body;
    try {
        const trade: Bid | null = await BidService.createBid(tradeData);
        res.status(201).json(trade);
    } catch (error) {
        console.error('Error creating trade:', error);
        res.status(500).json({ error: 'Failed to create trade' });
    }
};

// Update a bid by ID
export const updateBidController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const bidData: Bid = req.body;
    try {
        const updatedBid: Bid | null = await BidService.updateBid(id, bidData);
        if (updatedBid) {
            res.json(updatedBid);
        } else {
            res.status(404).json({ error: 'Bid not found' });
        }
    } catch (error) {
        console.error('Error updating bid:', error);
        res.status(500).json({ error: 'Failed to update bid' });
    }
};

// Delete a bid by ID
export const deleteBidController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        await BidService.deleteBid(id);
        res.json({ message: 'Bid deleted successfully' });
    } catch (error) {
        console.error('Error deleting bid:', error);
        res.status(500).json({ error: 'Failed to delete bid' });
    }
};
