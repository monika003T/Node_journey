const mongoose = require("mongoose");

//connection
async function connectmongo(url) {
   return mongoose.connect(url)

}
module.exports={
    connectmongo,
}