const express = require("express");

const connectDb = require("./config/connectDb");
require("dotenv").config({ path: "./config/.env" });

const User = require("./models/user");

const app = express();
app.use(express.json());
connectDb();

///post
app.post("/user/add", async (req, res) => {
  const { fullName, email, phone } = req.body;
  try {
    const newUser = new User({
      fullName,
      email,
      phone,
    });

    await newUser.save();
    res.send(newUser);
  } catch (error) {
    console.log(error.message);
  }
});


///get

app.get("/user/get",async(req,res)=>{
    try {
        const users=await User.find()
        res.send(users)
    } catch (error) {
        console.log(error.message)
    }
})


///getOne User id

app.get("/user/get/:id",async(req,res)=>{
    try {
        const oneUser=await User.findById(req.params.id)
        res.send(oneUser)
    } catch (error) {
        console.log(error.message)
    }
})


/// delete user

app.delete("/user/delete/:id",async(req,res)=>{
    try {
        const deletedUser= await User.findByIdAndDelete(req.params.id)
        res.send("user is deleted avec sucee")
    } catch (error) {
        console.log(error.message)
    }
})

///put
app.put("/user/edit/:id",async(req,res)=>{
    try {
        const editUser= await User.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
        res.send(editUser)
    } catch (error) {
        console.log(error.message)
    }
})







const PORT = process.env.PORT || 4000;
app.listen(PORT, (err) =>
  err
    ? console.log(err)
    : console.log(`server is run sucessfuly rahma on port ${PORT}`)
);
