const express = require('express')
const server = express();
const router = require('./routes/index')
const routes = router
const bodyParser = require('body-parser')

server.use(bodyParser.urlencoded({extended: true, limit: '50mb'}))
server.use(bodyParser.json({limit:'50mb'}))
server.use(express.json({limit:'50mb'}))
server.use(express.urlencoded({extended: true}))

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});


server.use('/', routes);
server.use(express.static('/'));
server.use('/images', express.static('public/images'))

const app = server.listen(3001, console.log('server online'))

module.exports= app;