import redis from 'redis';
import bluebird from 'bluebird';
// import app from './../index';
// import express from 'express';

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

// let  RedisStore = require('connect-redis')(express);
// app.use(express.session({ secret: "keyboard cat", store: new RedisStore({ host: 'localhost', port: 6379, client: redis }) }));

const redisClient = redis.createClient({ host: 'localhost', port: 6379, client: redis });
// module.exports = redisClient;
export default redisClient;
