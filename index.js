import express from 'express';
import { createListingController, getAllListingsController } from './modules/listing/controllers/ListingController';
import { createTradeController, getAllTradesController, getTradeController, updateTradeController, deleteTradeController } from './modules/trade/controllers/TradeController';
import { createAuctionController, getAllAuctionsController, getAuctionController, updateAuctionController, deleteAuctionController } from './modules/auction/controllers/AuctionController';
import { createBidController, getAllBidsController, getBidController, updateBidController, deleteBidController } from './modules/bid/controllers/BidController';

const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080; // Change the port to the desired port number

// Middleware to parse JSON request bodies
app.use(express.json());

app.use(cors({
  origin: '*',
}));

// Listing routes
// app.get('/listings', getAllListingsController);
app.post('/create-listing', createListingController);

// Trade routes
// app.get('/trades', getAllTradesController);
// app.get('/trades/:id', getTradeController);
// app.post('/trades', createTradeController);
// app.put('/trades/:id', updateTradeController);
// app.delete('/trades/:id', deleteTradeController);

// Auction routes
// app.get('/auctions', getAllAuctionsController);
// app.get('/auctions/:id', getAuctionController);
// app.post('/auctions', createAuctionController);
// app.put('/auctions/:id', updateAuctionController);
// app.delete('/auctions/:id', deleteAuctionController);

// Bid routes
// app.get('/bids', getAllBidsController);
// app.get('/bids/:id', getBidController);
// app.post('/bids', createBidController);
// app.put('/bids/:id', updateBidController);
// app.delete('/bids/:id', deleteBidController);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
