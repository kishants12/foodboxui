import React from "react";

const SideBar = ({ showAddFirmHandler, showAddProductHandler }) => {
  return (
    <div className="sideBarSection">
      <ul>
        <li>
          <button type="button" onClick={showAddFirmHandler}>
            Add Firm
          </button>
        </li>
        <li>
          {" "}
          <button type="button" onClick={showAddProductHandler}>
            Add Product
          </button>
        </li>
        <li>All Products</li>
        <li>User Details</li>
      </ul>
    </div>
  );
};

export default SideBar;
