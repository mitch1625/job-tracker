const AddJobComponent = () => {
  return (
    <>
      {/* name is used for refernce */}
      <form>
        <input placeholder="Company Name" name='text'/> 
        <input placeholder="Date" name='date' />
        <input placeholder="Role Title" name="role"/>
        <input placeholder="Location" name="location"/>
        <input placeholder="notes modal" name="notes"/>
        <button>
          Add Job button
        </button>
    </form>
    </>
  )
}

export default AddJobComponent