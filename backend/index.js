import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import blog_post_router from './routes/blog_post_routes';
import jobs_router from './routes/job_routes';
import projects_router from './routes/project_routes';

const app = express();
dotenv.config();

app.use(cors());

//Linking our app to our API routes
app.use('/blogposts', blog_post_router);
app.use('/events', jobs_router);
app.use('/projects', projects_router);

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.PORT, () => console.log(`Backend server on port: ${process.env.PORT}`)))
    .catch(e => console.log(e.message));

mongoose.set('useFindAndModify', false);