const mongoose = require('mongoose') 

// mongodb url 

const mongoURL = 'mongodb://localhost:27017/hotel' 


mongoose.connect(mongoURL,{
    useNewUrlParser:true, 
    useUnifiedTopology:true, 
}) 

const db = mongoose.connection 

db.on('connected',()=>{
    console.log('Connected to MongoDB Server') 
}) 

db.on('error',(err)=>{
    console.error('Mongodb connection error:',err);
}) 

db.on('disconnected',()=>{
    console.log('Mongodb disconnected') 


})


module.exports = db 

