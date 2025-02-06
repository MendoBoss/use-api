import React, { useState } from 'react'

const Add = () => {
    // const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const addTask = (e)=>{
        
    }
  return (
    <div className="flex flex-col gap-2 mb-4">
        <div className="flex flex-col gap-2 mb-4">
        <input 
          type="text" 
          placeholder="Titre" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
        />
        <input 
          type="text" 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
        />
        <button 
          onClick={addTask} 
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Ajouter
        </button>
      </div>
        {/* <input type="text" className="border p-2 rounded"/>
        <input type="text" className="border p-2 rounded"/>
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Ajouter</button> */}
    </div>
  )
}

export default Add