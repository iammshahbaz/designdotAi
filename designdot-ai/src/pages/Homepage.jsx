import React, { useEffect, useState } from 'react';
import BlogForm from '../components/BlogForm';
import Card from '../components/Card';

const Homepage = () => {
    const [blogs, setBlogs] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || []; 
        setBlogs(storedBlogs);
    }, []); 

    const handleAddBlog = (newBlog) => {
        const updatedBlogs = [newBlog, ...blogs];
        setBlogs(updatedBlogs);
        localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    };

    const closeForm = () => {
        setShowForm(false); 
    };

    return (
        <div>
            <h1 className='heading1'>Home Page</h1>
            <button className='btn' onClick={() => setShowForm(!showForm)}>Add Blog</button>
            {showForm && <BlogForm addBlog={handleAddBlog} closeForm={closeForm} />}
            <div>
              <h4 className='heading4'>Recently added Blogs</h4>
                {blogs.map((blog, index) => (
                    <Card key={index} blog={blog} />
                ))}
            </div>
        </div>
    );
}

export default Homepage;
