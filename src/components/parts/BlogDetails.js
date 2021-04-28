import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { blogId } = useParams();
  const { data: blog, pending, errorInfo} = useFetch('http://localhost:8000/blogs/' + blogId);

  return ( 
    
    <div className="blog-content">
      { errorInfo && <div className="info-text error-block">{errorInfo}</div> }
      { pending && <div className="info-text loading">Loading ...</div>}
      {blog && 
        <article>
          <h3>{ blog.title }</h3>
          <i>Author: { blog.author }</i>
          <p>{ blog.details }</p>
        </article>}
    </div>
  );
}
 
export default BlogDetails;
