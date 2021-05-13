export default {
    DB: {
        MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/eccomerce"
    },
    JWT: process.env.JWT_TOKEN || "mysecretkey"
}