const express = require('express');
const app = express();
const port = process.env.PORT || "159.89.204.177";

// Middleware to parse JSON request bodies
app.use(express.json());

// Define routes
const orderRoutes = require('./routes/order');

// Use the order routes
app.use('/orders', orderRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
