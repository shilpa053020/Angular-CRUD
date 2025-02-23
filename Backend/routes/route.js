import express from "express"
import { createUser, deleteUser, getAllUser, updateUser } from "../controllers/controller.js";
const Router = express.Router();

Router.get("/",getAllUser);
Router.post("/create",createUser);
Router.put("/update/:id",updateUser);
Router.delete("/delete/:id",deleteUser);

export default Router;

