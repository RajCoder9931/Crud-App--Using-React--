const express = require("express");
const router = express.Router();  
const { create, getAll,getOne, deleteUser,update } = require("../Controller/userController");

router.post("/create", create);  
router.get("/getall", getAll);
router.get("/getone/:id", getOne);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteUser);

module.exports = router;
