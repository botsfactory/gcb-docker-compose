const redis = require('redis');

describe('integration tests', () => {

    it('should connect to redis', (done) => {

        // Redis client.
        const opts = {
            host: process.env.REDIS_HOST || '127.0.0.1',
            port: process.env.REDIS_PORT || 6379
        }

        const redisClient = redis.createClient(opts)

        redisClient.on('connect', () => {

            done()
        })

        redisClient.on('error', (err) => {

            throw err
        })
    })
});
