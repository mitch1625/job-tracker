interface SubmitButtonInterface {
  title:string
}

const SubmitButtonComponent = ({title}:SubmitButtonInterface) => {
  return (
    <button type={'submit'} className="border-2 border-black">
      {title}
    </button>
  )
}

export default SubmitButtonComponent