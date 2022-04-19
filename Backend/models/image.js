const mongoose =require('mongoose');
//create image model
const imageModel = new mongoose.Schema(
   {

    name: String,
    description: String,
    image:

    {
        data: Buffer,
        contentType: String
    }

   }
   )
   module.exports = new mongoose.model('image', imageModel);
