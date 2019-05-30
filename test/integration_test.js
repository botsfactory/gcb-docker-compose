const redis = require('redis');
const mysql = require('mysql');

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

    it('shuold connect to mysql', (done) => {

        const connection = mysql.createConnection({ host: process.env.MYSQL_HOST, port: process.env.MYSQL_PORT, user: 'user', password: '1234' })

        connection.on('connect', () => {

            done()
        })

        connection.on('error', (err) => {

            throw err
        })

    }).timeout(10000)
});
