const express=require('express');
const app=express();
const mongoose=require('mongoose');
const User=require("./models/userModels");
const cors=require('cors')
mongoose.connect('mongodb://localhost:27017/mernDB');

app.use(express.json());
app.use(cors())

app.post('/user',async (req,res) => {
    const user=new User(req.body);
    try{
        await user.save();
        res.status(201).send(user);
    }catch(e){
        res.status(400).send(e);
    }
});

app.get('/users',async (req,res) => {
    try{
        const users=await User.find({});
        res.send(users);
    }catch(e){
        res.status(500).send(e);
    }
});

app.get('/user/:id',async (req,res) => {
    try{
        const user=await User.findById(req.params.id);
        if(!user){
            return res.status(404).send();
        }
        res.send(user);
    }catch(e){
        res.status(500).send(e);
    }
});

app.patch('/user/:id',async (req,res) => {
    const updates=Object.keys(req.body);
    const allowedUpdates=['name','Brand','Price','Size'];
    const isValidOperation=updates.every(update => allowedUpdates.includes(update));
    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid update'});
    }
    try{
        const user=await User.findByIdAndUpdate(req.params.id,req.body,{new: true,runValidators: true});
        if(!user){
            return res.status(404).send();
        }
        res.send(user);
    }catch(e){
        res.status(400).send(e);
    }
});

app.delete('/user/:id',async (req,res) => {
    try{
        const user=await User.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).send();
        }
        res.send(user);
    }catch(e){
        res.status(500).send(e);
    }
});

app.get('/test',(req,res)  => {
    res.send('This is a test route!');
});  //Test route for testing connection to the server and database.  Remove this line in a production environment.  This route is just for demonstration purposes.  It will send a simple message to the client.  This route does not interact with the database.  It's just a simple route to confirm the server is running.  The server will


app.listen(3333);

app.get('/',(req,res)  => {
    res.send('Hello World!');
}); 

