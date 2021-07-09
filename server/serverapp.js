const express=require('express');
require('./datatbase/connectdb');
const PORT=process.env.PORT || 3001;
const app=express();
app.use(express.json());


app.use(require("./Router/showingdbfile"));
app.use(require("./Router/submittingfiletodb"));
app.use(require("./Router/deletingpost"));
app.use(require("./Router/updatingpost"));

app.listen(PORT,()=>{
    console.log("server is running");
});