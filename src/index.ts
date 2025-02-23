import express from "express";
import { PrismaClient } from "@prisma/client";

const clinet=new PrismaClient();

const app = express();
const port = 3000;

app.get("/", async(req, res) => {
    const data=await clinet.user.findMany();
    res.json(data);
  
});


app.post('/',async(req,res)=>{
    await clinet.user.create({
        data:{
            email:Math.random().toString(36).substring(7)+'@gmail.com',
            password:Math.random().toString(36).substring(7),   
        }
        })
    res.json({message:'User created'})
})


app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});