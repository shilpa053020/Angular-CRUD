import { createUserService, deleteUserService, getAllUserService, updateUserService } from "../services/service.js";
import mongoose from "mongoose";

export const getAllUser = async(req,res)=>{
    try{
        const users = await getAllUserService();
        if(users.length === 0){
            return res.status(200).json({message:"No user found"});
        }
        res.status(200).json(users);
    }catch(error){
        res.status(404).json({message:"error while fetching",details:error.message});
    }

}

export const createUser = async(req,res)=>{
    try{
        const {name,email,phoneNumber} = req.body;
        if(!name || !email || !phoneNumber){
            return res.status(400).json({message:"All fields are required"})
        }
        console.log(name,email,phoneNumber);
        const newUser  = await createUserService({name,email,phoneNumber});
    
        res.status(200).json({message :"Successfully created",user:newUser});
    }catch(error){
        res.status(404).json({message:"error while creating",details:error.message});
    }
}

export const updateUser = async (req,res) => {
    try{
        const {name,email,phoneNumber} = req.body;
        const {id} = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }
        const updatedUser = await updateUserService(id,{name,email,phoneNumber});
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({message:"Successfully Updated",User:updatedUser})
    }catch(error){
        res.status(404).json({message:"error while updating",details:error.message});
    }
}

export const deleteUser = async (req,res) => {
    try{
        const {id} = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }
        const deletedUser = await deleteUserService(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" }); // ✅ Ensure only one response
        }
        res.status(200).json({message:"Successfully deleted"})
    }catch(error){
        res.status(404).json({message:"error while deleting",details:error.message});
    }
}