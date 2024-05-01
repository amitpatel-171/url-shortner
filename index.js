import express from 'express';
import urlRoute from './routes/url.js';
import connectToMongoDb from './connect.js';
import URL from './models/url.js';

const app= express();

const port= 8001;



connectToMongoDb('mongodb://127.0.0.1:27017/short-url')
.then(()=> console.log('mongodb connected'));


app.use(express.json());



app.use('/url', urlRoute);



app.listen(port, ()=> console.log(`server started at port : ${port}`));