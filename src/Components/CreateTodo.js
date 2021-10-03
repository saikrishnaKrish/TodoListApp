import React,{Fragment,useState,useContext} from 'react';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { FormGroup,Form,Label,Input,Button } from 'reactstrap';
import {GlobalContext} from '../Context/GlobalState'

import {v4 as uuid} from 'uuid';

const CreateTodo=()=>{
    const [todoTitle,setTodoTitle] =useState('');
    const [todoDescription,setDescription]=useState('');
    const [todoTime,setTime] =useState(new Date());
    const [todoStatus,setTodoStatus] = useState('incomplete');
    
    const {addTask} = useContext(GlobalContext)
    let history = useHistory();

const SubmitTodo=e=>{
    e.preventDefault();
    const todoNew = {
        id:uuid(),
        todoTitle,
        todoDescription,
        todoStatus,
        todoTime
    }
    console.log(todoNew)
    addTask(todoNew);
    history.push("/")
}


    return (
        <>
        <div className="container createTodo">
            <h3>Create Todo</h3>
            <br/><br/>
            <Form onSubmit={SubmitTodo}>
                <FormGroup>
                
                    <Label htmlFor="forGrouptExampleInput">Title</Label>
                    <input type="text" className="form-control" id="todoTitle" value={todoTitle} onChange={(e)=>setTodoTitle(e.target.value)}/>
                
                </FormGroup>
                <FormGroup>
              
                    <Label htmlFor="forGrouptExampleInput">Description</Label>
                    <textarea className="form-control" rows="2" id="todoDescription" value={todoDescription} onChange={(e)=>setDescription(e.target.value)}/>
            
                </FormGroup>
                <FormGroup>
               
                    <Label htmlFor="time">Choose Time:</Label>
                    <input type="time" className="form-control" id="todotime" value={todoTime} onChange={(e)=>setTime(e.target.value)}/>
              
                </FormGroup>
                <FormGroup>
              
                        <Label htmlFor="todoStatus">Select Status</Label>
                        <Input type="select" id="todoStatus" name="todoStatus" value={todoStatus} onChange={(e)=>setTodoStatus(e.target.value)}>
                        <option value="incomplete">InComplete</option>
                        <option value="completed">Completed</option>
                        </Input>
               
                </FormGroup>

                <button type="submit" className="btn btn-primary">Add Todo</button>
                <Link to="/">
                    <button type="button" className="btn btn-danger">Cancel</button>
                </Link>
            </Form>

        </div>
        </>
    )
}

export default CreateTodo;