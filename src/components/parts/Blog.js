import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch} from "react-router-dom";
import BlogList from "./particles/BlogList"
import BlogPost from "./BlogPost"
import PostCreate from "./PostCreate";

const Blog = () => {
  let { path, url } = useRouteMatch();
  
  return ( 
    <>
      <Router>
        <div className="blog-head">
          <h1>Blog</h1>
          <div className="blog-links">
            <Link to={`${url}`}>Blog</Link>
            <Link to={`${url}/blog-create`}>Add New</Link>
          </div>
        </div>
        <Switch >
          <Route exact path={path}>
            <BlogList />
          </Route>
          <Route path={`${path}/blog-create`}>
            <PostCreate />
          </Route>
          <Route path={`${path}/:slug`}>
            <BlogPost />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
 
export default Blog;
