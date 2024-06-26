import { useState } from "react"
import UserEntryModal from "../user-entry/UserEntry"


const Navbar  = () => { 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <UserEntryModal
      show={show}
      handleClose={handleClose}
      handleShow={handleShow}
    />
      <nav className="border-2 border-black">
        <ul>
          <li>
            LOGO HEADER
          </li>
          <li>
            <button onClick={()=> handleShow()}>
              Login / Sign Up
              
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar