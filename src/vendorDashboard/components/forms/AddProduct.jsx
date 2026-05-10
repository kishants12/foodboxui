import React from 'react'

const AddProduct = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
          <form className="tableForm" onSubmit={handleSubmit}>
        <h3>Add Product</h3> 
        <label htmlFor="productName">Product Name</label>
        <input type="text" id="productName" name="productName" placeholder="Enter Product Name" required />

        <label htmlFor="price">Price</label>
        <input type="text" id="price" name="price" placeholder="Enter Price" required />

        <label htmlFor="category">Category</label>
        <input type="text" id="category" name="category" placeholder="Enter category" required />

        <label htmlFor="bestseller">Bestseller</label>
        <input type="text" id="bestseller" name="bestseller" placeholder="Enter Bestseller" required />

        <label htmlFor="description">Description</label>
        <input type="text" id="description" name="description" placeholder="Enter description" required />

        <label htmlFor="image">Product Image</label>
        <input type="file" id="prodimage" name="prodImage" placeholder="Enter Image" required />

        <div className="btnSubmit">
          <button type="submit">Submit</button>
        </div>

      </form>
  )
}

export default AddProduct
