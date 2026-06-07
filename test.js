const mongoose = require("mongoose");

mongoose.connect(
"mongodb://ashokvarma5247_db_user:Ashok%40254@ac-l4icr6m-shard-00-00.siesasy.mongodb.net:27017,ac-l4icr6m-shard-00-01.siesasy.mongodb.net:27017,ac-l4icr6m-shard-00-02.siesasy.mongodb.net:27017/?ssl=true&replicaSet=atlas-neymvt-shard-0&authSource=admin&appName=Cluster0"
)
.then(() => {
    console.log("✅ MongoDB Connected");
})
.catch((err) => {
    console.log("❌ Error");
    console.log(err);
});