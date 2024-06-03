import { useOutletContext } from "react-router-dom"

type User = {
  email:string
}

type UserEntry = {
  email:string,
  password:string
}

interface Response {
  status: number,
  data : {
    user:string,
    token:string
  },
  token:string
}

type UserContext = {
  user: User | null
}

export function useUser() {
  return useOutletContext<UserContext>()
}

export type { User, UserEntry, Response, UserContext }