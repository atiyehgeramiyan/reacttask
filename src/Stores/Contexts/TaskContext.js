
import { createContext, useReducer } from "react";
import taskReducer from "../../Stores/Reducers/taskReducer";
import { successMessage } from "../../utils/alert/alert";


export const TaskContext = createContext(null);
const initialState = {
    listModel: [], showModal: false
    , model: { id: 0, taskName: '', duration: 0, statusId: 1 },
    selectedStatusModel: null
};

const TaskProvider = ({ children }) => {

    const [state, dispatch] = useReducer(taskReducer, initialState);

    const { listModel, showModal, model,selectedStatusModel } = state;

    const registerTask = () => {

        // backend call for register
        dispatch({ type: "register" });
        dispatch({ type: "hideModal" });
        successMessage();
    }

    const openTaskFormForEdit = (task) => {
        dispatch({ type: "showModal" });
        dispatch({ type: "selectModel", payload: task });
    }

    const removeTask = (id) => dispatch({ type: "remove", payload: id });

    const showTaskForm = () => dispatch({ type: "showModal" });


    const hideTaskForm = () => dispatch({ type: "hideModal" })

    const openTaskFormForRegister = () => {
        dispatch({ type: "showModal" });
        dispatch({ type: "resetModel" });

    }

    const getTaskCountbyStatusId = (statusId) => {

        let list = listModel.filter(p => p.statusId === statusId);
        return list.length;
    }

    const searchTaskCountbyStatusId = (statusId) => {
        let list = listModel.filter(p => p.statusId === statusId);
        return list;
    }

    const setSelectedTaskStatusModel=(status)=>{
        dispatch({type:"selectStatus",payload:status});
    }

    const isExistsTask=(taskName)=>
    {
        let list=listModel.filter(p=>p.taskName==taskName.trim());

        return list.length>0;
    }

    return (
        <TaskContext.Provider value={{
            listModel, showModal, model,selectedStatusModel
            , registerTask, openTaskFormForEdit, removeTask, showTaskForm
            , hideTaskForm, openTaskFormForRegister, getTaskCountbyStatusId
            ,setSelectedTaskStatusModel,searchTaskCountbyStatusId,isExistsTask
        }}>

            {children}
        </TaskContext.Provider>

    )
}


export default TaskProvider;