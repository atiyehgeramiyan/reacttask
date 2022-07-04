import { createContext } from "react";


const statusTaskList = [
    { id: 1, statusName: "To Do",color:"#5cb85c" },
    { id: 2, statusName: "In Progress",color:"#2196F3"  },
    { id: 3, statusName: "Done",color:"#f44336"  },
    { id: 4, statusName: "Archive",color:"#da190b"  }
];

export const TaskStatusContext=createContext(null);


const TaskStatusProvider=({children})=>{

   
    return (
        <TaskStatusContext.Provider value={{statusTaskList,count:0}}>
            {children}
        </TaskStatusContext.Provider>

    )
}

export default TaskStatusProvider;