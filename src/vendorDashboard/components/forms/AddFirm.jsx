import React from 'react'

const AddFirm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="firmSection">

      <form className="tableForm" onSubmit={handleSubmit}>
        <h3>Add Firm</h3> 
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" placeholder="Enter First Name" required />

        <label htmlFor="area">Area</label>
        <input type="text" id="area" name="area" placeholder="Enter Area" required />

        <label htmlFor="category">Category</label>
        <input type="text" id="category" name="category" placeholder="Enter category" required />

        <label htmlFor="region">Region</label>
        <input type="text" id="region" name="region" placeholder="Enter Region" required />

        <label htmlFor="region">Region</label>
        <input type="text" id="region" name="region" placeholder="Enter Region" required />

        <label htmlFor="offer">Offer</label>
        <input type="text" id="offer" name="offer" placeholder="Enter Offer" required />

        <label htmlFor="image">Image</label>
        <input type="file" id="image" name="image" placeholder="Enter Image" required />


        <div className="btnSubmit">
          <button type="submit">Submit</button>
        </div>

      </form>
    </div>


  )
}

export default AddFirm
