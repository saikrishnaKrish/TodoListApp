import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { ListGroup,ListGroupItem,Button, Input } from 'reactstrap';

import { GlobalContext } from '../Context/GlobalState';
import { useState } from 'react/cjs/react.development';

const ListTodo=()=>{
  const {taskList,removeTask} = useContext(GlobalContext);
  const [selected,setSelected]=useState('incomplete');



 const DisplayTaskList =()=> (

   (taskList.length > 0) ?
   (<ListGroup className="mt-4">
  {taskList.map((task)=>(
    (task.todoStatus ===selected)&&(
          <ListGroupItem className="d-flex" key={task.id}>
          <div>{task.todoTitle}</div>
          &nbsp;&nbsp;
          <div>{task.todoStatus}</div>

          <div style={{marginLeft:"auto"}}>
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
            <label>InComplete</label>
            <Input type="radio" name="status" value="incomplete" defaultChecked/>
            <label>Completed</label>
            <Input type="radio" name="status"value="completed"/>
        </div>

      {DisplayTaskList()}

       {/* <ListGroup className="mt-4">
         {taskList.map((task)=>(
                 <ListGroupItem className="d-flex" key={task.id}>
                 <div>{task.todoTitle}</div>
                 <div style={{marginLeft:"auto"}}>
                  <Link to={`/edit/${task.id}`} className="btn btn-warning">Edit</Link>
               &nbsp;   <Button onClick={()=>removeTask(task.id)}>Delete</Button>
                </div>         
              </ListGroupItem>
         ))}
     
       </ListGroup> */}
   </> )
}
export default ListTodo