import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../../Js/Actions/ListTask";

const AddTask = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addTask({ id: Math.random(), text, isDone: false }));
      handleClose();
    } else {
      alert("can not add empty task");
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Form.Control
          type="text"
          placeholder="New task"
          onChange={(e) => setText(e.target.value)}
          vlaue={text}
        />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddTask;