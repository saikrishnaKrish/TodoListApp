import React, { Fragment, useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { FormGroup, Form, Label, Input, Button } from "reactstrap";
import { GlobalContext } from "../Context/GlobalState";



const EditTodo = (props) => {
  const [selectedTask, setSelectedTask] = useState({
    id: "",
    todoTitle: "",
    todoDescription: "",
    todoTime: "",
    todoStatus: "",
  });

  
  const { taskList, editTask } = useContext(GlobalContext);

  let history = useHistory();
  const currentTaskId = props.match.params.id;
  const updateTask = (e) => {
    setSelectedTask({...selectedTask,[e.target.id]:[e.target.value]})   
  };

  const SubmitTodo = (e) => {
    e.preventDefault();
    editTask(selectedTask)
    console.log(selectedTask);
    history.push("/");
  };


  useEffect(()=>{
      const taskId=currentTaskId;
      const selectedTask = taskList.find((task)=>task.id=== taskId)
      setSelectedTask(selectedTask)
  },[currentTaskId,taskList])

  return (
    <div>
      <div className="container createTodo">
        <h3>Edit Todo</h3>
        <br />
        <br />
        {console.log(selectedTask)}
        <Form onSubmit={SubmitTodo}>
          <FormGroup>
            <div className="form-group">
              <Label htmlFor="forGrouptExampleInput">Title</Label>
              <input
                type="text"
                className="form-control"
                id="todoTitle"
                value={selectedTask.todoTitle}
                onChange={updateTask}
                required
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div className="form-group">
              <Label htmlFor="forGrouptExampleInput">Description</Label>
              <textarea
                className="form-control"
                rows="2"
                id="todoDescription"
                value={selectedTask.todoDescription}
                onChange={updateTask}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div className="form-group">
              <Label htmlFor="time">Choose Time:</Label>
              <input
                type="time"
                className="form-control"
                id="todotime"
                value={selectedTask.todoTime}
                onChange={updateTask}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div className="form-group">
              <Label htmlFor="todoStatus">Select Status</Label>
              <select
                id="todoStatus"
                name="todoStatus"
                value={selectedTask.todoStatus}
                onChange={updateTask}
              >
                <option value="incomplete">InComplete</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </FormGroup>

          <button type="submit" className="btn btn-primary">
            Edit Todo
          </button>
          <Link to="/">
            <button type="button" className="btn btn-danger">
              Cancel
            </button>
          </Link>
        </Form>
      </div>
    </div>
  );
};
export default EditTodo;
