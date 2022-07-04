import { useContext } from "react/cjs/react.development";
import { TaskContext } from "../../Stores/Contexts/TaskContext";


const TaskListViewByStatus = () => {


    const { selectedStatusModel, searchTaskCountbyStatusId } = useContext(TaskContext);

    return (<div>
        <h2>Task List With Status {selectedStatusModel?.statusName}</h2>
        <hr />
        {
            searchTaskCountbyStatusId(selectedStatusModel.id)?.map((value) => {

                return (
                    <div key={value.id} className="filterDiv" style={{ backgroundColor: selectedStatusModel.color }}>
                        <p>{value.taskName}</p>
                        <div className="overlay">
                            <p>{value.taskName}</p>
                            <p>Duration:{value.duration}</p>
                        </div>
                    </div>
                )

            })
        }
    </div>)
}

export default TaskListViewByStatus;