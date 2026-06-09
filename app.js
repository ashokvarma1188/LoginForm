const express = require("express");
const path = require("path");
//const mongoose = require("mongoose");

const app = express();

// MongoDB Connection
const mongoose = require("mongoose");

mongoose.connect(
"mongodb://ashokvarma5247_db_user:Ashok@254@ac-l4icr6m-shard-00-00.siesasy.mongodb.net:27017,ac-l4icr6m-shard-00-01.siesasy.mongodb.net:27017,ac-l4icr6m-shard-00-02.siesasy.mongodb.net:27017/?ssl=true&replicaSet=atlas-neymvt-shard-0&authSource=admin&appName=Cluster0"
)
.then(() => {
    console.log("✅ MongoDB Connected");
})
.catch((err) => {
    console.log("❌ Error"); 
    console.log(err);
});
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

// Model
const User = mongoose.model("User", userSchema);

// Home Route
app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "index.html")
    );
});

// Register Route
app.post("/register", async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const user = await User.create({
            name,
            email,
            password
        });

        console.log("===== USER SAVED =====");
        console.log(user);
        console.log("======================");

        res.send("✅ User Saved Successfully");

    } catch (error) {

        console.log(error);

        res.send("❌ Error Saving User");

    }

});

// Server
app.listen(9000, () => {
    console.log("🚀 Server Running on http://localhost:9000");
});
