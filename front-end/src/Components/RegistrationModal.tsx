import { Button, Modal } from "react-bootstrap"
import React, { ChangeEvent, FormEvent, useState} from "react";
import { api } from "../utilities";
import axios from "axios"
import SubmitButtonComponent from "./SubmitButtonComponent";

type LoginValues = {
  email:string,
  password:string
}

const RegistrationModal = (props:any): JSX.Element => {
  const [newUser, setNewUser] = useState(false)
  const [loginInfo, setLoginInfo] = useState<LoginValues>({
    email:"",
    password:""
  })


  const login = async(e:Event) => {
    e.preventDefault()
    let response = await api.post("users/login/", {
      email:loginInfo.email,
      password:loginInfo.password
    })
    .catch((err) => {
      if (err.response.status === 404) {
          console.log(err)
      }
    })
    // if (response.status === 200) {
    //   setUser
    // }
  } 

// handle Functions
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginInfo({...loginInfo, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log(loginInfo)
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

export default RegistrationModal