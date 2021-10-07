import React from "react";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { movies } from "./MovieListe";
const AddToListe = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(...movies, JSON.stringify(data));

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <FontAwesomeIcon icon={faPlus} style={{ fontSize: "20px" }} />
      </Button>
      <p>{result}</p>
      <Modal show={show} onHide={handleClose} onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Film Title</Form.Label>
            <Form.Control type="title" placeholder="Add film title" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Add film description" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Rating</Form.Label>
          <Form.Select aria-label="Default select example">
            <option></option>
            <option value="1" >⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="3">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐⭐⭐</option>
          </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Film Title</Form.Label>
            <Form.Control type="title" placeholder="Title film" />
          </Form.Group>
          <span id="rateMe1"></span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <input type="submit" />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddToListe;
