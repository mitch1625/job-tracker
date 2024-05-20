import { AxiosResponse } from "axios";
import { api } from "../../utilities";
import { UserEntry } from "../UserEntry.types";

interface LoginResponse {
  status: number,
  data : {
    user:string,
    token:string
  },
  token:string
}

const Login = async(userEntry:UserEntry) => {
  try{
    const response = await api.post<AxiosResponse,LoginResponse>("users/login/", {
        email:userEntry.email,
        password:userEntry.password
      }
    )
      if (response.status === 200) {
        console.log(response)
        localStorage.setItem("token", response.data.token)
        api.defaults.headers.common[
          "Authorization"
        ] = `Token ${response.data.token}`
        return response.data
      }
  } 
    catch(err) {
      // if (err.response.status === 404) {
        console.log(err)
      // }
    }
} 

export default Login