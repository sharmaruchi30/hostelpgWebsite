import React, { useState } from "react";
import "../../styles/addPage.css";
import { Formik } from "formik";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
// import * as yup from "yup";
import { toast } from "react-toastify";

import FormikControl from "../../components/form/FormikControl";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../../firebase";

const AddPage = () => {
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
    category: "pg",
    no_of_rooms: "1",
    no_of_bathrooms: "1",
    food_categories: [],
    image_path: "",
    description: "",
    price: "",
    area: "",
    city: "",
    state: "",
    reviews: "",
  };

  const foodList = [
    { key: "Veg", value: "Veg" },
    { key: "Non Veg", value: "Non Veg" },
    { key: "Jain", value: "Jain" },
  ];

  const submitData = async (data, resetForm) => {
    try {
      const res = await fetch("http://localhost:3001/house/addhouse/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      });
      // console.log(imagesUrl);
      if (res.ok) {
        resetForm({ values: initialValues });
        notify("Add Created Successfully");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleFormSubmit = async (values, { resetForm }) => {
    // const getImages = async () => {
    //   return imagesUrl;
    // };
    try {
      // console.log(values.food_categories);
      let allImages = values.image_path;
      const imagesUrl = [];
      // for (let i = 0; i < allImages.length; i++) {
      //   let file = values.image_path[i];
      //   var storagePath = "uploads/" + file.name;
      //   const storageRef = ref(storage, storagePath);
      //   const uploadTask = uploadBytesResumable(storageRef, file);
      //   uploadTask.on(
      //     "state_changed",
      //     (snapshot) => {
      //       // progrss function ....
      //       const progress =
      //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //       console.log("Upload is " + progress + "% done");
      //     },
      //     (error) => {
      //       // error function ....
      //       console.log(error);
      //     },
      //     () => {
      //       // complete function ....
      //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      //         console.log("File available at", downloadURL);
      //         imagesUrl.push(downloadURL);
      //       });
      //     }
      //   );
      // }

      let file = values.image_path[0];
      var storagePath = "uploads/" + file.name;
      const storageRef = ref(storage, storagePath);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // progrss function ....
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          // error function ....
          console.log(error);
        },
        () => {
          // complete function ....
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            imagesUrl.push(downloadURL);
            var house = {
              userId: userId,
              category: values.category,
              no_of_rooms: values.no_of_rooms,
              no_of_bathrooms: values.no_of_bathrooms,
              food_categories: values.food_categories,
              image_path: imagesUrl,
              description: values.description,
              price: values.price,
              location: {
                area: values.area,
                city: values.city,
                state: values.state,
              },
              reviews: [],
            };

            submitData(house, resetForm);
          });
        }
      );
      // console.log(imagesUrl);

      console.log(values.food_categories);
      console.log(JSON.stringify(imagesUrl));
    } catch (e) {
      console.log(values.image_path);
      console.log("poora error", e);
    }
  };

  // const handleFormSubmit = async (values, onsubmitProps) => {
  //   const toFormData = ((f) => f(f))((h) => (f) => f((x) => h(h)(f)(x)))(
  //     (f) => (fd) => (pk) => (d) => {
  //       if (d instanceof Object) {
  //         Object.keys(d).forEach((k) => {
  //           const v =
  //             d[k] === null
  //               ? ""
  //               : d[k] === true
  //               ? 1
  //               : d[k] === false
  //               ? 0
  //               : d[k];
  //           if (pk) k = `${pk}[${k}]`;
  //           if (
  //             v instanceof Object &&
  //             !(v instanceof Date) &&
  //             !(v instanceof File)
  //           ) {
  //             return f(fd)(k)(v);
  //           } else {
  //             fd.append(k, v);
  //           }
  //         });
  //       }
  //       return fd;
  //     }
  //   )(new FormData())();

  //   try {
  //     var form_data = jsonToFormData (jsonForPost, testJSON);
  //     var house = `{
  //       "userId": "${userId}",
  //       "category": "${values.category}",
  //       "no_of_rooms": "${values.no_of_rooms}",
  //       "no_of_bathrooms": "${values.no_of_bathrooms}",
  //       "food_categories": [
  //           "${values.food_categories}"
  //       ],
  //       "image_path": [
  //           "${values.image_path}"
  //       ],
  //       "description": "${values.description}",
  //       "location": {
  //           "area": "${values.area}",
  //           "city": "${values.city}",
  //           "state": "${values.state}"
  //       },
  //       "reviews": []
  //      }`;
  //     var house = {
  //       userId: userId,
  //       category: values.category,
  //       no_of_rooms: values.no_of_rooms,
  //       no_of_bathrooms: values.no_of_bathrooms,
  //       food_categories: [values.food_categories],
  //       image_path: [values.image_path],
  //       description: values.description,
  //       location: {
  //         area: values.area,
  //         city: values.city,
  //         state: values.state,
  //       },
  //       reviews: [],
  //     };
  //     const formdata = toFormData(house);
  //     console.log(formdata);

  //     // const formdata = new FormData();
  //     // formdata.append("userId", userId);
  //     // formdata.append("category", values.category);
  //     // formdata.append("no_of_rooms", values.no_of_rooms);
  //     // formdata.append("no_of_bathrooms", values.no_of_bathrooms);
  //     // let food = [values.food_categories];
  //     // formdata.append("food_categories", food);
  //     // formdata.append("image_path", values.image_path.name);
  //     // formdata.append("description", values.description);
  //     // let location = {
  //     //   area: values.area,
  //     //   city: values.city,
  //     //   state: values.state,
  //     // };
  //     // formdata.append("location", JSON.stringify(location));
  //     const res = await fetch("http://localhost:3001/house/addhouse/", {
  //       method: "POST",
  //       // headers: {
  //       //   "Content-Type": "application/json",
  //       // },
  //       body: formdata,
  //     });
  //     if (res.ok) {
  //       Notify("Add Created Successfully");
  //     }
  //   } catch (e) {
  //     console.log("error", e);
  //   }
  // };
  return (
    <>
      <ToastContainer />
      <div className="filterhandles">
        <div className="headText">Create Create Your Own Advertisement</div>
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
            <div className="formGroup">
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
                  onChange={(e) => setFieldValue("image_path", e.target.files)}
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

              <button className="APBtn" type="submit">
                <span class="button_top"> Add</span>
              </button>
            </div>
          </form>
        )}
      </Formik>
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
