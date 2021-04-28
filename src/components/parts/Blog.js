import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import BlogList from "./particles/BlogList"

const Blog = () => {

  return ( 

    <div>
      <div className="blog-head">
        <h1>Blog main page</h1>

      </div>
      <Router>
        <Switch >
          <Route exact path="/blog">
            <BlogList />
          </Route>
          {/* <Route>
            <BlogCreate/>
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}
 
export default Blog;
