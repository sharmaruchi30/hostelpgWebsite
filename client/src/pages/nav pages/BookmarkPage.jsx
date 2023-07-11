import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
const BookmarkPage = () => {
  const [savedHouseData, setSavedHouseData] = useState([]);
  const user = useSelector((state) => state.user);
  const bookmarks = useSelector((state) => state.user.bookmarks);
  useEffect(() => {
    const data = {
      id_list: bookmarks,
    };
    fetch("http://localhost:3001/house/allBookmarks/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setSavedHouseData(json["house"]);
        console.log("saved", savedHouseData);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  return (
    <>
      {!user ? (
        <div className="login-to-use">
          <div className="">Please Login to Use this</div>
          <button className="shadowBtn"> Log In</button>
        </div>
      ) : null}
      <div className="filterhandles">
        <div className="headText animate__animated animate__fadeInRight">
          Your Saved Adds
        </div>
      </div>
      <div className="searchResults">
        <div className="searchResultInnerDiv">
          {savedHouseData
            ? savedHouseData.map((house, index) =>
                house !== null ? (
                  <Card
                    houseInfo={house}
                    // location={house.location.area}
                    // image={house.image_path[0]}
                    bookmarks={bookmarks}
                  />
                ) : null
              )
            : null}
        </div>
      </div>
    </>
  );
};

export default BookmarkPage;
