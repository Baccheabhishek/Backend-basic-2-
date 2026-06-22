const express = require("express");
const app = express();


const noteModel = (require("./models/note.model"));

// post api 
app.use ( express.json());

app.post("/notes", async (req, res)=>{
    const data = req.body;
     await noteModel.create({
        title:data.title,
        description:data.description,
    })
    res.status(201).json({
    message:"Note created successfully",
    })

})


// get api 
app.get("/notes", async( req, res)=>{
    notes = await noteModel.find()
    res.status(200).json({
        message:"Notes fetched successfully",
        notes:notes
    })
})


// delete api
app.delete("/notes/:id", async ( req ,res)=>{
    const id = req.params.id;
    await noteModel.find({
        _id:id
    })
    res.status(200).json({
        mesaage:"Note deleted successfully",
    })
})


//patch api 
app.patch("/notes/:id", async ( req, res)=>{
    const id = req.params.id;
    const description = req.body.description;
      
    await noteModel.findOneAndUpdate({
         _id:id
    },
    {
        description:description
   
    })
    res.status(200).json({
    message:"Note updated successfully",
})

})




module.exports = app;

