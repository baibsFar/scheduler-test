import React, { useState } from 'react'
import { Task } from '../../types/task.model'

export default function TaskComponent () {

	const [task, setTask] = useState(new Task())

    return (
        <div className='Task'>
            
        </div>
    )

}