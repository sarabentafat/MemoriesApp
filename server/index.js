import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();



app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());

const CONNECTION_URL = 'mongodb+srv://yansara:yansara1234@cluster0.l9hussc.mongodb.net/memoriesProject?retryWrites=true&w=majority';
const PORT = 5000;
app.use('/posts',postRoutes)
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => app.listen(PORT, () => console.log(`Server is running on ${PORT}`)))
   .catch((error) => console.log("error.message"));
// mongoose.set('useFindAndModify',false);