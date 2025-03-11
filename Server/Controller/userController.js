const User = require("../models/user"); // Ensure correct path

// Create User
const create = async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;

    const newUser = new User({ fname, lname, email, password });
    await newUser.save();

    res.status(201).json({ msg: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.msg });
  }
};

// Get All Users
const getAll = async (req, res) => {
  try {
    const userData = await User.find();
    if (!userData || userData.length === 0) {
      return res.status(404).json({ msg: "User Data Not Found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error.msg });
  }
};

// Get One User by ID
const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ msg: "User Not Found" });
    }
    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

 const update = async(req, res) =>{
  try {

      const id = req.params.id;
      const userExist = await User.findById(id);
      if(!userExist){
          return res.status(404).json({msg:"User not found"});
      }

      const updatedData = await User.findByIdAndUpdate(id, req.body, {new:true});
      res.status(200).json({msg: "User updated successfully"});
      
  } catch (error) {
      res.status(500).json({error: error});
  }
}


const deleteUser = async(req, res)=>{
  try{
    const id = req.params.id;
    const userExist = await User.findById(id);
    if(!userExist){
      return res.status(404).json({msg: "User Not Existing"});
    }
    await User.findByIdAndDelete(id);
    res.status(200).json({msg: "User Deleted Successfully"});
    }
    catch (error) {
      res.status(500).json({ error: error.message });
      }
}
// Export functions properly
module.exports = { create, getAll, getOne,deleteUser, update};
