import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes); //every routes inside the posts are gonna start with the localhost/posts/xyz

const CONNECTION_URL = 'mongodb+srv://Jay_Shukla:azsxdcfv@1@cluster0.vzurn.mongodb.net/<dbname>?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log('Server Running on port:',PORT)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false)