import React, {useState} from "react";

import BlogList from "./particles/BlogList"

const Blog = () => {
  const [blogs, setBlogs] = useState([
    
  ])

  return ( 

    <div>
      <h1>Blog main page</h1>
      <BlogList blogList={blogs}/>
    </div>
  );
}
 
export default Blog;
