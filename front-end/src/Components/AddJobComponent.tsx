import { ChangeEvent, FormEvent, useState } from "react"

const AddJobComponent = () => {
  type JobValues = {
    companyName: string,
    date: string,
    roleTitle: string,
    location: string
  }

    const [jobInfo, setJobInfo] = useState<JobValues>({
      companyName:"",
      date:"",
      roleTitle:"",
      location:""
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setJobInfo({...jobInfo, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      console.log(jobInfo)
    }


  return (
    <>
      <form className="border-2 border-black" onSubmit={(e)=>handleSubmit(e)}>
        <input 
          name={'companyName'} 
          className="border-2" 
          placeholder="Company Name" 
          onChange={(e)=>handleChange(e)}
        /> 
        <input 
          name= {'date'}
          className="border-2" 
          placeholder="Date" 
          onChange={(e)=>handleChange(e)}
        />
        <input 
          name={'roleTitle'}
          className="border-2" 
          placeholder="Role Title" 
          onChange={(e)=>handleChange(e)}
        />
        <input 
          name={'location'}
          className="border-2" 
          placeholder="Location" 
          onChange={(e)=>handleChange(e)}
        />
        <input 
          className="border-2" 
          placeholder="notes modal" 
          name="notes"
        />
        <button type={'submit'}>
          Submit
        </button>
    </form>
    </>
  )
}

export default AddJobComponent