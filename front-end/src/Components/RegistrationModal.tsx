import { Modal } from "react-bootstrap"
import React, { ChangeEvent, useState} from "react";


// how to define props?
const RegistrationModal = (props:any): JSX.Element => {
  type LoginValues = {
    email:string,
    password:string
  }

  const [loginInfo, setLoginInfo] = useState<LoginValues>({
    email:"",
    password:""
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginInfo({...loginInfo, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(loginInfo)
  }
  return (
    <>
      <Modal show={props.show}  animation={false}>
        <Modal.Header closeButton onClick={props.handleClose}>
          <Modal.Title>Sign In / Register</Modal.Title>
        </Modal.Header>
        <form onSubmit={(e)=>handleSubmit(e)}> {/*needs submit function*/}
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
          <button 
          className="border-2 border-black"
          type={'submit'}>
            Sign In
          </button>
        </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default RegistrationModal