import { useContext } from 'react';
import { TaskContext } from '../../Stores/Contexts/TaskContext';
import { TaskStatusContext } from '../../Stores/Contexts/TaskStatusContext'

const TaskHeader = (props) => {


    const { statusTaskList } = useContext(TaskStatusContext);
    const { getTaskCountbyStatusId,setSelectedTaskStatusModel } = useContext(TaskContext);

    return (<header>
        <button className="tablink" onClick={()=>setSelectedTaskStatusModel(null)}>Task Managment</button>

        {
            statusTaskList.map((value) => {
                return <button onClick={()=>setSelectedTaskStatusModel(value)}   key={value.id} className="tablink" >{value.statusName} <span> List
                </span>
                    <span style={{marginLeft:7}}>
                        {getTaskCountbyStatusId(value.id)}
                    </span>
                </button>
            })
        }
    </header>);
}


export default TaskHeader;