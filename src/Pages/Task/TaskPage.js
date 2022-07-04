
import { useContext } from "react/cjs/react.development";
import { TaskContext } from "../../Stores/Contexts/TaskContext";
import TaskHeader from "./TaskHeader";
import TaskListViewByStatus from "./TaskListViewByStatus";
import TaskManagment from "./TaskManagment";

const TaskPage = () => {

    const { selectedStatusModel } = useContext(TaskContext);

    return (
        <div className="container">
            <TaskHeader />
            {
                selectedStatusModel? <TaskListViewByStatus/>:<TaskManagment />
            }
           
            
        </div>
    )
}


export default TaskPage;