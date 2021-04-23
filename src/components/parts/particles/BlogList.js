import React from 'react';

const BlogList = ({blogList}) => {
  
  return ( 
    <div className="blog-list">
      {blogList.map(item => (
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
