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

router.get('/', async(req, res)=>{
    try {
        const postList = await db.query(`Select * from post`, { type: QueryTypes.SELECT })
        res.status(200).json(postList)
    } catch (error) {
        res.send(error)
    }
})

router.get('/:id_post', async(req,res)=>{
    const {id_post} = req.params;
    try {
        const post = await db.query(`Select * from post where id_post = "${id_post}" `, { type: QueryTypes.SELECT })
        if(post.length>0) {
            res.status(200).json(post)
        }
    } catch(err) {
        console.log(err)
    }
})

router.delete('/deletePost',async(req,res)=>{
    try {
        const {id,imageUrl} = req.body;
        const imagePath = `public/${imageUrl}`
        fs.unlinkSync(imagePath)

        const deletePost = await db.query (`DELETE FROM post WHERE id_post=${id}`, { type: QueryTypes.DELETE })
        res.status(200).json({msj:'usuario borrado'})        
    } catch (error){
        console.log(error)
    }
})

router.patch('/editPost',upload.single('image'), async (req,res)=>{
    
    try{
        console.log(req.body)
        const {title,content,place,id} = req.body;

        const imageUrl = req.file ? req.file.path.replace(/\\/g, '/').replace("public/","") : req.body.image;
        const updatedPost = await db.query(`Update post set title= "${title}",content= "${content}",place= "${place}", image="${imageUrl}" where id_post = "${id}"`,{type: QueryTypes.UPDATE })

        if(updatedPost.length>1){
            res.status(200).json(updatedPost);
        }
        else{
            res.status(404).send('No se pudieron guardar los cambios')
        }
    } catch(err){
        console.log(err)
    }
})


module.exports = router