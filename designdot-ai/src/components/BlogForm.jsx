import React, { useState } from 'react';
import "../App.css";

const BlogForm = ({ addBlog, closeForm }) => { 
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBlog = { title, content };
        addBlog(newBlog);
        alert('Blog added!');
        setTitle('');
        setContent('');
        closeForm(); 
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{ width: "80%", margin: "auto" }}>
                    <h4>Title</h4>
                    <input
                        type="text"
                        placeholder='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='inputStyle'
                    />

                    <h4>Text</h4>
                    <textarea
                        placeholder="Blog Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className='inputStyle'
                    />
                    <br />
                    <button className='btn' type="submit">Add Blog</button>
                </div>
            </form>
        </div>
    );
}

export default BlogForm;
