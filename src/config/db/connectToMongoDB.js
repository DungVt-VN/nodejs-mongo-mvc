const mongoose = require('mongoose');

function connectToMongoDB() {
    mongoose
        .connect(
            process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/demo_dev',
        )
        .then(() => console.log('Connected!'))
        .catch((error) => console.log(error));
}

module.exports = { connectToMongoDB };
