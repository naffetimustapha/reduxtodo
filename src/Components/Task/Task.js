import { Button } from "react-bootstrap";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, doneTask } from "../../Js/Actions/ListTask";
import EditTask from "../EditTask/EditTask";
import "./Task.css";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="task-card">
        <p className={task.isDone ?"Done": null}>{task.text}</p>
        <EditTask task={task} />
        
        <Button className="jng" variant="primary" onClick={() => dispatch(deleteTask(task.id))}>
          Delete
        </Button>
        <Button variant="primary" onClick={() => dispatch(doneTask(task.id))}>{task.isDone ? "unDone":"Done"}</Button>
      </div>
    </div>
  );
};

export default Task;