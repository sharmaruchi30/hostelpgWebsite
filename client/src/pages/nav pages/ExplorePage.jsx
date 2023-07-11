import { React, useEffect, useState } from "react";
import Card from "../../components/Card";
import search from "../../assets/icons/search.svg";
import { useSelector } from "react-redux";
const ExplorePage = () => {
  const bookmarks = useSelector((state) => state.user.bookmarks);
  const [houseData, setHouseData] = useState([]);
  const [searchLoc, setSearchLoc] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [forPerson, setForPerson] = useState("");
  const [foodOption, setFoodOption] = useState("");

  const handleSearchChange = (e) => {
    setSearchLoc(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
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
            <option value="">Price Range</option>
            <option value="&lt; 5000">&lt; 5000</option>
            <option value="&gt; 5000 - &lt; 10000">
              &gt; 5000 - &lt; 10000
            </option>
            <option value="&gt; 10000 - &lt; 15000">
              &gt; 10000 - &lt; 15000
            </option>
            <option value="&gt; 15000 - &lt; 30000">
              &gt; 15000 - &lt; 30000{" "}
            </option>
            <option value="&gt; 30000 ">&gt; 30000 </option>
          </select>
          <select name="forPerson" id="" className="hpDropDowns">
            <option value="">Rooms</option>
            <option value="">1 Room</option>
            <option value="">2 Rooms</option>
            <option value="">4 Rooms or more</option>
          </select>
          <select name="foodOptions" id="" className="hpDropDowns">
            <option value="">Food Option</option>
            <option value="">Veg</option>
            <option value="">Non Veg</option>
            <option value="">Jain</option>
          </select>
        </div>
        <div className="rightFilters"></div>
      </div>
      <div className="searchResults">
        <div className="searchResultInnerDiv">
          {houseData
            ? houseData.map((house, index) =>
                house.location.area.includes(searchLoc) ? (
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
