import React from "react";
import { Link, useNavigate } from "react-router-dom";
import bath from "../assets/icons/bath.png";
import room from "../assets/icons/room.png";

const Card = ({ cardType, houseInfo }) => {
  const navigate = useNavigate();

  const deleteRoute = async (h_id) => {
    const url = `http://localhost:3001/house/${h_id}/delete`;
    try {
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          window.location.reload(false);
        })
        .catch((err) => {
          console.log("error", err);
        });
    } catch (e) {}
  };
  return (
    <div class="card">
      <div class="card-image">
        <Link to={"/houseView"} state={{ houseInfo: houseInfo }}>
          <img
            style={{
              height: "100%",
              width: "100%",
            }}
            src={houseInfo.image_path[0]}
            alt=""
          />
        </Link>
      </div>

      <div className="info">
        <div className="roombathinfo">
          <div class="room info2">
            <div className="num">{houseInfo.no_of_rooms}</div>
            <img className="iconimg" src={room} alt="" />
          </div>
          <div className="bathroom info2">
            <div className="num"> {houseInfo.no_of_bathrooms} </div>
            <img className="iconimg" src={bath} alt="" />
          </div>
        </div>
        <div className="cardPrice">₹{houseInfo.price}</div>
      </div>
      <div className="lastrow">
        <div class="heading">{houseInfo.location.area}</div>

        {cardType == "settings" ? (
          <div
            className="cardBtnsOut"
            style={{
              display: "flex",
            }}
          >
            <button
              class="carddeleteBtn"
              onClick={() => deleteRoute(houseInfo._id)}
            >
              <svg viewBox="0 0 448 512" class="svgIcon">
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
              </svg>
            </button>
            <button class="carddeleteBtn cardeditBtn">
              <svg
                // viewBox="0 0 448 512"
                class="svgIcon editsvgIcon"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
              >
                <path d="M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z" />
              </svg>
            </button>
          </div>
        ) : (
          <button class="bookmarkBtn">
            <span class="IconContainer">
              <svg viewBox="0 0 384 512" height="0.9em" class="icon">
                <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path>
              </svg>
            </span>
            <p class="text">Save</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
