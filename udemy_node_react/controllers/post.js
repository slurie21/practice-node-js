// const { post } = require("../routes/post");
const Post = require('../models/post');
const { validationResult } = require('express-validator');

exports.getPosts = (req, res) => {
    const post = Post.find()
      .select("_id title body ")
      .then((posts) => {
        res.json({ posts }); //dont need to put something with same name twice. //{ posts: posts })
      })
      .catch((err) => console.log(err));
};

exports.createPost = (req, res) => {
    const post = new Post(req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array().map(error => error.msg) });
    }
    //using express validation refactors to:
    post.save().then(result => {
        res.json({
            post: result
        })
    })
};

//below went in exports.createPost instead of the post.save
   // console.log("CREATING POST: ", req.body);
    // post.save((err, result) => {
    //     // if(err){
    //     //     return res.status(400).json({
    //     //         error: err.message
    //     //     })
    //     // }
    //     res.status(200).json({
    //         post: result
    //     })
    // })