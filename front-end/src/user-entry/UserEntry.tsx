import { Button, Modal } from "react-bootstrap"
import React, { ChangeEvent, FormEvent, useState} from "react";
import { api } from "../utilities";
import axios, { AxiosResponse } from "axios"
import SubmitButtonComponent from "../components/SubmitButtonComponent";
import { useOutletContext } from "react-router-dom";
import type {UserEntry, User} from "./UserEntry.types.ts"

interface Response {
  status: number,
  data : {
    user:string,
    token:string
  }
}

const UserEntryModal = (props:any): JSX.Element => {
  const [newUser, setNewUser] = useState(false) // this provides conditional rendering for register / login modal
  // const {user,setUser} = useOutletContext()
  const [userEntry, setUserEntry] = useState<UserEntry>({
    email:"",
    password:""
  })

  const login = async(e:Event) => {
    // e.preventDefault()
    await api.post<Response>("users/login/", {
      email:userEntry.email,
      password:userEntry.password
    })
    .catch((err) => {
      if (err.response.status === 404) {
          console.log(err)
      }
    })
    .then((response: AxiosResponse<Response> | void) => {
      if(response) {

        console.log(response)
        if (response.status === 200) {
          console.log(response.data)
          //   // setUser(response.data)
        }
      }
      })
  } 

// handle Functions
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserEntry({...userEntry, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    login(userEntry)
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