import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import FrontPage from './views/FrontPage';
import BlogView from './views/Personal Blog/BlogView';
import PostBlog from './views/Personal Blog/PostBlog';
import ProjectPostByID from './views/Personal Blog/ProjectPostByID';
import ResumePostView from './views/Resume/ResumePostView';
import PostResumeItem from './views/Resume/PostResumeItem';
import PostProject from './views/Projects/PostProject';
import ProjectByID from './views/Projects/ProjectByID';
import ProjectView from './views/Projects/ProjectView';
import Register from './views/UserValidation/Register';
//import Login from './views/UserValidation/Login';

const App = ()=>{
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <FrontPage/>
                </Route>
                <Route path="/blog">
                    <BlogView/>
                </Route>
                <Route path="/makeblog">
                    <PostBlog/>
                </Route>
                <Route path="/blog/:postId">
                    <ProjectPostByID/>
                </Route>
                <Route path="/resume">
                    <ResumePostView/>
                </Route>
                <Route path="/make_resume_item">
                    <PostResumeItem/>
                </Route>
                <Route path="/make_project">
                    <PostProject/>
                </Route>
                <Route path="/project/:projectID">
                    <ProjectByID/>
                </Route>
                <Route path="/project">
                    <ProjectView/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
            </Switch>
        </Router>        
    )
}
export default App;