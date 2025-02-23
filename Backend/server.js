import express from "express";
import { configEnv } from "./config/configure.js";
import { DBConnection } from "./config/db.js";
import Router  from "./routes/route.js";
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());
app.use("/employee",Router);

app.listen(configEnv.Port,async()=>{
    console.log(`server is listening to port : ${configEnv.Port}`);
    await DBConnection();
})
