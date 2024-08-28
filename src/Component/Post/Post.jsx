import React, { useState } from 'react';
import Form from '../Form/Form';
import Img from '../../assets/108893-insta.jpg';
import User from '../../assets/user.png';

const Post = () => {
    const [postData, setPostData] = useState({
        username: '',
        comment: '',
        rating: 1,
    });

    const [comments, setComments] = useState([]);

    const handleComment = (e) => {
        const { name, value } = e.target;
        setPostData({
            ...postData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      postData.username && postData.comment
          ? (setComments([...comments, postData]),
             setPostData({
                 username: '',
                 comment: '',
                 rating: 1,
             }))
          : alert("Please fill in all fields before submitting.");
  };
  

    return (
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
                <img className="w-12 h-12 rounded-full" src={User} alt="User Avatar" />
                <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Ankur Changani</h3>
                    <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
            </div>

            <div className="mb-6">
                <img className="w-full h-64 object-cover rounded-lg" src={Img} alt="Post Image" />
                <p className="text-gray-700 leading-relaxed mt-4">
                    Instagram content are you looking to create? Are you thinking about photos, videos, stories, captions, or something else? Let me know the theme or topic, and I can help you craft some great content!
                </p>
            </div>

            <hr className="border-t border-gray-300 my-4" />

            <Form
                username={postData.username}
                comment={postData.comment}
                rating={postData.rating}
                handleComment={handleComment}
                handleSubmit={handleSubmit}
            />

            <div className="mt-6">
                {comments.length > 0 ? (
                    comments.map((c, index) => (
                        <div key={index} className="mt-5 p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                            <h5 className="text-sm font-semibold text-gray-800">{c.username} - {c.rating} ⭐</h5>
                            <p className="text-gray-700">{c.comment}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                )}
            </div>
        </div>
    );
};

export default Post;
