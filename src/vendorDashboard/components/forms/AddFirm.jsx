import React from "react";

const AddFirm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="firmSection">
      <form className="tableForm" onSubmit={handleSubmit}>
        <h3>Add Firm</h3>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter First Name"
          required
        />

        <label htmlFor="area">Area</label>
        <input
          type="text"
          id="area"
          name="area"
          placeholder="Enter Area"
          required
        />

        <div className="checkInp">
          <span className="fieldLabel">Category</span>
          <div className="inputContainer">
            <label className="checkboxContainer" htmlFor="categoryVeg">
              <input
                type="checkbox"
                id="categoryVeg"
                name="category"
                value="veg"
              />
              <span>Veg</span>
            </label>

            <label className="checkboxContainer" htmlFor="categoryNonVeg">
              <input
                type="checkbox"
                id="categoryNonVeg"
                name="category"
                value="nonveg"
              />
              <span>Non-Veg</span>
            </label>

            <label className="checkboxContainer" htmlFor="categoryBoth">
              <input
                type="checkbox"
                id="categoryBoth"
                name="category"
                value="both"
              />
              <span>Both</span>
            </label>
          </div>
        </div>

        <div className="checkInp">
          <span className="fieldLabel">Regions</span>
          <div className="inputContainer">
            <label className="checkboxContainer" htmlFor="regionSouthIndian">
              <input
                type="checkbox"
                id="regionSouthIndian"
                name="region"
                value="south-indian"
              />
              <span>South Indian</span>
            </label>

            <label className="checkboxContainer" htmlFor="regionNonVeg">
              <input
                type="checkbox"
                id="regionNonVeg"
                name="region"
                value="north-indian"
              />
              <span>North-Indian</span>
            </label>

            <label className="checkboxContainer" htmlFor="regionBoth">
              <input
                type="checkbox"
                id="regionBoth"
                name="region"
                value="chinese"
              />
              <span>Chinese</span>
            </label>

            <label className="checkboxContainer" htmlFor="regionbakery">
              <input
                type="checkbox"
                id="regionbakery"
                name="region"
                value="bakery"
              />
              <span>Bakery</span>
            </label>
          </div>
        </div>

         <label htmlFor="offer">Offer</label>
        <input
          type="text"
          id="offer"
          name="offer"
          placeholder="Enter Offer"
          required
        />

        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          name="image"
          placeholder="Enter Image"
          required
        />

        <div className="btnSubmit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddFirm;
