import { api } from "../../utilities";
import { UserEntry } from "../UserEntry.types";

interface Response {
  status: number,
  data : {
    user:string,
    token:string
  }
}

const Login = async(userEntry:UserEntry) => {
  try{
    const response = await api.post<Response>("users/login/", {
        email:userEntry.email,
        password:userEntry.password
      }
    )
      if (response.status === 200) {
        return response.data.user
      }
  } 
    catch(err) {
      if (err.response.status === 404) {
        console.log(err)
      }
    }
} 

export default Login