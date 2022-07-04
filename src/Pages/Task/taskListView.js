import { useContext } from 'react';
import { TaskStatusContext } from '../../Stores/Contexts/TaskStatusContext'

import { TaskContext } from '../../Stores/Contexts/TaskContext';


const TaskListView = (props) => {



    const { listModel,openTaskFormForEdit,removeTask } = useContext(TaskContext);

    const { statusTaskList } = useContext(TaskStatusContext);


    const findTaskStatus = (id) => {

        let s = statusTaskList.find((p) => p.id === id);
        if (s)
            return s.statusName
        else
            return "";


    }

    return (


        <table className="table">
            <thead>
                <tr className="header">
                    <th>Task Name</th>
                    <th>Duration</th>
                    <th>Task State</th>
                    <th>...</th>
                </tr>
            </thead>
            <tbody>
                {
                    listModel.map((value) => {

                        return (<tr key={value.id}>
                            <td>{value.taskName}</td>
                            <td>{value.duration}</td>
                            <td>{findTaskStatus(value.statusId)}</td>

                            <td>
                                <i className="fa fa-edit text-success"
                                    onClick={() => {
                                        openTaskFormForEdit(value);
                                    }}
                                ></i>
                                <i className="fa fa-remove text-danger"
                                    onClick={() => {
                                        removeTask(value.id);
                                    }}
                                ></i>
                            </td>

                        </tr>)
                    })
                }
            </tbody>
        </table>
    )
}

export default TaskListView;