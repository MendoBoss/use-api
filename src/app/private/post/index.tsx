import React from 'react'
import Add from './add'
import List from './list'

const Index = () => {
  return (
    
    <div className="p-6 max-w-lg mx-auto">
        <h1 className="text-2xl text-center font-bold mb-10">To-Do List</h1>
    
        <Add/>

        <List/>

    </div>
  )
}

export default Index