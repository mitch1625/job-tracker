import { Button, Modal } from "react-bootstrap"
import React, { ChangeEvent, FormEvent, useState, useEffect} from "react";
import { api } from "../utilities";
import SubmitButtonComponent from "../components/SubmitButtonComponent";
import Login from "./services/Login";
import { UserEntry } from "./UserEntry.types";
import { useOutletContext } from "react-router-dom";

const UserEntryModal = (props:any): JSX.Element => {
  const [newUser, setNewUser] = useState(false) // this provides conditional rendering for register / login modal
  const [userEntry, setUserEntry] = useState<UserEntry>({
    email:"",
    password:""
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserEntry({...userEntry, [event.target.name]: event.target.value})
  }

  const handleSubmit = async(event: FormEvent) => {
    event.preventDefault()
    const response = await Login(userEntry)
    console.log(response)
  }

  return (
    <>
      <Modal show={props.show}  animation={false}>
        <Modal.Header closeButton onClick={props.handleClose}>
          <Modal.Title>Sign In / Create Account</Modal.Title>
        </Modal.Header>
        <form onSubmit={(e)=>handleSubmit(e)}>
          {!newUser  ? 
          <div> {/* Displys the login form for returning users*/}
            <Modal.Body>
                <input onChange={(e)=>{handleChange(e)}}
                  name={'email'}
                  placeholder="Email"
                  />
                <input
                  name={'password'}
                  placeholder="Password" 
                  type="password"
                  onChange={(e)=>handleChange(e)}
                  />
            </Modal.Body>
            <Modal.Footer>
              <SubmitButtonComponent title="Login"/>
              <div>
                Don't have an account? 
                <div className="cursor-pointer text-blue-700" onClick={()=>setNewUser(!newUser)}>Register</div>
              </div>
            </Modal.Footer>
          </div>
      :
      <div> {/* Registration form */}
        <Modal.Body>
          <input onChange={(e)=>{handleChange(e)}}
            name={'email'}
            placeholder="Email"
            />
          <input
            name={'password'}
            placeholder="Password" 
            type="password"
            onChange={(e)=>handleChange(e)}
            />
        </Modal.Body>
        <Modal.Footer>
          <SubmitButtonComponent title="Create Account"/>
          <div>
            Already have an account? 
            <div className="cursor-pointer text-blue-700" onClick={()=>setNewUser(!newUser)}>
              Sign In
            </div>
          </div>
        </Modal.Footer>
      </div>
      }
        </form>
      </Modal>
    </>
  )
}

export default UserEntryModal