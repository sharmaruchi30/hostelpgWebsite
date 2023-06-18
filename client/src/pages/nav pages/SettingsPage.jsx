import { React, useEffect, useState } from "react";
import Card from "../../components/Card";
import search from "../../assets/icons/search.svg";
import { useSelector } from "react-redux";
const SettingsPage = () => {
  const [houseData, setHouseData] = useState([]);
  const userId = useSelector((state) => state.user._id);
  const url = `http://localhost:3001/house/${userId}/`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json);
        setHouseData(json["house"]);
        console.log("houseVar", houseData);
        console.log(userId);
        console.log(url);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  return (
    <>
      <div className="filterhandles">
        <form action="">
          <div className="search">
            <div className="headText">Your Advertisements</div>
          </div>
        </form>
      </div>
      <div className="searchResults">
        <div className="searchResultInnerDiv">
          {houseData
            ? houseData.map((house, index) => (
                <Card
                  cardType="settings"
                  houseInfo={house}
                  // location={house.location.area}
                  // image={house.image_path[0]}
                />
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
