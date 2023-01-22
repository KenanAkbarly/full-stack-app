const express = require('express')
const mongoose = require('mongoose')
const Joi = require('joi')
const  cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 8080;


// Create Artist Schema
const ArtistSchema = new mongoose.Schema({
    name:String,
    sold:Number,
    volume:Number,
    nft:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"nft"
         },
    ],
})



// Create NFT Schema
const NftSchema = new mongoose.Schema({
    nftName:String,
    price:Number,
    higBig:Number,
    artist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Artists'
    }
}) 

// Add DataBase
const UserModel = mongoose.model('Artists', ArtistSchema) 
const NftModel = mongoose.model('nft', NftSchema)
console.log("salam",UserModel);

mongoose.set('strictQuery',false)
mongoose.connect('mongodb+srv://Kenan:Z0kcRFiKEoxSfprt@cluster.yah8f3d.mongodb.net/?retryWrites=true&w=majority').then(()=> console.log('Connected to database')).catch((err)=> consolo.console.error(err) )
// Z0kcRFiKEoxSfprt


const artistSchema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    sold: Joi.number().integer().min(1).max(5000000000).required(),
    volume: Joi.number().integer().min(1).max(5000000000).required()
})

const nftSchema = Joi.object({
    nftName:Joi.string().required(),
    price: Joi.number().integer().min(1).required(),
    higBig: Joi.number().integer().min(1).required()
})




// GET Artist
app.get('/api/artist',(req,res)=>{
    UserModel
    .find({}, 'name sold volume' , (error,data)=>{
        if(error) return res.status(500).send({error})
        res.send(data)    
    })
    })



// POST ARTIST
app.post('/api/artist',(req,res)=>{
    const newArtist = new UserModel({
        ...req.body
    })
    newArtist
    .save()
    .then(()=> res.send({message:"Successfully created"}))
    .catch((err)=> res.status(500).send({err}))
})




// POST NFT
app.post('/api/nft/:artistId',(req,res)=>{
    const newNft = new NftModel({
        ...req.body,
        artist:req.params.artistId
    })
    newNft
    .save()
    .then(()=> res.send({message:'NFT sucessfully created',nft:newNft}))
    .catch((err)=> res.status(500).send({err}))
})



// GET NFT

/* Getting all the nft from the database. */
app.get('/api/nft',(req,res)=>{
    // NftModel.find({},(error,nft)=>{
    // if(error) return res.status(500).send({error})
    // res.send(nft)
    // })
    NftModel.find().populate('artist').exec((error,nft)=>{
        if(error) return res.status(500).send({error})
        res.send(nft)
    })
})


/* Getting all the users from the database. */
// app.get('/api/users',(req,res)=>{
//     UserModel.find({},'name sold volume nft' ,(error,users)=>{
//         if(error) return res.status(500).send({error})
//         res.send(users)
//     })
// })
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
})