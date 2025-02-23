import {User} from "../models/userModel.js"


export const getAllUserService = async()=>{
    try{
        const users = await User.find();
        return users;
    }catch(error){
        throw new Error(error.message);
    }

}

export const createUserService = async(data)=>{
    try{
        const newUser = new User(data);
        await newUser.save();
        return newUser;
    }catch(error){
        throw new Error(error.message);
    }
}

export const updateUserService = async (id,data) => {
    try{
        const updatedUser = await User.findByIdAndUpdate(id,data,{new:true,runValidators: true} );
        return updatedUser;
    }catch(error){
        throw new Error(error.message);
    }
}

export const deleteUserService = async (id) => {
    try{
        const deletedUser = await User.findByIdAndDelete(id);
        return deletedUser;
    }catch(error){
        throw new Error(error.message);
    }
}