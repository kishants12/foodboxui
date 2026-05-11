import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../data/ApiPath";

const AddFirm = () => {
  const navigate = useNavigate();
  const [firmName, setFirmName] = useState("");
  const [area, setArea] = useState("");
  const [category, setCategory] = useState([]);
  const [offer, setOffer] = useState("");
  const [regions, setRegions] = useState([]);
  const [image, setImage] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loginToken = localStorage.getItem("vendorToken");
    console.log("Token retrieved:", loginToken ? "Token found" : "No token found");
    if (!loginToken) {
      alert("Please login to add a firm.");
      navigate("/vendor-login");
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory((prev) => prev.filter((cat) => cat !== value));
    } else {
      setCategory((prev) => [...prev, value]);
    }
  };

  const handleRegionChange = (e) => {
    const value = e.target.value;
    if (regions.includes(value)) {
      setRegions((prev) => prev.filter((reg) => reg !== value));
    } else {
      setRegions((prev) => [...prev, value]);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Validation
      if (!firmName.trim()) {
        alert("Please enter firm name");
        return;
      }
      if (!area.trim()) {
        alert("Please enter area");
        return;
      }
      if (category.length === 0) {
        alert("Please select at least one category");
        return;
      }
      if (!offer.trim()) {
        alert("Please enter offer");
        return;
      }
      if (regions.length === 0) {
        alert("Please select at least one region");
        return;
      }
      if (!image) {
        alert("Please select an image");
        return;
      }

      const loginToken = localStorage.getItem("vendorToken");

      if (!loginToken) {
        alert("Authentication token missing. Please login again.");
        navigate("/vendor-login");
        return;
      }

      const formData = new FormData();
      formData.append("firmName", firmName);
      formData.append("area", area);
      formData.append("offer", offer);

      // Send category and region as JSON arrays (easier for backend to parse)
      formData.append("category", JSON.stringify(category));
      formData.append("region", JSON.stringify(regions));

      if (image) {
        formData.append("image", image);
      }

      console.log("Sending request with token:", loginToken ? "Token included" : "No token");
      console.log("Form data - firmName:", firmName);
      console.log("Form data - area:", area);
      console.log("Form data - offer:", offer);
      console.log("Form data - category:", category);
      console.log("Form data - region:", regions);
      console.log("Form data - image:", image?.name);

      const response = await fetch(`${API_URL}/firm/create`, {
        method: "POST",
        headers: {
          'token': loginToken
        },
        body: formData
      });

      let responseData;
      try {
        responseData = await response.json();
      } catch (parseError) {
        console.error("Failed to parse response as JSON:", parseError);
        responseData = { error: `Server error: ${response.status}` };
      }

      console.log("Response status:", response.status);
      console.log("Response data:", responseData);

      if (response.ok) {
        console.log("Firm added successfully:", responseData);
        alert("Firm added successfully!");
        // Reset form fields
        setFirmName("");
        setArea("");
        setCategory([]);
        setOffer("");
        setRegions([]);
        setImage(null);
        // Navigate to dashboard or list page after success
        navigate("/vendor-dashboard");
      } else {
        console.error("Failed to add firm - Status:", response.status);
        console.error("Response data:", responseData);
        
        const errorMsg = 
          responseData?.details ? 
          `${responseData.error}: ${JSON.stringify(responseData.details)}` :
          responseData?.error || `Server error: ${response.status}`;
        
        alert(`Failed to add firm: ${errorMsg}`);
      } 

    } catch (error) {
      console.error("Error adding firm:", error.message);
      console.error("Full error:", error);
      alert(`Failed to add firm: ${error.message || "Please try again."}`);
    }
  };
  return (
    <>
      {isAuthenticated ? (
        <div className="firmSection">
          <form className="tableForm" onSubmit={handleSubmit}>
            <h3>Add Firm</h3>
        <label htmlFor="firmName">Firm Name</label>
        <input
          type="text"
          id="firmName"
          name="firmName"
          placeholder="Enter Firm Name"
          value={firmName}
          onChange={(e) => setFirmName(e.target.value)} 
          required
        />

        <label htmlFor="area">Area</label>
        <input
          type="text"
          id="area"
          name="area"
          placeholder="Enter Area"
          value={area}
          onChange={(e) => setArea(e.target.value)}   
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
                value="vegetarian"
                checked={category.includes("vegetarian")}
                onChange={handleCategoryChange}
              />
              <span>Veg</span>
            </label>

            <label className="checkboxContainer" htmlFor="categoryNonVeg">
              <input
                type="checkbox"
                id="categoryNonVeg"
                name="category"
                value="non-vegetarian"
                checked={category.includes("non-vegetarian")}
                onChange={handleCategoryChange}
              />
              <span>Non-Veg</span>
            </label>

            <label className="checkboxContainer" htmlFor="categoryBoth">
              <input
                type="checkbox"
                id="categoryBoth"
                name="category"
                value="vegan"
                checked={category.includes("vegan")}
                onChange={handleCategoryChange}
              />
              <span>vegan</span>
            </label>
          </div>
        </div>

        

         <label htmlFor="offer">Offer</label>
        <input
          type="text"
          id="offer"
          name="offer"
          placeholder="Enter Offer"
          value={offer}
          onChange={(e) => setOffer(e.target.value)}
          required
        />
             <div className="checkInp">
          <span className="fieldLabel">Regions</span>
          <div className="inputContainer">
            <label className="checkboxContainer" htmlFor="regionSouthIndian">
              <input
                type="checkbox"
                id="regionSouthIndian"
                name="region"
                value="south"
                checked={regions.includes("south")}
                onChange={handleRegionChange}
              />
              <span>South Indian</span>
            </label>

            <label className="checkboxContainer" htmlFor="regionNorthIndian">
              <input
                type="checkbox"
                id="regionNorthIndian"
                name="region"
                value="north"
                checked={regions.includes("north")}
                onChange={handleRegionChange}
              />
              <span>North-Indian</span>
            </label>

            <label className="checkboxContainer" htmlFor="regionChinese">
              <input
                type="checkbox"
                id="regionChinese"
                name="region"
                value="chinese"
                checked={regions.includes("chinese")}
                onChange={handleRegionChange}
              />
              <span>Chinese</span>
            </label>

            <label className="checkboxContainer" htmlFor="regionBakery">
              <input
                type="checkbox"
                id="regionBakery"
                name="region"
                value="west"
                checked={regions.includes("west")}
                onChange={handleRegionChange}
              />
              <span>West</span>
            </label>
          </div>
        </div>

        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          name="image"
          placeholder="Enter Image"
          onChange={handleImageChange}
          required
        />

        <div className="btnSubmit">
          <button type="submit">Submit</button>
        </div>
      </form>
        </div>
      ) : (
        <div className="firmSection">
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default AddFirm;
