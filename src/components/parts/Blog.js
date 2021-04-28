import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch} from "react-router-dom";
import BlogCreate from "./BlogCreate";
import BlogList from "./particles/BlogList"

const Blog = () => {
  let { path, url } = useRouteMatch();

  return ( 

    <div>
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
            <BlogCreate />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
 
export default Blog;
