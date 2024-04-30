import { Modal } from "react-bootstrap"
import React, { useState} from "react";


// how to define props?
const RegistrationModal = (props:any): JSX.Element => {


  return (
    <>
      <Modal show={props.show}  animation={false}>
        <Modal.Header closeButton onClick={props.handleClose}>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body onClick={()=>console.log(props)}>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
      <form>
        <input placeholder="Enter email" name='email'/>
        <input placeholder="Enter password" name='password'/>
        <button type='submit'>Submit button to register</button>
      </form>
    </>
  )
}

export default RegistrationModal