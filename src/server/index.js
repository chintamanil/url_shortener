import mongoose from 'mongoose';
import config from './config/env';
import app from './config/express';
import populateDummyData from './config/sampleData/populateDummyData';
import redis from 'redis';

const debug = require('debug')('server:index');

// make bluebird default Promise
Promise = require('bluebird');

// plugin bluebird promise in mongoose
mongoose.Promise = Promise;

// connect to mongo db
mongoose.connect(config.db, { server: { socketOptions: { keepAlive: 1 } } });
const db = mongoose.connection;
db.on('error', () => {
    throw new Error(`unable to connect to database: ${config.db}`);
});

db.once('open', function callback() {
    populateDummyData();
});

// module.parent check is required to support mocha watch
if (!module.parent) {
    // listen on port config.port
    app.listen(config.port, () => {
        debug(`server started on port ${config.port} (${config.env})`);
    });
}

export default app;
