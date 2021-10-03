import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { ListGroup,ListGroupItem,Button, Input } from 'reactstrap';

import { GlobalContext } from '../Context/GlobalState';
import { useState } from 'react/cjs/react.development';

const ListTodo=()=>{
  const {taskList,removeTask} = useContext(GlobalContext);
  const [selected,setSelected]=useState('inprogress');



 const DisplayTaskList =()=> (

   (taskList.length > 0) ?
   (<ListGroup className="mt-4">
  {taskList.map((task)=>(
    (task.todoStatus ===selected)&&(
          <ListGroupItem className="" key={task.id}>
            
          <div>
            Task: &nbsp;&nbsp;
            {task.todoTitle}
            </div>
  
          <div>
            Status: &nbsp;&nbsp;
            {task.todoStatus}
          </div>

          <div style={{float:"right"}}>
           <Link to={`/edit/${task.id}`} className="btn btn-warning">Edit</Link>
        &nbsp;   <Button onClick={()=>removeTask(task.id)}>Delete</Button>
         </div>         
       </ListGroupItem> 
  )))}
</ListGroup>):"No tasks are available"
 )



    return (
      <>
        <div onChange={(e)=>setSelected(e.target.value)}>
            <label>inprogress</label>
            <Input type="radio" name="status" value="inprogress" defaultChecked/>
            <label>Completed</label>
            <Input type="radio" name="status"value="completed"/>
        </div>

      {DisplayTaskList()}

   </> )
}
export default ListTodo