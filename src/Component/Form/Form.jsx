


import React from 'react';

function  Form({ comment = ((e) => e), handleComment, onchangeSumbit }) {

 
  return (
    <>
      <div className="mt-6">
        <form onSubmit={onchangeSumbit}>
          <input
            type="text"
            name="comment"
            value={comment}
            onChange={handleComment}
            placeholder="Add a comment..."
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
          />
          <button
            type="submit" 
            className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500"
          >
            Post Comment
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;

