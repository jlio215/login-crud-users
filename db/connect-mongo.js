const mongoose = require('mongoose')

const mongoConn = async () => {
    mongoose.connect(process.env.MONGO_URI, {
    })
      .then(() => console.log('MongoDB connected'))
      .catch((err) => console.error('MongoDB connection error:', err));
}

module.exports = { mongoConn }