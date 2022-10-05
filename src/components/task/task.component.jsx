import React, { useState } from 'react'
import { Task } from '../../types/task.model'

import './task.component.scss'

export default function Task () {

	const [task, setTask] = useState(new Task())

    return (
        <div className='Task'>
            
        </div>
    )

}