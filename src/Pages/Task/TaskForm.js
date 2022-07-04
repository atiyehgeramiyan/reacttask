
import { useContext, useEffect } from 'react';
import { TaskStatusContext } from '../../Stores/Contexts/TaskStatusContext'

import { SelectInput, TextInput, NumberInput } from '../../Components/Form/Index'
import { TaskContext } from '../../Stores/Contexts/TaskContext'
import { useForm } from 'react-hook-form';


const TaskForm = () => {



    const { statusTaskList } = useContext(TaskStatusContext);
    const { model, registerTask,isExistsTask } = useContext(TaskContext);

    const { register, handleSubmit, formState: { errors },reset } = useForm({ mode: "all" });


    useEffect(()=>{
        reset();
    },[model,reset])

    const taskNameValidation = {
        ...register("taskName", {
            required: { value: true, message: "Task Name is required" }
            ,validate:(val)=>{
                if(isExistsTask(val))
                {
                    return "task is duplicated"
                }
                return true;
            }
        })
    }

    const durationValidation = {
        ...register("duration", {
            min: { value: 3, message: "Task duration must be more than 3" },
            max: { value: 20, message: "Task duration must be less than 20" }
        })
    }

    return (<form onSubmit={handleSubmit(registerTask)}>
        <div className="container">
            <div className={errors.taskName ? "input-group error" : "input-group"}>
                <TextInput validation={taskNameValidation}
                    model={model} id="taskName" description="Task Name" />
                {errors.taskName && <label className="error-message">{errors.taskName?.message}</label>}
            </div>

            <div className={errors.duration ? "input-group error" : "input-group"}>
                <NumberInput validation={durationValidation} model={model} id="duration" description="Task Duration" />
                {errors.duration && <label className="error-message">{errors.duration?.message}</label>}
            </div>

            <div className={errors.statusId ? "input-group error" : "input-group"}>
                <SelectInput
                    model={model} id="statusId" description="Task Status"
                    list={statusTaskList} text="statusName" />
                {errors.statusId && <label className="error-message">{errors.statusId?.message}</label>}
            </div>

            <button className="btn success">Register</button>
        </div>
    </form>
    )
}

export default TaskForm;






