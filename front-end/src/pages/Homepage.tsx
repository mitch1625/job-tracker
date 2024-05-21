import { useOutletContext } from "react-router-dom"

const Homepage = () => {
  const {user} = useOutletContext()
  
  return (
    <>
      <h1>
        This is the header wher the logo goes
      </h1>
      <button>
        This button redirects to login / signup
      </button>
      <div>
        There is going to be an image here
      </div>
      <div>
        {user ? "logged in"
        :
        "logged out"}
      </div>
    </>
  )
}

export default Homepage