const express = require('express')
const router = express.Router()

const Post = require('../models/Post')

// POST

router.post('/', async(req, res)=>{

    const PostData = new Post({

        user:req.body.user, 
        title:req.body.title,
        text:req.body.text,
        hashtag:req.body.hashtag,
        location:req.body.location,
        url:req.body.url
    })
    try{
        const postToSave = await postData.save()
        res.send(postToSave)
    } catch(err){
        res.send({message:err})
    }
})

// GET

router.get('/', async(req, res)=>{
    try{
        const postsToGet = await Post.find().limit(100)
        res.send(postsToGet)
    }catch(err){
        res.send({message:err})
    }
})


// GET (by id)

router.get('/:postID', async(req, res)=>{
    try{
        const postByID = await Post.findById(req.params.postID)
        res.send(postByID)
    }catch(err){
        res.send({message:err})
    }
})

// PATCH 

router.patch('/:postID', async(req,res) => {
    try{
        const postToUpdateByID = await Post.updateOne(
            {_id:req.params.postID},
            {$set: {
                user:req.body.user,
                title:req.body.title,
                text:req.body.text,
                hashtag:req.body.hashtag,
                location:req.body.location,
                url:req.body.url
            }
        })
        res.send(postToUpdateByID)
    }catch(err){
        res.send({message: err})
    }
})

// DELETE

router.delete('/:postID', async(req,res)=>{
    try{
        const postToDeleteByID = await Post.deleteOne({_id:req.params.postID})
        res.send(postToDeleteByID)
    } catch(err){
        res.send({message: err})
    }
 })

 module.exports = router

