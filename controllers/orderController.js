const Order = require('../models/Order');

// Controller method to update an existing order
// exports.updateOrder = async (req, res) => {
//     const orderId = req.params.orderId;
//     try {
//         // Retrieve the order from the database
//         const order = await Order.findById(orderId);
//
//         // Perform the necessary updates on the order
//         order.quantity = req.body.quantity;
//         order.price = req.body.price;
//
//         // Save the updated order to the database
//         await order.save();
//
//         res.json({ message: `Order ${orderId} updated successfully` });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'An error occurred while updating the order' });
//     }
// };

// Controller method to add a new order
exports.addOrder = async (req, res) => {
    const newOrder = req.body;
    try {
        // Create a new order instance
        const order = new Order(newOrder);

        // Save the order to the database
        // await order.save();
        res.json({ message: 'Order added successfully', order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while adding the order' });
    }
};
