import React, { useState } from 'react'

const List = () => {
    const [posts, setPosts] = useState([{title:"title",description:"desc"}]);
    
  return (
    <div className="space-y-2">
        {posts.map((post, index) => (
        <div 
            key={index} 
            className='p-3 flex justify-between items-center border rounded'>
            <div className="flex-1">
            <h2 className='font-semibold '>{post.title}</h2>
            <p className='text-sm '>{post.description}</p>
            </div>
            <div className="flex gap-2">
            <button 
                // onClick={() => toggleComplete(index)} 
                className="p-1 bg-green-500 text-white rounded hover:bg-green-600">
                ✓
            </button>
            <button 
                // onClick={() => deletepost(index)} 
                className="p-1 bg-red-500 text-white rounded hover:bg-red-600">
                ✗
            </button>
            </div>
        </div>
        ))}
    </div>
  )
}

export default List