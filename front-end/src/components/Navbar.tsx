import React, { useState } from "react"
import UserEntryModal from "../user-entry/UserEntry"
import { NavBarProp } from "../user-entry/UserEntry.types";


const Navbar: React.FC<NavBarProp> = ({user}) => { 
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
            LOGO 
          </li>
          <li>
            {user ? 
            <button onClick={()=>{console.log('loggin out')}}>
              Logout
            </button>
            :
            <button onClick={()=> handleShow()}>
              Login / Sign Up   
            </button>
            }
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar