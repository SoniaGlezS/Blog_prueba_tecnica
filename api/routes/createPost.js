const { Router } = require('express');
const router = Router();
const db = require('../db/db.js');
const { QueryTypes } = require('sequelize');
const multer = require('multer');
const crypto = require('crypto')
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = 'public/images';
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        const randomBytes = crypto.randomBytes(8).toString('hex')
        cb(null, `${file.originalname.split('.')[0]}-${randomBytes}.${file.mimetype.split('/')[1]}`);

    }
})

const upload = multer({ storage: storage})

router.post('/',upload.single('image'), async(req, res) => {
    
    try {
        const {title,content,place} = req.body;
        const imageUrl = req.file.path.replace(/\\/g, '/').replace("public/","");
        const newPost = await db.query(`Insert into post (title, content, place, image) values ("${title}", "${content}", "${place}", "${imageUrl}")`,{type: QueryTypes.INSERT })

        if(newPost.length>0) {
            res.status(200).json(newPost)
        }
    } catch(err) {
        res.status(500).send(err)
    }
})

module.exports = router