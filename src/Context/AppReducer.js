import API from '../Service/data'

const Reducer = (state, action) => {
  switch (action.type) {
    case "Remove_TASK":
      console.log("Remove_TASK here");
      return {
        taskList: state.taskList.filter((tasks) => {
          return tasks.id !== action.payload;
        }),
      };
    case "ADD_TASK":
      console.log("############Add task#########");
      return {
        taskList: [action.payload, ...state.taskList],
      };
    case "EDIT_TASK":
      console.log("############Edit task#########");
      const updateTask = action.payload;
      const updatedTasks = state.taskList.map((task) => {
        if (task.id === updateTask.id) {
          return updateTask;
        }
        return task;
      });
      return {
        ...state,
        taskList: updatedTasks,
      };
    default:
      return state;
  }
};

export default Reducer;
