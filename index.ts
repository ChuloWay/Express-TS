
import express, { Express , Request, Response } from 'express';
import dotenv from 'dotenv';


dotenv.config();

const app: Express = express();
const port = process.env.PORT;



app.get('/', (req:Request , res:Response) =>{
    res.send('Started This My Nigga!!!')
})




app.listen(port, ()=>{
    console.log(`Started Server At Port: ${port}`);
})