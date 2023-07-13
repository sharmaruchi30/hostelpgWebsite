import { React, useEffect, useState } from "react";
import Card from "../../components/Card";
import search from "../../assets/icons/search.svg";
import { useSelector } from "react-redux";
const ExplorePage = () => {
  const bookmarks = useSelector((state) => state.user.bookmarks);
  const [houseData, setHouseData] = useState([]);
  const [searchLoc, setSearchLoc] = useState("");
  const [priceRange, setPriceRange] = useState();
  const [priceLessRange, setPriceLessRange] = useState(100000);
  const [priceGreaterRange, setPriceGreaterRange] = useState(0);
  const [forPerson, setForPerson] = useState("");
  const [roomCount, setRoomCount] = useState(0);
  const [foodOption, setFoodOption] = useState("");

  const handleSearchChange = (e) => {
    setSearchLoc(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
    if (e.target.value === "0") {
      setPriceGreaterRange(0);
      setPriceLessRange(100000);
    }
    if (e.target.value === "1") {
      setPriceLessRange(5000);
      setPriceGreaterRange(0);
    } else if (e.target.value === "2") {
      setPriceGreaterRange(5000);
      setPriceLessRange(10000);
    } else if (e.target.value === "3") {
      setPriceGreaterRange(10000);
      setPriceLessRange(15000);
    } else if (e.target.value === "4") {
      setPriceGreaterRange(15000);
      setPriceLessRange(30000);
    } else if (e.target.value === "5") {
      setPriceGreaterRange(30000);
      setPriceLessRange(100000);
    } else {
      setPriceGreaterRange(0);
      setPriceLessRange(100000);
    }

    // console.log(e.target.value);
  };

  const handleRoom = (e) => {
    setForPerson(e.target.value);
    setRoomCount(e.target.value);
  };

  useEffect(() => {
    fetch("http://localhost:3001/house/")
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json);
        setHouseData(json["houses"]);
        console.log("houseVar", houseData);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  return (
    <>
      <div className="filterhandles">
        <div className="leftFilters">
          <div className="search">
            <input
              value={searchLoc}
              onChange={handleSearchChange}
              type="text"
              className="hpsearch"
              placeholder="Enter a location"
            />
            <button className="searchbtn">
              <img src={search} alt="" />
            </button>
          </div>

          <select
            value={priceRange}
            onChange={handlePriceChange}
            name="PriceRange"
            id=""
            className="hpDropDowns"
          >
            <option value="0">Price Range</option>
            <option value="1">&lt; 5000</option>
            <option value="2">&gt; 5000 - &lt; 10000</option>
            <option value="3">&gt; 10000 - &lt; 15000</option>
            <option value="4">&gt; 15000 - &lt; 30000 </option>
            <option value="5">&gt; 30000 </option>
          </select>
          <select
            value={forPerson}
            onChange={handleRoom}
            name="forPerson"
            className="hpDropDowns"
          >
            <option value="0">Rooms</option>
            <option value="1">Single Sharing</option>
            <option value="2">Double Sharing</option>
            <option value="3">Tripple Sharing</option>
            <option value="4">Four Sharing</option>
          </select>
          <select name="foodOptions" id="" className="hpDropDowns">
            <option value="all">Food Option</option>
            <option value="veg">Veg</option>
            <option value="Non veg">Non Veg</option>
            <option value="Jain">Jain</option>
          </select>
        </div>
        <div className="rightFilters"></div>
      </div>
      <div className="searchResults">
        <div className="searchResultInnerDiv">
          {houseData
            ? houseData.map((house, index) =>
                house.location.area.includes(searchLoc) &&
                Number(house.price) >= priceGreaterRange &&
                Number(house.price) <= priceLessRange ? (
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

export default ExplorePage;
