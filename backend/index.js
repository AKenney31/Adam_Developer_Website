import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import environment from './config/environment.js';
import passport from 'passport';
import passJWT from './config/passport.js';

//import blog_post_router from './routes/blog_post_routes';
//import jobs_router from './routes/job_routes';
//import projects_router from './routes/project_routes';
import user_router from './routes/users.js';

const app = express();

//link middleware
app.use(
    bodyParser.urlencoded({extended: false})
);
app.use(bodyParser.json());
app.use(cors());

//configure passport
app.use(passport.initialize());
passJWT(passport);

//Linking our app to our API routes
app.use('/users', user_router);
//app.use('/blogposts', blog_post_router);
//app.use('/events', jobs_router);
//app.use('/projects', projects_router);

mongoose.connect(environment.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(environment.PORT, () => console.log(`Backend server on port: ${environment.PORT}`)))
    .catch(e => console.log(e.message));

mongoose.set('useFindAndModify', false);