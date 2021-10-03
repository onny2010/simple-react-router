import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    return (
        <div>
            <h4>Post Details: {postId}</h4>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetail;