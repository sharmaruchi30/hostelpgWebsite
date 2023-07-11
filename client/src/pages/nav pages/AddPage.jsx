import "../../styles/addPage.css";
import { Formik } from "formik";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import * as yup from "yup";
import { toast } from "react-toastify";

import FormikControl from "../../components/form/FormikControl";
import { uploadCloudinary } from "./upload";
import { useState } from "react";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
//   list,
// } from "firebase/storage";
// import { storage } from "../../firebase";

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
const addPageSchema = yup.object({
  no_of_rooms: yup.number().required("No. of rooms Required"),
  no_of_bathrooms: yup.number().required("No. of rooms Required"),
  image_path: yup.mixed().required("Upload Atleast one Image."),
  description: yup.string().required("Add Some description"),
  price: yup.string().required("Enter a Price per room"),
  area: yup.string().required("Enter Area"),
  city: yup.string().required("Enter City"),
  state: yup.string().required("Enter State"),
});
const AddPage = () => {
  const user = useSelector((state) => state.user);
  const userId = useSelector((state) => state.user._id);
  const [adding, setAdding] = useState(false);
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

  // const submitData = async (data, resetForm) => {
  //   try {
  //     const res = await fetch("http://localhost:3001/house/addhouse/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     // console.log(imagesUrl);
  //     if (res.ok) {
  //       resetForm({ values: initialValues });
  //       notify("Add Created Successfully");
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // const getImages = async (values) => {
  //   let allImages = values.image_path;
  //   const imagesUrl = [];
  //   for (let i = 0; i < allImages.length; i++) {
  //     let file = values.image_path[i];
  //     var storagePath = "uploads/" + file.name;
  //     const storageRef = ref(storage, storagePath);
  //     const uploadTask = uploadBytesResumable(storageRef, file);
  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         // progrss function ....
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log("Upload is " + progress + "% done");
  //       },
  //       (error) => {
  //         // error function ....
  //         console.log(error);
  //       },
  //       () => {
  //         // complete function ....
  //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //           console.log("File available at", downloadURL);
  //           imagesUrl.push(downloadURL);
  //         });
  //       }
  //     );
  //   }
  //   return imagesUrl;
  // };

  // const handleFormSubmit = async (values, { resetForm }) => {
  //   // const getImages = async () => {
  //   //   return imagesUrl;
  //   // };
  //   try {
  //     // let imagesUrl = await getImages(values);
  //     // console.log(values.food_categories);
  //     // await getImages(values).then((data) => console.log(data));
  //     // console.log("images", imagesUrl);

  //     // let file = values.image_path[0];
  //     // const imagesUrl = [];
  //     // var storagePath = "uploads/" + file.name;
  //     // const storageRef = ref(storage, storagePath);
  //     // const uploadTask = uploadBytesResumable(storageRef, file);
  //     // uploadTask.on(
  //     //   "state_changed",
  //     //   (snapshot) => {
  //     //     // progrss function ....
  //     //     const progress =
  //     //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //     //     console.log("Upload is " + progress + "% done");
  //     //   },
  //     //   (error) => {
  //     //     // error function ....
  //     //     console.log(error);
  //     //   },
  //     //   () => {
  //     //     // complete function ....
  //     //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //     //       console.log("File available at", downloadURL);
  //     //       imagesUrl.push(downloadURL);
  //     //       var house = {
  //     //         userId: userId,
  //     //         category: values.category,
  //     //         no_of_rooms: values.no_of_rooms,
  //     //         no_of_bathrooms: values.no_of_bathrooms,
  //     //         food_categories: values.food_categories,
  //     //         image_path: imagesUrl,
  //     //         description: values.description,
  //     //         price: values.price,
  //     //         location: {
  //     //           area: values.area,
  //     //           city: values.city,
  //     //           state: values.state,
  //     //         },
  //     //         reviews: [],
  //     //       };

  //     //       submitData(house, resetForm);
  //     //     });
  //     //   }
  //     // );
  //     // console.log(imagesUrl);

  //     // console.log(values.food_categories);
  //     // console.log("json", JSON.parse(JSON.stringify(imagesUrl)));
  //   } catch (e) {
  //     // console.log(values.image_path);
  //     // console.log("poora error", e);
  //   }
  // };

  const handleFormSubmit = async (values, { resetForm }) => {
    try {
      // var form_data = toFormData(jsonForPost, testJSON);
      // var house = `{
      //   "userId": "${userId}",
      //   "category": "${values.category}",
      //   "no_of_rooms": "${values.no_of_rooms}",
      //   "no_of_bathrooms": "${values.no_of_bathrooms}",
      //   "food_categories": [
      //       "${values.food_categories}"
      //   ],
      //   "image_path": [
      //       "${values.image_path}"
      //   ],
      //   "description": "${values.description}",
      //   "location": {
      //       "area": "${values.area}",
      //       "city": "${values.city}",
      //       "state": "${values.state}"
      //   },
      //   "reviews": []
      //  }`;
      setAdding(true);
      let img_arr = [];
      for (let i = 0; i < values.image_path.length; i++) {
        const data = await uploadCloudinary(values.image_path[i]);
        img_arr.push(data.url);
      }
      var house = {
        userId: userId,
        category: values.category,
        no_of_rooms: values.no_of_rooms,
        no_of_bathrooms: values.no_of_bathrooms,
        food_categories: values.food_categories,
        image_path: img_arr,
        price: values.price,
        description: values.description,
        location: {
          area: values.area,
          city: values.city,
          state: values.state,
        },
      };
      console.log(house);
      // const formdata = new FormData();
      // for (let dataKey in house) {
      //   if (dataKey === "location") {
      //     // append nested object
      //     for (let locationKey in house[dataKey]) {
      //       formdata.append(
      //         `location[${locationKey}]`,
      //         house[dataKey][locationKey]
      //       );
      //     }
      //   } else {
      //     formdata.append(dataKey, house[dataKey]);
      //   }
      // }
      // console.log(formdata.get("image_path"));
      // formdata.append("userId", userId);
      // formdata.append("category", values.category);
      // formdata.append("no_of_rooms", values.no_of_rooms);
      // formdata.append("no_of_bathrooms", values.no_of_bathrooms);
      // let food = [values.food_categories];
      // formdata.append("food_categories", food);
      // formdata.append("image_path", values.image_path.name);
      // formdata.append("price", values.price);
      // formdata.append("description", values.description);
      // let location = {
      //   area: values.area,
      //   city: values.city,
      //   state: values.state,
      // };
      // formdata.append("location", location);

      const res = await fetch("http://localhost:3001/house/addhouse/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(house),
      });
      if (res.ok) {
        resetForm({ values: initialValues });
        notify("Added Successfully");
        setAdding(false);
      }
    } catch (e) {
      console.log("error", e);
    }
  };
  return (
    <>
      {!user ? (
        <div className="login-to-use">
          <div className="">Please Login to Use this</div>
          <button className="shadowBtn"> Log In</button>
        </div>
      ) : null}
      <ToastContainer />
      <div className="filterhandles">
        <div className="headText animate__animated animate__fadeInRight">
          Create Create Your Own Advertisement
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={addPageSchema}
        onSubmit={handleFormSubmit}
      >
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
                  onBlur={handleBlur}
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
                  onBlur={handleBlur}
                />
              </div>
              {errors.no_of_rooms && touched.no_of_rooms ? (
                <p className="form-error">{errors.no_of_rooms} </p>
              ) : null}
              <div className="inputWithText">
                <span>No. of Bathrooms :</span>
                <input
                  className="APinput"
                  placeholder="No. of Bathrooms"
                  type="number"
                  value={values.no_of_bathrooms}
                  name="no_of_bathrooms"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.no_of_bathrooms && touched.no_of_bathrooms ? (
                <p className="form-error">{errors.no_of_bathrooms} </p>
              ) : null}
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
                  onBlur={handleBlur}
                />
                {/* <input
                  className="APinput"
                  placeholder="Image"
                  type="file"
                  value={undefined}
                  name="image_path"
                  onChange={(e) =>
                    setFieldValue("image_path", e.target.files[0])
                  }
                /> */}
              </div>
              {errors.image_path && touched.image_path ? (
                <p className="form-error">{errors.image_path} </p>
              ) : null}
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
                  onBlur={handleBlur}
                />
              </div>
              {errors.description && touched.description ? (
                <p className="form-error">{errors.description} </p>
              ) : null}
              <div className="inputWithText">
                <span>Rent Amount per month : </span>
                <input
                  className="APinput"
                  placeholder="Rent/month"
                  type="number"
                  value={values.price}
                  step="any"
                  name="price"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.price && touched.price ? (
                <p className="form-error">{errors.price} </p>
              ) : null}

              <div className="inputWithText locationInput">
                <span>Enter the Location :</span>
                <input
                  className="APinput"
                  placeholder="Area"
                  type="area"
                  value={values.area}
                  name="area"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <input
                  className="APinput"
                  placeholder="City"
                  type="text"
                  value={values.city}
                  name="city"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <input
                  className="APinput"
                  placeholder="State"
                  type="text"
                  value={values.state}
                  name="state"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  paddingLeft: "50px",
                }}
              >
                {errors.area && touched.area ? (
                  <p
                    className="form-error"
                    style={{
                      paddingRight: "70px",
                    }}
                  >
                    {errors.area}{" "}
                  </p>
                ) : null}
                {errors.state && touched.state ? (
                  <p
                    className="form-error"
                    style={{
                      paddingRight: "70px",
                    }}
                  >
                    {errors.state}{" "}
                  </p>
                ) : null}
                {errors.city && touched.city ? (
                  <p className="form-error">{errors.city} </p>
                ) : null}
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

              <button disabled={adding} className="APBtn" type="submit">
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
