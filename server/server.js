const express=require('express');
const app=express();
const port= 3000;
const mongoDB=require("./utils/db");
const routes=require("./router/auth-router.js");

app.use(express.json());


app.use("/api/auth",routes);

mongoDB();
app.listen(port,()=>{
  console.log(`Server started on port ${port}`);
})

