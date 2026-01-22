import { useState } from "react";
import { useEffect } from "react";

import React from 'react'

// console.log('Start Api');
const useTask = () => {
const[tasks, setTasks] = useState([]);
const[status, setStatus] = useState()
useEffect(()=>{
    const getToDos = async () => {
        
        const baseAPI = 'http://localhost:4000/todos';
        const res = await fetch(baseAPI);
        const data = await res.json();
        setTasks(data)
        // console.log();
        
        
    }
    getToDos()
}, []);
const statusHandeler = ()=>{
    
}
return tasks;
}

export default useTask