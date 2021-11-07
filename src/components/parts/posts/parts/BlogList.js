import React from 'react';
import { Link} from "react-router-dom";
import useFetch from "../../useFetch";


const BlogList = () => {
  const { data: blogs, pending, errorInfo} = useFetch('http://localhost:4040/blogs');

  const handleDelete = (e, id) => {
    
    fetch(('http://localhost:4040/blogs/' + id), {
      method: 'DELETE'
    });

    e.target.parentElement.remove();
  };
  
  return ( 
    <>
      { errorInfo && <div className="info-text error-block">{errorInfo}</div> }
      { pending && <div className="info-text loading">Loading ...</div>}
      <div className="blog-list">
        {blogs.map(item => (
          <div className="blog-item" key={item.id}>
            <Link to={`/blog/${item.id}`}>
              <h2>{item.title}</h2>
              <p>{item.author}</p>
              <i>{item.date}</i>
            </Link>
            <button onClick={(e) => handleDelete(e, item.id)}>Delete post</button>
          </div>
        ))}
      </div>
    </>
  );
}
 
export default BlogList;
