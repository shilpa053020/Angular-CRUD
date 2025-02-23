import dotenv from "dotenv";
dotenv.config();

export const configEnv = {
    Port : process.env.PORT || 5001,
    dbUrl : process.env.MONGODB

}