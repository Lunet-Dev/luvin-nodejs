process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
// Initialize Database
require('./database');

// Initialize Server
require('./server');
