import React from 'react';

const Form = ({ username, comment, rating, handleComment, handleSubmit }) => {
    return (
        <div className="mt-6">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleComment}
                    placeholder="Username"
                    className="w-full border border-gray-300 p-2 mb-3 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                    required
                />
                <textarea
                    type="text"
                    name="comment"
                    value={comment}
                    onChange={handleComment}
                    placeholder="Add a comment..."
                    className="w-full border border-gray-300 p-2 mb-3 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                    required
                />
                <select
                    name="rating"
                    value={rating}
                    onChange={handleComment}
                    className="w-full border border-gray-300 p-2 mb-3 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                >
                    {[1, 2, 3, 4, 5].map((value) => (
                        <option key={value} value={value}>
                            {value} Star{value > 1 && 's'}
                        </option>
                    ))}
                </select>
                <button
                    type="submit"
                    className="w-full mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
