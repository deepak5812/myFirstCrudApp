const mongoose=require('mongoose');
require('dotenv').config();
const db=process.env.DATABASEAPI;
mongoose.connect(db,{ useNewUrlParser: true,
                      useCreateIndex:true,
                      useUnifiedTopology:true,
                      useFindAndModify:false}).then(()=>{
                          console.log(" database connected......");
                      }).catch(()=>{console.log("database not connected......")});


               