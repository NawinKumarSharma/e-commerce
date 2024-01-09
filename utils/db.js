import mongoose from "mongoose";

const connect = async () => {
  try {
    if (mongoose.connections[0].readyState === 1) {
      console.log("MongoDB is already connected.");
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, 
    });

    console.log("Mongo Connection successfully established.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw error; 
  }
};

export default connect;
