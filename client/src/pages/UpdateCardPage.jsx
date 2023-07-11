import React, { useState } from "react";
import "../styles/addPage.css";
import { Formik } from "formik";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
// import * as yup from "yup";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import FormikControl from "../components/form/FormikControl";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../firebase";

const AddPage = () => {
  const { state } = useLocation();
  const { houseInfo } = state;
  const userId = useSelector((state) => state.user._id);
  const notify = (message) =>
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  // const [foodOptions, setFoodOptions] = useState([]);

  // const handleFoodChkbox = (e) => {
  //   const { value, checked } = e.target;
  //   if (checked) {
  //     // push selected value in list
  //     setFoodOptions((prev) => [...prev, value]);
  //   } else {
  //     // remove unchecked value from the list
  //     setFoodOptions((prev) => prev.filter((x) => x !== value));
  //   }
  //   console.log(foodOptions);
  // };
  const initialValues = {
    category: houseInfo.category,
    no_of_rooms: houseInfo.no_of_rooms,
    no_of_bathrooms: houseInfo.no_of_bathrooms,
    food_categories: houseInfo.food_categories,
    image_path: houseInfo.image_path,
    description: houseInfo.description,

    price: houseInfo.price,
    area: houseInfo.location.area,
    city: houseInfo.location.city,
    state: houseInfo.location.state,
    reviews: houseInfo.reviews,
  };

  const foodList = [
    { key: "Veg", value: "Veg" },
    { key: "Non Veg", value: "Non Veg" },
    { key: "Jain", value: "Jain" },
  ];

  const handleFormSubmit = async (values, { resetForm }) => {};

  return (
    <>
      <div className="updatePage">
        <div className="">
          <div className="headText animate__animated animate__fadeInRight">
            Update Page
          </div>
        </div>
        <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleSubmit,
            handleChange,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="formGroup ">
                <div className="inputWithText">
                  <span>Choose Category :</span>
                  <select
                    className="drpDown"
                    name="category"
                    value={values.category}
                    onChange={handleChange}
                  >
                    <option>Paying Guest</option>
                    <option>Hostel</option>
                    <option>Flat</option>
                    <option>Home</option>
                  </select>
                </div>

                <div className="inputWithText">
                  <span>No. of Rooms :</span>
                  <input
                    className="APinput"
                    placeholder="No. of Rooms"
                    type="number"
                    value={values.no_of_rooms}
                    name="no_of_rooms"
                    onChange={handleChange}
                  />
                </div>
                <div className="inputWithText">
                  <span>No. of Bathrooms :</span>
                  <input
                    className="APinput"
                    placeholder="No. of Bathrooms"
                    type="number"
                    value={values.no_of_bathrooms}
                    name="no_of_bathrooms"
                    onChange={handleChange}
                  />
                </div>
                <div className="inputWithText">
                  <span>Select All Available categories :</span>
                  <div className="chkBoxArea">
                    <FormikControl
                      control="checkbox"
                      name="food_categories"
                      options={foodList}
                    />
                  </div>
                </div>
                <div className="inputWithText">
                  <span>Select Image Files :</span>
                  <input
                    className="APinput"
                    placeholder="Image"
                    multiple
                    type="file"
                    value={undefined}
                    name="image_path"
                    onChange={(e) =>
                      setFieldValue("image_path", e.target.files)
                    }
                  />
                </div>

                <div className="inputWithText">
                  <span>Description :</span>
                  <textarea
                    style={{
                      overflow: "hidden",
                    }}
                    className="APinput"
                    placeholder="Description"
                    type="text"
                    value={values.description}
                    name="description"
                    onChange={handleChange}
                  />
                </div>
                <div className="inputWithText">
                  <span>Rent Amount per month : </span>
                  <input
                    className="APinput"
                    placeholder="Rent/month"
                    multiple
                    type="number"
                    value={values.price}
                    step="any"
                    name="price"
                    onChange={handleChange}
                  />
                </div>
                <div className="inputWithText locationInput">
                  <span>Enter the Location :</span>
                  <input
                    className="APinput"
                    placeholder="Area"
                    type="area"
                    value={values.area}
                    name="area"
                    onChange={handleChange}
                  />
                  <input
                    className="APinput"
                    placeholder="City"
                    type="text"
                    value={values.city}
                    name="city"
                    onChange={handleChange}
                  />
                  <input
                    className="APinput"
                    placeholder="State"
                    type="text"
                    value={values.state}
                    name="state"
                    onChange={handleChange}
                  />
                </div>
                {/* <div className="inputWithText">
                <span>No. of Bathrooms :</span>
                <input
                  className="APinput"
                  placeholder="City"
                  type="text"
                  value={values.city}
                  name="city"
                  onChange={handleChange}
                />
              </div>
              <div className="inputWithText">
                <span>No. of Bathrooms :</span>
                <input
                  className="APinput"
                  placeholder="State"
                  type="text"
                  value={values.state}
                  name="state"
                  onChange={handleChange}
                />
              </div> */}

                <div className="updateBtns">
                  <button className="APBtn" type="submit">
                    <span class="button_top"> Cancel</span>
                  </button>
                  <button
                    className="APBtn"
                    type="submit"
                    style={{
                      marginLeft: "12px",
                    }}
                  >
                    <span class="button_top"> Update </span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AddPage;

// var house = `{
//   "userId": "${userId}",
//   "category": "${values.category}",
//   "no_of_rooms": "${values.no_of_rooms}",
//   "no_of_bathrooms": "${values.no_of_bathrooms}",
//   "food_categories":
//       ${values.food_categories}
//   ,
//   "image_path": [
//       "${downloadURL}"
//   ],
//   "description": "${values.description}",
//   "location": {
//       "area": "${values.area}",
//       "city": "${values.city}",
//       "state": "${values.state}"
//   },
//   "reviews": []
//  }`;
