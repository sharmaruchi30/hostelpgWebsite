import React, { useState } from "react";
import "../../styles/cardPage.css";
import room from "../../assets/icons/room.png";
import bath from "../../assets/icons/bath.png";
import arrow from "../../assets/icons/arrowright.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const CardPage = ({ houseInfo }) => {
  const [slideImages, setSlideImages] = useState(houseInfo.image_path[0]);
  const [slideIndex, setSlideIndex] = useState(0);

  const imageLeft = () => {
    if (slideIndex === 0) {
      let last = houseInfo.image_path.length - 1;
      setSlideIndex(last);
      setSlideImages(houseInfo.image_path[slideIndex]);
    } else {
      setSlideIndex(slideIndex - 1);
      setSlideImages(houseInfo.image_path[slideIndex]);
    }
  };

  const imageRight = () => {
    if (slideIndex === houseInfo.image_path.length - 1) {
      setSlideIndex(0);
      setSlideImages(houseInfo.image_path[slideIndex]);
    } else {
      setSlideIndex(slideIndex + 1);
      setSlideImages(houseInfo.image_path[slideIndex]);
    }
  };
  return (
    <>
      <div className="filterhandles">
        <div className="headText" style={{ textTransform: "capitalize" }}>
          {houseInfo.location.area}
        </div>
      </div>

      <div className="cparea">
        <div
          className="cpright animate__animated animate__fadeIn"
          style={{
            backgroundImage: `url(${slideImages})`,
            backgroundSize: "cover",
          }}
        >
          <button className=" arrow leftarrow" onClick={() => imageLeft()}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>

          <button className=" arrow leftarrow" onClick={() => imageRight()}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <div className="cpleft animate__animated animate__fadeInRight">
          <div className="typehead">Paying Guest</div>
          <div className="cpAddress">
            {houseInfo.location.area}, {houseInfo.location.city},{" "}
            {houseInfo.location.state}
          </div>

          <div className="cpprice">
            <div className="amount">₹{houseInfo.price} </div>
            <div className="pm">/ month</div>
          </div>
          <button className="cpcontactBtn">
            Show Contacts <img src={arrow} alt="" />
          </button>

          <div className="roomInfo">
            <div className="cproom">
              <img src={room} alt="" />
              {houseInfo.no_of_rooms} Rooms
            </div>
            <div className="cproom">
              <img src={bath} alt="" />
              {houseInfo.no_of_bathrooms} Rooms
            </div>
          </div>

          <div className="foodOptions">
            <label htmlFor="foodOptions"> Food Options </label>
            <div className="optionsList">
              {houseInfo.food_categories.map((food, index) => (
                <div className="listItem">
                  <img src={arrow} alt="" />
                  <span>{food}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="desc">
            <div className="deschead">Description -</div>
            <div className="descpara">{houseInfo.description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPage;

// <div className="area">
//         <div className="leftarea">
//           <div className="address">
//             {houseInfo.location.area}, {houseInfo.location.city},{" "}
//             {houseInfo.location.state}
//           </div>
//           <div className="imgarea">
//             <img src={houseInfo.image_path[0]} alt="" />
//           </div>
//           <div className="description">
//             <span className="headText"> Description:</span>
//             {houseInfo.description}
//           </div>
//         </div>
//         <div className="rightarea">
//           <div className="allInfoCard">
//             <div className="cpinfo">
//               <div className="foodCat">
//                 <div className="cpheading">Food Categories</div>
//                 <hr />
//                 <label>Veg</label> <br />
//                 <label htmlFor="">Non veg</label>
//               </div>
//               <div className="others">
//                 <div className="type">
//                   <div className="cpheading">Type</div>
//                   <hr />
//                   <div className="restSpace">
//                     <label> {houseInfo.category} </label>
//                   </div>
//                 </div>
//                 <div className="type">
//                   <div className="cpheading">Rooms</div>
//                   <hr />
//                   <div className="restSpace">
//                     <label> {houseInfo.no_of_rooms} </label>
//                   </div>
//                 </div>
//                 <div className="type">
//                   <div className="cpheading">Bathrooms</div>
//                   <hr />
//                   <div className="restSpace">
//                     <label> {houseInfo.no_of_bathrooms} </label>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="price">
//               <div className="label">PRICE :</div>
//               <div className="amount">$400 </div>
//             </div>

//             <div className="infoCardbtns">
//               <button className="icBtn">Contact Now</button>
//               <button className="icBtn simple">Save</button>
//             </div>
//           </div>
//         </div>
//       </div>
