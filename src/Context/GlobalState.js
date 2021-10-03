import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  taskList: [ {
    "id": "4d89332f-d7f6-4509-9aab-157f25a7b8ea",
    "todoTitle": "Complete React Hooks",
    "todoDescription": "some desc",
    "todoStatus": "inprogress",
    "todoTime": "10:02"
},
{
  "id": "34ef41e4-8c95-4ceb-8744-3139e6b0aed1",
  "todoTitle": "Complete Todo App",
  "todoDescrip ntion": "",
  "todoStatus": "completed",
  "todoTime": "00:08"
}
],
};

//initial state
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

//Actions
const removeTask =(id)=>{
    console.log('remove task'+id)
    dispatch({
        type:"Remove_TASK",
        payload:id
    })
}

const addTask=(task)=>{
    console.log('added task'+task)
    dispatch({
        type:"ADD_TASK",
        payload:task
    }) 
}

const editTask=(task)=>{
    console.log('edit task'+task)
    dispatch({
        type:"EDIT_TASK",
        payload:task
    }) 
}

  return (
    <GlobalContext.Provider
      value={{
        taskList:state.taskList,
        removeTask:removeTask,
        addTask:addTask,
        editTask:editTask
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};


