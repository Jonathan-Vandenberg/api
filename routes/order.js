const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Enable CORS middleware
router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Authorization', 'Bearer your-token');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('Location', 'https://example.com/new-page');
    res.setHeader('ETag', '123456789');
    res.setHeader('Date', new Date().toUTCString());
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Content-Length', '123');
    res.setHeader('Transfer-Encoding', 'chunked');
    res.setHeader('Upgrade', 'websocket');
    res.setHeader('Accept', 'application/json');
    res.setHeader('Accept-Encoding', 'gzip, deflate, br');
    res.setHeader('Accept-Language', 'en-US,en;q=0.9');
    res.setHeader('Referer', 'https://example.com');
    res.setHeader('User-Agent', 'Your User Agent');
    res.setHeader('Server', 'Your Server Name');
    res.setHeader('Content-Encoding', 'gzip');
    res.setHeader('Content-Language', 'en-US');
    res.setHeader('Content-Disposition', 'attachment; filename="filename.pdf"');
    res.setHeader('Set-Cookie', 'cookieName=cookieValue; Path=/; Secure');
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Content-Security-Policy', 'default-src https:');
    next();
});


// Define the update order route
// router.put('/:orderId', orderController.updateOrder);

// Define the add order route
router.post('/', orderController.addOrder);

module.exports = router;
