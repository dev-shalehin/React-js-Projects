import React from 'react'

const TaskItem = ({task, status}) => {
  return (
    <>
        <li className='list-none py-4 flex justify-between items-center border-b border-gray-400'>
            <div>
                <input type="checkbox" className='h-6 w-6 inline-block mr-5' checked={status} readOnly />
                <span className='text-2xl inline-block text-white'>{task?.title}</span>
            </div>
            <div>
                <span className='mr-4 cursor-pointer'>Edit</span>
                <button className='py-1 px-4 bg-gray-900 rounded-2xl cursor-pointer'>Delete</button>
            </div>
        </li>
    </>
  )
}

export default TaskItem
