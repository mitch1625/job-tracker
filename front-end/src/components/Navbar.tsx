import { useState } from "react"
import UserEntryModal from "../user-entry/UserEntry"
import { useUser } from "../user-entry/UserEntry.types";

const Navbar  = () => { 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const user = useUser()

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
            {user ? 
            <button onClick={()=> handleShow()}>
              Login / Sign Up   
            </button>
            :
            <button onClick={()=>{console.log('loggin out')}}>
              Logout
            </button>
            }
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar