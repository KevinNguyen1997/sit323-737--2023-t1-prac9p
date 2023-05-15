const mongoose = require("mongoose");

const connectMongoDatabase = async () => {
  const db_url = `mongodb://${encodeURIComponent(
    process.env.MONGODB_USERNAME
  )}:${encodeURIComponent(process.env.MONGODB_PASSWORD)}@mongo-service:27017/blog?authSource=admin`;
  try {
    await mongoose.connect(db_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected");
  } catch (error) {
    console.error("Failed to connect", error);
  }
};

module.exports = connectMongoDatabase;
