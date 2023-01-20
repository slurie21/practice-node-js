const { check, validationResult } = require('express-validator');


exports.createPostValidtor = 
    [
        //title
        check('title', "Write a title").notEmpty(),
        check('title', "Title is too short.  between 4 to 150 char").isLength({
            min:4,
            max:150
        }),
        //body
        check('body', "Write a body").notEmpty(),
        check('body', "Body is too short.  between 4 to 2000 char").isLength({
            min:4,
            max:2000
        })
    ];