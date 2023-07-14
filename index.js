import express from 'express';
import { getAllListingsController,
  getListingByIdController,
  createListingController,
  updateListingController,
  deleteListingController } from './modules/listing/controllers/ListingController';
import { createTradeController, getAllTradesController, getTradeByIdController, updateTradeController, deleteTradeController } from './modules/trade/controllers/TradeController';
import { createAuctionController, getAllAuctionsController, getAuctionByIdController, updateAuctionController, deleteAuctionController } from './modules/auction/controllers/AuctionController';
import { createBidController, getAllBidsController, getBidByIdController, updateBidController, deleteBidController } from './modules/bid/controllers/BidController';
import { getAllOrdersController,
  getOrderByIdController,
  createOrderController,
  updateOrderController,
  deleteOrderController } from './modules/order/controllers/OrderController';
import { getAllListingActivitiesController } from './modules/listing-activity/controllers/ListingActivityController'

const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080; // Change the port to the desired port number

// Middleware to parse JSON request bodies
app.use(express.json());

app.use(cors({
  origin: '*',
}));

// Listing routes
app.get('/listing', getAllListingsController);
app.get('/listing/:id', getListingByIdController);
app.post('/listing', createListingController);
app.put('/listing/:id', updateListingController);
app.delete('/listing/:id', deleteListingController);

// ListingActivity routes
app.get('/listing-activity', getAllListingActivitiesController);
app.get('/listing-activity/:id', getListingActivityByIdController);
app.post('/listing-activity', createListingActivityController);
app.put('/listing-activity/:id', updateListingActivityController);
app.delete('/listing-activity/:id', deleteListingActivityController);

// Trade routes
app.get('/trade', getAllTradesController);
app.get('/trade/:id', getTradeByIdController);
app.post('/trade', createTradeController);
app.put('/trade/:id', updateTradeController);
app.delete('/trade/:id', deleteTradeController);

// Order routes
app.get('/order', getAllOrdersController);
app.get('/order/:id', getOrderByIdController);
app.post('/order', createOrderController);
app.put('/order/:id', updateOrderController);
app.delete('/order/:id', deleteOrderController);

// Auction routes
app.get('/auction', getAllAuctionsController);
app.get('/auctions/:id', getAuctionByIdController);
app.post('/auction', createAuctionController);
app.put('/auction/:id', updateAuctionController);
app.delete('/auction/:id', deleteAuctionController);

// AuctionActivity routes
app.get('/auction-activity', getAllAuctionActivitiesController);
app.get('/auction-activity/:id', getAuctionActivityByIdController);
app.post('/auction-activity', createAuctionActivityController);
app.put('/auction-activity/:id', updateAuctionActivityController);
app.delete('/auction-activity/:id', deleteAuctionActivityController);

// Bid routes
app.get('/bid', getAllBidsController);
app.get('/bid/:id', getBidByIdController);
app.post('/bid', createBidController);
app.put('/bid/:id', updateBidController);
app.delete('/bid/:id', deleteBidController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
