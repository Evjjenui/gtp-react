import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { FormInput } from './particles/FormInput';
import { FormTextarea } from './particles/FormTextarea';

const PostCreate = () => {
  const [values, setValues] = useState({});
  const [isPending, setIsPending] = useState(true);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      title: values.title,
      author: values.author,
      details: values.details,
      date: new Date().toISOString().slice(0, 10)
    }
      
    fetch(('http://localhost:8000/blogs'), {
      method: 'POST',
      headers:  {'Content-Type': 'application/json' },
      body: JSON.stringify(newItem)
    }).then(() => {
      console.log('post added');
      setIsPending(false);
      history.push('/blog');
    })
  }

  return (
    <div className="blog-form">
      <h2>Create New Blog</h2>
      <form onSubmit={ handleSubmit }>
        <FormInput
          label="Title"
          valueText={values.title || ''}
          onChange={(title) => setValues({...values, title})}/>
        <FormInput
          label="Author"
          valueText={values.author || ''}
          onChange={(author) => setValues({...values, author})}/>
        <FormTextarea
          label="Description"
          valueText={values.details || ''}
          onChange={(details) => setValues({...values, details})}/>
        <button>{isPending ? 'Add Post' : 'Uploading ...'}</button>
      </form>
    </div>
  );
}
 
export default PostCreate;
