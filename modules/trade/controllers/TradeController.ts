import { Request, Response } from 'express';
import TradeService from '../services/TradeService';
import { Trade } from '@prisma/client';

// Get all trades
export const getAllTradesController = async (req: Request, res: Response): Promise<void> => {
    try {
        const trades: Trade[] = await TradeService.getAllTrades();
        res.json(trades);
    } catch (error) {
        console.error('Error retrieving trades:', error);
        res.status(500).json({ error: 'Failed to retrieve trades' });
    }
};

// Get a trade by ID
export const getTradeByIdController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const trade: Trade | null = await TradeService.getTradeById(id);
        if (trade) {
            res.json(trade);
        } else {
            res.status(404).json({ error: 'Trade not found' });
        }
    } catch (error) {
        console.error('Error retrieving trade:', error);
        res.status(500).json({ error: 'Failed to retrieve trade' });
    }
};

// Create a new trade
export const createTradeController = async (req: Request, res: Response): Promise<void> => {
    const tradeData: Trade = req.body;
    try {
        const trade: Trade | null = await TradeService.createTrade(tradeData);
        res.status(201).json(trade);
    } catch (error) {
        console.error('Error creating trade:', error);
        res.status(500).json({ error: 'Failed to create trade' });
    }
};

// Update a trade by ID
export const updateTradeController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const tradeData: Trade = req.body;
    try {
        const updatedTrade: Trade | null = await TradeService.updateTrade(id, tradeData);
        if (updatedTrade) {
            res.json(updatedTrade);
        } else {
            res.status(404).json({ error: 'Trade not found' });
        }
    } catch (error) {
        console.error('Error updating trade:', error);
        res.status(500).json({ error: 'Failed to update trade' });
    }
};

// Delete a trade by ID
export const deleteTradeController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        await TradeService.deleteTrade(id);
        res.json({ message: 'Trade deleted successfully' });
    } catch (error) {
        console.error('Error deleting trade:', error);
        res.status(500).json({ error: 'Failed to delete trade' });
    }
};
