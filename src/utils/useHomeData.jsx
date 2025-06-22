import { useState, useEffect } from "react";
import { MAIN_DATA_URL } from "../utils/constants";

const useHomeData = () => {
  const [listOfResObj, setListOfResObj] = useState([]);
  const [filterObj, setFilterObj] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(MAIN_DATA_URL);
      const json = await data.json();
      const restaurants =
        json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfResObj(restaurants);
      setFilterObj(restaurants);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSearch = () => {
    const searchTextFilter = listOfResObj.filter((resData) =>
      resData.info.name.toLowerCase().includes(searchText.trim().toLowerCase())
    );
    setFilterObj(searchTextFilter);
  };

  return {
    filterObj,
    handleSearch,
    listOfResObj,
    searchText,
    setSearchText,
    setFilterObj,
  };
};

export default useHomeData;
