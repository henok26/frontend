import React, { useState } from "react";
import { DatePicker, Space } from "antd";

const Search = () => {
  const { RangePicker } = DatePicker;
  // const [keyword, setKeyword] = useState({});

  const [keyword, setKeyword] = useState({ city: '', guests: '' });

  //Storing the data range value
  const [value, setValue] = useState([]);
  function returnDates(date, dateString) {
    //setting the date range value
    setValue([date[0], date[1]]);
    //updating keyword object with date range
    updateKeyword("dateIn", dateString[0]);
    updateKeyword("dateOut", dateString[1]);
  }
  //function to update a specific field in the keyword state of object
  const updateKeyword = (field, value) => {
    setKeyword((prevKeyword) => ({ ...prevKeyword, [field]: value }));
  };

  return (
    <>
      <div className="searchbar">
        {/*        
       //input field for searching destination */}
        <input
          className="search"
          placeholder="search destinations"
          id="search_destination"
          type="text"
          value={keyword.city}
          onChange={(e) => updateKeyword("city", e.target.value)}
        />
        <Space direction="vertical" size={12} className="search">
          <RangePicker
            value={value}
            format="YYYY-MM-DD"
            picker="date"
            className="date_picker"
            disabledDate={(current) => {
              return current && current.isBefore(Date.now(), "day");
            }}
            onChange={returnDates}
          />
        </Space>
        {/* input field for adding guest */}
        <input
          className="search"
          id="addguest"
          type="number"
          placeholder="Add guest"
          onChange={(e)=>updateKeyword('guests',e.target.value)}
          value={keyword.guests}
        />
        {/* Search icon */}
        <span className="material-symbols-outlined searchicon">search</span>

      </div>
    </>
  );
};

export default Search;
