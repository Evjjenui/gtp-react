import React from 'react';
import useFetch from "../useFetch"


const BlogList = () => {
  const { data: blogs, pending, errorInfo} = useFetch('http://localhost:8000/blogs');

  { errorInfo && <div className="info-text error-block">{errorInfo}</div> }
  { pending && <div className="info-text loading">Loading ...</div>}
  
  return ( 
    <div className="blog-list">
      {blogs.map(item => (
        <div className="blog-item" key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.author}</p>
          <i>{item.data}</i>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;
