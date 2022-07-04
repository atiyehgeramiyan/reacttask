
import TaskListView from './taskListView'
import TaskForm from "./TaskForm";
import Modal from "../../Components/Modal/Modal";

import { useContext } from 'react';
import { TaskContext } from '../../Stores/Contexts/TaskContext'

const TaskManagment = () => {

    const {showModal, openTaskFormForRegister,hideTaskForm} = useContext(TaskContext);

   
    return (
        <div>
            <h2>Task Managment</h2>
            <hr />
            <button className="btn success" onClick={() =>openTaskFormForRegister()}><span className="fa fa-plus" style={{ marginRight: 5 }}></span>New</button>

            <TaskListView   />

            <Modal
                header={<p>Task Managment</p>}
                show={showModal} hide={() => hideTaskForm()}>
                <TaskForm /> 
            </Modal>

        </div>
    )
}

export default TaskManagment;

