require('dotenv').config();
const server = require('./server');

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`what do you think about the yeetmaster${port}?`));