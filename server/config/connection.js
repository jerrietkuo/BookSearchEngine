const mongoose = require('mongoose');
// Connect to the MongoDB database named googlebooks
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/21-MERN-BOOK-SEARCH-ENGINE', {
    useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;


