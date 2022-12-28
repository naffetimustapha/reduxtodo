import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Task from '../Task/Task'
import '../Task/Task.css'

const ListTask = () => {
const list = useSelector(state => state.listReducer.listTasks);
const [status, setStatus] = useState("All");

  return (
    <div className='top'>
      <Button variant="primary" onClick={()=>setStatus("All")}>All</Button>
      <Button variant="primary" onClick={()=>setStatus("Done")} >Done</Button>
      <Button variant="primary" onClick={()=>setStatus("Undone")} >Undone</Button>

{
status === "Done" ?
list.filter((el)=>el.isDone === true).map((el) => <Task task={el}  key={el.id} />)
: status === "Undone" ?
list.filter((el)=>el.isDone === false).map((el) => <Task task={el}  key={el.id} />)
:
list.map((el) => <Task task={el}  key={el.id} />)}
    
    
    </div>
  )
}

export default ListTask