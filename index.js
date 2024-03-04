// const bcrypt=require("bcryptjs")

// const Mongooses = require("mongooses");

// const securePassword= async (pasword)=>{
//     const paswordHash=await bcrypt.hash(pasword,10);
//     console.log(paswordHash);

//     const passwordmatch= await bcrypt.compare(pasword,paswordHash)
//     console.log(passwordmatch)

// }

// securePassword("om@123453")


//when we define our schema the provire us a method that is (pre)
//this metod is run befor out controller method 
//this write as 

// const employeeSchema= require(Mongooses).Schema({})

// employeeSchema.pre("save",async function(next){
//     if(this.isModified("password")){
//         console.log(`the current password is ${this.password}`);
//         this.password=await bcrypt.hash(this.password,10)
//     }

//     next()
// })



// const jwt =require('jsonwebtoken');
// const createTokent= async ()=>{
//   const token= await jwt.sign({_id:"2354345631434353"},"mkdjjdjjsjdfjsjdjfjjsdfsdjsksjsj")
//   console.log(token)
//   const userVer=jwt.verify(token, 'mkdjjdjjsjdfjsjdjfjjsdfsdjsksjsj');
//   console.log(userVer)
// }

// createTokent()


//when we are working with instance then we need to go with methods

// employeeSchema.methods()

// application.post("/",async(req,res)=>{
//     try {
//         const email=req.body.email;
//         const password=req.body.password;
//         const userMail=await Register.findOne({emil:email});
//         const isMach=await bcript.compair(password,useemail.password);
//         const token= await userMail.generetAuthToken();
//         if(isMach){
//             console.log("the token part",token);


//         }

//     } catch (error) {
        
//     }
// })


// const express=require('express');
// const bodyParser=require('body-parser');

// const cors=require("cors")
// const mongooses=require('mongoose');
// const path=require('path');
// const { execSync } = require("child_process");
// const app=express();
// // const Image=require('./models/Image');
// const fs=require('fs');
// //middleware for limit the size of data
// app.use(bodyParser.json({limit:'50mb'}));
// app.use(bodyParser.urlencoded({limit:"50mb"}));
// app.use(cors());
// app.use(express);

// const imageSchema=new mongooses.Schema({
//     data:Buffer,
//     contentType:String,
// });

// const Image= mongooses.model('Image',imageSchema);


// module.exports =Image;

// app.post('/upload/imageuploade', async(req,res)=>{
//     const imageData=req.body.imageData;
//     const base64Data=imageData;
//     const uploadFolderPath='./uploads';
//     if(!fs.existsSysn(uploadFolderPath)){
//         fs.mkdirSync(uploadFolderPath);
//     }
//     const dynamicFileName=`output_${Date.now()}.jpg`;
//     const base64Image=base64Data.replace(/^data:image\/\w+;base64,/,'');
//     const filepath=path.join(uploadFolderPath,dynamicFileName);
    
//     const imageBuffer=Buffer.from(base64Image,'base64');
//     fs.writeFile(filepath,imageBuffer,'base64',(erro)=>{
//         if(erro){
//             console.error('Error',erro);
//         }else{
//             console.log('Image Save Successfully')
//         }
//     });
//     if(!imageData){
//         return res.status(400).send('Image data')
//     }

//     const newImage= await Image.create({data:imageData})
// })

// app.post('/uploade/imageUploade',async(req,res)=>{
//     const imageData=req.body.imageData;
//     const base64Data=imageData;
//     const uploadFolderPath='./uploads';
//     if(!fs.existsSync(uploadFolderPath)){
//         fs.mkdirSync(uploadFolderPath);
//     }
//     const dynamicFileName=`${emaloyeename}+${Date.now()}.jpg`;
//     const base64Image=base64Data.replace(/^data:image\/\w+;base64,/,'');
//     const filepath=path.join(uploadFolderPath,dynamicFileName);
//     const imageBuffer=Buffer.from(base64Image,'base64')
//     fs.writeFile(filepath,imageBuffer,'base64',(err)=>{
//       if(err){
//         console.error('Error',err)
//       }
//       else{
//         console.log('Image save Sucessfully')
//       }
//     })

//     const newImage=new Image({
//         data:imageBuffer,
//          contentType:'image/jpeg'
//     })

//     await newImage.save()
//     .then(()=>{
//         console.log('image Save SucessFull')
//     }).catch(err=>{
//         console.error('Error saving image ',err)
//     })

// })


// app.get('/getImage',async(req,res)=>{
//     try {
//         const image=await Image.find();
//         res.set('Content-Type',image.contentType);
//         res.send(image.data);
//     } catch (error) {
//         console.error('Error fetching image:',error)
        
//     }

// })


// const imageSchema1=new mongooses.Schema({
//     email:String ,
//     imgepath:Sting  
// })

// const Image1=mongooses.model('Image',imageSchema1)


// app.post('/upload',async(req,res)=>{
//     try {
//         const imageData=req.body.imageData;
//         const email=req.body.email;
//         const base64Data=imageData;
//         const uploadFolderPath='./uploads';
//         if(!fs.existsSync(uploadFolderPath)){
//             fs.mkdirSync(uploadFolderPath)
//         }



//         const date=new Date();
//         const base64Image=base64Data.replace(/^data:image\/\w+:base64,/,'');
//         const filepath=path.join(uploadFolderPath,dynamicFileName);
//         const imageBuffer=Buffer.from(base64Image,'base64');
//         fs.writeFile(filepath,imageBuffer,'base64' ,(err)=>{
//             if(err){
//                 console.log('Erroe',err);
//             }
//         })
//     } catch (error) {
        
//     }
// })

// app.put('update',async(req,res)=>{
//     const user=Image.find({email:{$gt:18}},{name:1,address:1})
//     const updateData=Image.updateOne({age:{$lt:18}},{$set:{status:"rejected"}})
// })



// app.listen("4000",(req,res)=>{

//     res.send()

// })



const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 1000;
const mongoose = require('mongoose');

const username = 'omprakashblackbull';
const password = 'Om@BlackBull';  // Update with your actual password
const clusterName = 'cluster0';
const databaseName = 'testingfordiploy';

// Encode the special characters in the password
const uri = `mongodb+srv://${encodeURIComponent(username)}:${encodeURIComponent(password)}@${clusterName}.y7w6p9o.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

const connectionDb = async () => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connection successfully established");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(0);
    }
};
// Mongoose schema and model
const itemSchema = new mongoose.Schema({
    name: String,
    description: String
});
const Item = mongoose.model('Item', itemSchema);
// Routes
// Create an item
app.post('/items', async (req, res) => {
    try {
        const item=req.body
        const newItem = new Item(item);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Read all items
app.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Read one item
app.get('/items/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update an item
app.put('/items/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (item) {
            item.name = req.body.name || item.name;
            item.description = req.body.description || item.description;
            const updatedItem = await item.save();
            res.json(updatedItem);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete an item
app.delete('/items/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (item) {
            await item.remove();
            res.json({ message: 'Item deleted' });
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.get("/helloWorld",async(req,res)=>{
    res.send("hello world")
})


connectionDb().then(
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
)

// Secret key for encoding and decoding JWT



