import mongoose from "mongoose";
import { configEnv } from "./configure.js";

export const DBConnection = async()=> {
    try{
        await mongoose.connect(configEnv.dbUrl);
        console.log("Database connected successfully!");
    } catch (error) {
        console.error("❌ Database connection failed:", error.message);
        process.exit(1);
    }
}