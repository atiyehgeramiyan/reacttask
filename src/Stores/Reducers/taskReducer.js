const taskReducer = (state, action) => {

    switch (action.type) {
        case "register":
            {
                let task = state.model;
                let listModel = state.listModel;

                if (task.id === 0) {
                    //Register ...
                    let id = 1;
                    if (listModel.length > 0) {
                        id = listModel[listModel.length - 1].id + 1
                    }
                    task.id = id;
                    listModel = [...listModel, task];
                }
                else {
                   
                    // Edit ...
                    let index = listModel.findIndex(p => p.id === task.id);
                    if (index !== -1) {
                        listModel[index] = task;
                    }
                }

                return { ...state, listModel: listModel, model: { id: 0, taskName: '', duration: 0, statusId: 1 } }
            }
        case "remove":
            {
                let listModel = state.listModel;
                let index = listModel.findIndex(p => p.id === action.payload);
                if (index !== -1) {
                    let temp = [...listModel];
                    temp.splice(index, 1);
                    listModel = [...temp];

                }
                return { ...state, listModel: listModel, model: { id: 0, taskName: '', duration: 0, statusId: 1 } };
            }
        case "hideModal":
            {
                return { ...state, showModal: false };
            }
        case "setListModel":
            {
                return { ...state, listModel: action.payload };
            }
        case "showModal":
            {
                return { ...state, showModal: true };
            }
        case "selectModel":
            {
                return { ...state, model: action.payload }
            }
        case "resetModel":
            {
                return { ...state, model: { id: 0, taskName: '', duration: 0, statusId: 1 } }
            }
        case "selectStatus":
            {
                return {...state,selectedStatusModel:action.payload}
            }
        default:
            return state;
    }
}

export default taskReducer;