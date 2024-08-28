
import React, { useState } from 'react';
import Form from '../Form/Form';
import Img  from '../../assets/108893-insta.jpg';
import User  from '../../assets/user.png';


const Post = () => {
  const [PostData, setPostData] = useState({
    comment: '',
  });

  const [comments, setComments] = useState([]);

  const handleComment = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setPostData({
      ...PostData,
      [name]: value,
    });
  };

  const onchangeSumbit = (e) => {
    e.preventDefault();

    setComments([...comments, PostData]);


    setPostData({
      comment: '',
    });
  };

  return (
    <>
      <div className="flex items-center mb-4">
        <img
          className="w-12 h-12 rounded-full"
          src={
            User
          }
          alt="User Avatar"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-900">Ankur Changani</h3>
          <span className="text-sm text-gray-500">2 hours ago</span>
        </div>
      </div>

      <div className="mb-4">
        <img
          className="mt-4 rounded-lg w-full"
          src= {
            Img
          }
          alt="Post Image"
        />
        <p className="text-gray-800 leading-relaxed mt-2">
        Instagram content are you looking to create? Are you thinking about photos, videos, stories, captions, or something else? Let me know the theme or topic, and I can help you craft some great content!
        </p>
      </div>

      <hr className="border-t border-gray-200 my-4" />

      <Form
        comment={PostData.comment}
        handleComment={handleComment}
        onchangeSumbit={onchangeSumbit}
      />
      <div>
        <h4 className="font-semibold text-lg mb-4 text-gray-900">Comments</h4>


        {comments.length > 0 ? (
          comments.map((c, index) => (
            <div key={index} className="flex space-x-4 mb-4">
              <div>
                <h5 className="text-sm font-semibold text-gray-800">User {index + 1}</h5>
                <p className="text-gray-700">{c.comment}</p>
              </div>
            </div>
          ))
        ) : (
          <p>no comments</p>
        )}
      </div>
    </>
  );
};

export default Post;

