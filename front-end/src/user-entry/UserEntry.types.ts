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

export type { User, UserEntry, Response }